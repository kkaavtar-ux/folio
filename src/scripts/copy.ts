// Click-to-copy for [data-copy] (falls back to the element's own href, e.g. mailto:).

const toast = document.querySelector<HTMLElement>('[data-toast]');
let hideTimer: number | undefined;

function showToast(text: string) {
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add('is-visible');
  window.clearTimeout(hideTimer);
  hideTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 1600);
}

document.addEventListener('click', async (e) => {
  const el = (e.target as Element | null)?.closest<HTMLElement>('[data-copy]');
  if (!el || !navigator.clipboard) return;
  e.preventDefault();
  try {
    await navigator.clipboard.writeText(el.dataset.copy ?? '');
    showToast('Copied');
  } catch {
    if (el instanceof HTMLAnchorElement) window.location.href = el.href;
  }
});

export {};
