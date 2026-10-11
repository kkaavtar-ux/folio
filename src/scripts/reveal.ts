// Reveal on scroll (BRIEF §4.2–4.3): [data-reveal="fade" | "blur"] elements animate in once
// when ~15% visible. Elements entering together stagger by 80ms (max 6 steps).
// Two triggers so content can never stay hidden: IntersectionObserver, plus a geometry check on
// load/scroll that also reveals anything already scrolled past (e.g. reload mid-page).
// Reduced motion: CSS shows everything immediately; we just mark them in.

const pending = new Set(document.querySelectorAll<HTMLElement>('[data-reveal]'));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const STAGGER = 80;

const show = (batch: HTMLElement[]) => {
  batch
    .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top || a.getBoundingClientRect().left - b.getBoundingClientRect().left)
    .forEach((el, i) => {
      if (!pending.delete(el)) return;
      el.style.setProperty('--reveal-delay', `${Math.min(i, 6) * STAGGER}ms`);
      el.classList.add('is-in');
      io?.unobserve(el);
      // Drop the delay once done so later transitions (hovers) aren't delayed.
      el.addEventListener('transitionend', () => el.style.removeProperty('--reveal-delay'), { once: true });
    });
};

let io: IntersectionObserver | null = null;

if (reduced) {
  show([...pending]);
} else {
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(
      (entries) => show(entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement)),
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    );
    pending.forEach((el) => io!.observe(el));
  }

  // Geometry fallback: in view (top above 90% of the viewport) or already above it.
  const check = () => {
    if (!pending.size) return;
    const limit = window.innerHeight * 0.9;
    show([...pending].filter((el) => el.getBoundingClientRect().top < limit));
  };
  let queued = false;
  const onScroll = () => {
    if (queued) return;
    queued = true;
    setTimeout(() => {
      queued = false;
      check();
    }, 100);
  };
  check();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('load', check, { once: true });
}

export {};
