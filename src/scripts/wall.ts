// Home 3D & AI wall behaviour (BRIEF §4.7, Figma note 342:1342).
// - each row auto-scrolls at its own speed/direction, seamless loop (items duplicated in markup)
// - vertical wheel scrolls the page; horizontal swipe / Shift+wheel moves the wall
// - hover pauses the row under the cursor; drag works (pointer events + inertia)
// - filter All / 3D / AI dims other categories (CSS via data-filter)
// - reduced motion: no auto-scroll; rAF only while the wall is in view

const wall = document.querySelector<HTMLElement>('[data-wall]');

if (wall) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = window.matchMedia('(min-width: 768px)');

  interface Row {
    el: HTMLElement;
    track: HTMLElement;
    speed: number;
    dir: number;
    offset: number; // px scrolled, wraps at loop width
    loop: number; // width of one copy incl. gap
    hovered: boolean;
    dragging: boolean;
    velocity: number; // px per frame after drag (inertia)
  }

  const rows: Row[] = Array.from(wall.querySelectorAll<HTMLElement>('[data-row]')).map((el) => ({
    el,
    track: el.querySelector<HTMLElement>('[data-track]')!,
    speed: Number(el.dataset.speed) || 16,
    dir: Number(el.dataset.dir) || 1,
    offset: Number(el.dataset.offset) || 0,
    loop: 0,
    hovered: false,
    dragging: false,
    velocity: 0,
  }));

  const measure = () => {
    rows.forEach((row) => {
      const gap = parseFloat(getComputedStyle(row.track).columnGap) || 0;
      // Half the track (two identical copies) = one loop.
      row.loop = (row.track.scrollWidth + gap) / 2;
    });
  };

  const render = (row: Row) => {
    if (!row.loop) return;
    const x = ((row.offset % row.loop) + row.loop) % row.loop;
    row.track.style.transform = `translate3d(${-x}px, 0, 0)`;
  };

  // ── Animation loop ─────────────────────────────
  let raf = 0;
  let last = 0;
  let inView = false;

  const tick = (now: number) => {
    const dt = last ? Math.min(now - last, 64) / 1000 : 0;
    last = now;
    let busy = false;
    rows.forEach((row) => {
      if (row.dragging) return;
      if (Math.abs(row.velocity) > 0.05) {
        row.offset += row.velocity;
        row.velocity *= 0.94;
        busy = true;
      } else {
        row.velocity = 0;
      }
      if (!reduced.matches && !row.hovered) {
        row.offset += row.speed * row.dir * dt;
        busy = true;
      }
      render(row);
    });
    raf = busy && inView && desktop.matches ? requestAnimationFrame(tick) : 0;
    if (!raf) last = 0;
  };

  const start = () => {
    if (!raf && inView && desktop.matches) raf = requestAnimationFrame(tick);
  };

  // ── Hover pause ────────────────────────────────
  rows.forEach((row) => {
    row.el.addEventListener('pointerenter', (e) => {
      if (e.pointerType === 'mouse') row.hovered = true;
    });
    row.el.addEventListener('pointerleave', () => {
      row.hovered = false;
      start();
    });
  });

  // ── Horizontal wheel only ──────────────────
  // Vertical wheel always scrolls the page (Vanya: the wall must never trap scrolling).
  // A horizontal trackpad swipe or Shift + wheel moves the wall.
  wall.addEventListener(
    'wheel',
    (e) => {
      if (!desktop.matches || e.ctrlKey) return;
      const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (!horizontal && !e.shiftKey) return;
      const delta = horizontal ? e.deltaX : e.deltaY;
      if (!delta) return;
      e.preventDefault();
      const px = e.deltaMode === 1 ? delta * 16 : delta;
      rows.forEach((row) => {
        row.offset += px * row.dir;
        render(row);
      });
    },
    { passive: false },
  );

  // ── Drag with inertia ──────────────────────────
  let suppressClick = false;
  rows.forEach((row) => {
    let startX = 0;
    let lastX = 0;
    let lastT = 0;
    let moved = 0;
    let pointerId = -1;

    row.el.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 || !desktop.matches) return;
      pointerId = e.pointerId;
      startX = lastX = e.clientX;
      lastT = performance.now();
      moved = 0;
      row.velocity = 0;
      row.dragging = true;
    });

    row.el.addEventListener('pointermove', (e) => {
      if (!row.dragging || e.pointerId !== pointerId) return;
      const dx = e.clientX - lastX;
      const now = performance.now();
      moved = Math.max(moved, Math.abs(e.clientX - startX));
      if (moved > 4 && !row.el.hasPointerCapture(pointerId)) {
        row.el.setPointerCapture(pointerId);
        row.el.classList.add('is-dragging');
      }
      row.offset -= dx;
      // Velocity in px/frame (≈16ms) for the inertia phase.
      row.velocity = (-dx / Math.max(now - lastT, 1)) * 16;
      lastX = e.clientX;
      lastT = now;
      render(row);
    });

    const end = (e: PointerEvent) => {
      if (!row.dragging || e.pointerId !== pointerId) return;
      row.dragging = false;
      row.el.classList.remove('is-dragging');
      if (row.el.hasPointerCapture(pointerId)) row.el.releasePointerCapture(pointerId);
      if (moved > 4) suppressClick = true;
      if (performance.now() - lastT > 80) row.velocity = 0;
      pointerId = -1;
      start();
    };
    row.el.addEventListener('pointerup', end);
    row.el.addEventListener('pointercancel', end);
  });

  // A drag must not trigger the tile link.
  wall.addEventListener(
    'click',
    (e) => {
      if (suppressClick) {
        e.preventDefault();
        e.stopPropagation();
        suppressClick = false;
      }
    },
    true,
  );
  wall.addEventListener('dragstart', (e) => e.preventDefault());

  // ── Filter ─────────────────────────────────────
  const buttons = wall.querySelectorAll<HTMLElement>('[data-filter-btn]');
  buttons.forEach((btn) =>
    btn.addEventListener('click', () => {
      const value = btn.dataset.filterBtn ?? 'all';
      wall.dataset.filter = value;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    }),
  );

  // ── Keyboard: keep focused tiles visible ───────
  wall.addEventListener('focusin', (e) => {
    const tile = (e.target as HTMLElement).closest<HTMLElement>('.wall__tile');
    const row = rows.find((r) => tile && r.el.contains(tile));
    if (!tile || !row) return;
    row.hovered = true; // pause while focused
    const rowBox = row.el.getBoundingClientRect();
    const box = tile.getBoundingClientRect();
    if (box.left < rowBox.left) row.offset -= rowBox.left - box.left + 32;
    else if (box.right > rowBox.right) row.offset += box.right - rowBox.right + 32;
    render(row);
  });
  wall.addEventListener('focusout', () => {
    rows.forEach((r) => (r.hovered = false));
    start();
  });

  // ── Init ───────────────────────────────────────
  const init = () => {
    measure();
    rows.forEach(render);
  };
  init();
  window.addEventListener('load', init, { once: true });
  window.addEventListener('resize', init, { passive: true });

  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    start();
  }).observe(wall);

  reduced.addEventListener('change', start);
  desktop.addEventListener('change', () => {
    init();
    start();
  });
}
