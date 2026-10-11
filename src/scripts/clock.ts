// Live local time in Tbilisi (24h HH:MM) for every [data-clock].

const clocks = document.querySelectorAll<HTMLElement>('[data-clock]');

if (clocks.length) {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Tbilisi',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const tick = () => {
    const now = fmt.format(new Date());
    clocks.forEach((el) => {
      if (el.textContent !== now) el.textContent = now;
    });
  };

  tick();
  // Align to the next minute, then tick every minute.
  setTimeout(() => {
    tick();
    setInterval(tick, 60_000);
  }, 60_000 - (Date.now() % 60_000) + 50);
}
