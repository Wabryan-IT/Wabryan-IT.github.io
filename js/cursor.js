/**
 * cursor.js — Curseur custom + barre de progression scroll
 */

export function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  }, { passive: true });

  (function tick() {
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(tick);
  })();
}

export function initScrollBar() {
  const bar = document.getElementById('scroll-bar');
  const nav = document.querySelector('nav');
  if (!bar || !nav) return;

  window.addEventListener('scroll', () => {
    const s = window.scrollY;
    const m = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${s / m})`;
    nav.classList.toggle('scrolled', s > 60);
  }, { passive: true });
}
