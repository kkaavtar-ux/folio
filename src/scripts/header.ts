// Header hide/show on scroll (BRIEF §3, §4.4).
// After 80px, scrolling down hides it; scrolling up by ≥16px shows it again.
// On home (`.site-header--over-hero`) it stays hidden while the hero is in view.

const header = document.querySelector<HTMLElement>('[data-header]');

if (header) {
  const HIDE_AFTER = 80;
  const SHOW_DELTA = 16;
  const hero = header.classList.contains('site-header--over-hero')
    ? document.querySelector<HTMLElement>('[data-hero]')
    : null;

  let scrolledAway = false;
  let anchorY = 0; // hide only after scrolling 80px past this point
  let heroWasVisible = true;
  let lastY = window.scrollY;
  let upDistance = 0;

  const update = () => {
    const y = Math.max(0, window.scrollY);
    const dy = y - lastY;
    if (dy > 0) {
      upDistance = 0;
      if (y > anchorY + HIDE_AFTER) scrolledAway = true;
    } else if (dy < 0) {
      upDistance -= dy;
      if (upDistance >= SHOW_DELTA || y <= HIDE_AFTER) scrolledAway = false;
    }
    lastY = y;

    const heroVisible = hero ? hero.getBoundingClientRect().bottom > header.offsetHeight : false;
    // Reveal once when the hero leaves the viewport.
    if (heroWasVisible && !heroVisible) {
      scrolledAway = false;
      anchorY = y;
    }
    if (heroVisible) anchorY = 0;
    heroWasVisible = heroVisible;

    header.classList.toggle('is-hidden', heroVisible || scrolledAway);
    header.toggleAttribute('inert', heroVisible);
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}

export {};
