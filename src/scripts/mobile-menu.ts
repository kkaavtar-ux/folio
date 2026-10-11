// Mobile menu overlay: open/close, Esc, focus trap, body scroll lock.

const menu = document.querySelector<HTMLElement>('[data-menu]');
const openBtn = document.querySelector<HTMLElement>('[data-menu-open]');

if (menu && openBtn) {
  const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  let lastFocus: HTMLElement | null = null;

  const focusables = () => Array.from(menu.querySelectorAll<HTMLElement>(FOCUSABLE));

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (e.key !== 'Tab') return;
    const items = focusables();
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  function open() {
    lastFocus = document.activeElement as HTMLElement | null;
    menu!.classList.add('is-open');
    openBtn!.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    focusables()[0]?.focus();
  }

  function close() {
    menu!.classList.remove('is-open');
    openBtn!.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
    document.removeEventListener('keydown', onKey);
    (lastFocus ?? openBtn)!.focus();
  }

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    open();
  });

  menu.querySelector('[data-menu-close]')?.addEventListener('click', (e) => {
    e.preventDefault();
    close();
  });

  // In-page anchors (/#about, /#contact) must close the overlay before scrolling.
  menu.querySelectorAll('a[href]:not([data-menu-close])').forEach((a) =>
    a.addEventListener('click', () => {
      menu.classList.remove('is-open');
      openBtn.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    }),
  );

  // Leaving the mobile breakpoint while open → reset.
  window.matchMedia('(min-width: 768px)').addEventListener('change', (mq) => {
    if (mq.matches && menu.classList.contains('is-open')) close();
  });
}
