// Bear cursor reaction (BRIEF §4.6): desktop + fine pointer only.
// Tilts toward the cursor (rotateX/Y ≤ 7°) and shifts ≤ 14px, lerp 0.08 per frame,
// returns to center when the cursor leaves the hero. rAF runs only while needed.

const bear = document.querySelector<HTMLElement>('[data-bear]');
const hero = bear?.closest<HTMLElement>('[data-hero]');
const fine = window.matchMedia('(pointer: fine) and (min-width: 768px)');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

if (bear && hero) {
  const MAX_TILT = 7;
  const MAX_SHIFT = 14;
  const LERP = 0.08;

  const target = { x: 0, y: 0 }; // normalized −1…1
  const current = { x: 0, y: 0 };
  let raf = 0;
  let inView = true;

  const apply = () => {
    bear.style.setProperty('--tilt-x', `${(-current.y * MAX_TILT).toFixed(3)}deg`);
    bear.style.setProperty('--tilt-y', `${(current.x * MAX_TILT).toFixed(3)}deg`);
    bear.style.setProperty('--shift-x', `${(current.x * MAX_SHIFT).toFixed(2)}px`);
    bear.style.setProperty('--shift-y', `${(current.y * MAX_SHIFT).toFixed(2)}px`);
  };

  const frame = () => {
    current.x += (target.x - current.x) * LERP;
    current.y += (target.y - current.y) * LERP;
    apply();
    const settled = Math.abs(target.x - current.x) < 0.001 && Math.abs(target.y - current.y) < 0.001;
    raf = settled || !inView ? 0 : requestAnimationFrame(frame);
  };

  const kick = () => {
    if (!raf && inView) raf = requestAnimationFrame(frame);
  };

  const enabled = () => fine.matches && !reduced.matches;

  hero.addEventListener('pointermove', (e) => {
    if (!enabled() || e.pointerType !== 'mouse') return;
    const r = bear.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    target.x = Math.max(-1, Math.min(1, (e.clientX - cx) / (r.width / 2)));
    target.y = Math.max(-1, Math.min(1, (e.clientY - cy) / (r.height / 2)));
    kick();
  });

  hero.addEventListener('pointerleave', () => {
    target.x = 0;
    target.y = 0;
    kick();
  });

  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (inView) kick();
  }).observe(hero);
}

export {};
