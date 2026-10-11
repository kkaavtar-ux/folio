// Preloader animation (see components/Preloader.astro). Runs only when html.preload is set.

const root = document.documentElement;
const overlay = document.querySelector<HTMLElement>('[data-preloader]');

if (overlay && root.classList.contains('preload')) {
  try {
    sessionStorage.setItem('vk-pre', '1');
  } catch {
    /* private mode: preloader may show again, harmless */
  }

  const disc = overlay.querySelector<HTMLElement>('[data-pl-disc]')!;
  const goo = overlay.querySelector<HTMLCanvasElement>('[data-pl-goo]')!;
  const nums = overlay.querySelector<HTMLCanvasElement>('[data-pl-nums]')!;
  const g = goo.getContext('2d')!;
  const n = nums.getContext('2d')!;

  const size = Math.round(Math.min(420, Math.min(window.innerWidth, window.innerHeight) * 0.46));
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  overlay.style.setProperty('--pl-size', `${size}px`);
  for (const c of [goo, nums]) {
    c.width = size * dpr;
    c.height = size * dpr;
  }
  g.scale(dpr, dpr);
  n.scale(dpr, dpr);

  // Timeline (ms)
  const INVERT_AT = 1450;
  const INVERT_END = 1600;
  const COLLAPSE_AT = 1600;
  const OUT_AT = 1900;
  const DONE_AT = 2300;

  // Seeded random so every visit looks the same.
  let seed = 3;
  const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);

  const C = size / 2;
  const blobs = Array.from({ length: 20 }, () => ({
    angle: rnd() * Math.PI * 2,
    orbit: (0.14 + rnd() * 0.3) * size,
    speed: (rnd() - 0.5) * 1.1,
    phase: rnd() * Math.PI * 2,
    r: (0.035 + rnd() * 0.045) * size,
    label: String(Math.floor(rnd() * 46)).padStart(2, '0'),
  }));

  const mono = getComputedStyle(root).getPropertyValue('--font-mono') || 'monospace';
  const start = performance.now();

  const frame = (now: number) => {
    const t = now - start;
    const s = t / 1000;
    // Pull everything to the centre during the collapse.
    const pull = t < COLLAPSE_AT ? 1 : Math.max(0, 1 - (t - COLLAPSE_AT) / 300);

    g.fillStyle = '#000';
    g.fillRect(0, 0, size, size);
    g.fillStyle = '#fff';
    n.clearRect(0, 0, size, size);
    n.fillStyle = '#000';
    n.textAlign = 'center';
    n.textBaseline = 'middle';
    n.font = `400 ${Math.round(size * 0.03)}px ${mono}`;

    for (const b of blobs) {
      const a = b.angle + s * b.speed;
      const breathe = 1 + 0.18 * Math.sin(s * 2.4 + b.phase);
      const orbit = b.orbit * (0.85 + 0.15 * Math.sin(s * 1.3 + b.phase)) * pull;
      const x = C + Math.cos(a) * orbit;
      const y = C + Math.sin(a) * orbit;
      g.beginPath();
      g.arc(x, y, b.r * breathe, 0, Math.PI * 2);
      g.fill();
      if (pull > 0.5) n.fillText(b.label, x, y);
    }

    // Centre cell + load counter 0 → 100.
    const progress = Math.min(100, Math.round((Math.min(t, COLLAPSE_AT) / COLLAPSE_AT) * 100));
    g.beginPath();
    g.arc(C, C, size * 0.1 * (1 + 0.06 * Math.sin(s * 3)), 0, Math.PI * 2);
    g.fill();
    n.font = `400 ${Math.round(size * 0.075)}px ${mono}`;
    n.fillText(String(progress).padStart(3, '0'), C, C);

    disc.classList.toggle('is-inverted', t >= INVERT_AT && t < INVERT_END);
    if (t >= COLLAPSE_AT) disc.classList.add('is-collapsed');
    if (t >= OUT_AT) overlay.classList.add('is-out');

    if (t < DONE_AT) {
      requestAnimationFrame(frame);
    } else {
      root.classList.remove('preload');
      overlay.remove();
    }
  };

  requestAnimationFrame(frame);
}

export {};
