// Mobile carousels (BRIEF §3 Carousel): horizontal scroll-snap strips marked [data-carousel].
// They drift slowly on their own (~12px/s, ping-pong at the ends), pause on touch/hover/user
// scroll and resume 2s after. Swipe stays native. Reduced motion: no drift.
// Only strips that actually overflow drift (on desktop most of them are plain grids).

const strips = Array.from(document.querySelectorAll<HTMLElement>('[data-carousel]'));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

if (strips.length && !reduced.matches) {
  const SPEED = 12; // px per second
  const RESUME_AFTER = 2000;

  interface Strip {
    el: HTMLElement;
    pos: number;
    dir: 1 | -1;
    pausedUntil: number;
    held: boolean;
    visible: boolean;
    lastSet: number;
  }

  const items: Strip[] = strips.map((el) => ({
    el,
    pos: el.scrollLeft,
    dir: 1,
    pausedUntil: 0,
    held: false,
    visible: false,
    lastSet: -1,
  }));

  const overflowing = (s: Strip) => s.el.scrollWidth - s.el.clientWidth > 4;

  const pause = (s: Strip) => {
    s.el.classList.remove('is-drifting'); // give snapping back to the user
    s.pausedUntil = performance.now() + RESUME_AFTER;
  };

  items.forEach((s) => {
    const hold = () => {
      s.held = true;
      pause(s);
    };
    const release = () => {
      s.held = false;
      pause(s);
      kick();
    };
    s.el.addEventListener('pointerdown', hold, { passive: true });
    s.el.addEventListener('pointerup', release, { passive: true });
    s.el.addEventListener('pointercancel', release, { passive: true });
    s.el.addEventListener('mouseenter', hold);
    s.el.addEventListener('mouseleave', release);
    s.el.addEventListener('touchstart', hold, { passive: true });
    s.el.addEventListener('touchend', release, { passive: true });
    s.el.addEventListener(
      'scroll',
      () => {
        // Ignore our own writes; anything else is the user swiping.
        if (Math.abs(s.el.scrollLeft - s.lastSet) > 1) {
          s.pos = s.el.scrollLeft;
          pause(s);
          kick();
        }
      },
      { passive: true },
    );
  });

  let raf = 0;
  let last = 0;

  const tick = (now: number) => {
    const dt = last ? Math.min(now - last, 64) / 1000 : 0;
    last = now;
    let active = false;

    items.forEach((s) => {
      if (!s.visible || !overflowing(s)) return;
      active = true;
      if (s.held || now < s.pausedUntil) return;

      const max = s.el.scrollWidth - s.el.clientWidth;
      s.el.classList.add('is-drifting');
      s.pos += s.dir * SPEED * dt;
      if (s.pos >= max) {
        s.pos = max;
        s.dir = -1;
      } else if (s.pos <= 0) {
        s.pos = 0;
        s.dir = 1;
      }
      s.el.scrollLeft = s.pos;
      s.lastSet = s.el.scrollLeft;
    });

    raf = active ? requestAnimationFrame(tick) : 0;
    if (!raf) last = 0;
  };

  function kick() {
    if (!raf) raf = requestAnimationFrame(tick);
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const s = items.find((i) => i.el === e.target);
      if (s) s.visible = e.isIntersecting;
    });
    kick();
  });
  items.forEach((s) => io.observe(s.el));

  window.addEventListener('resize', kick, { passive: true });
}

export {};
