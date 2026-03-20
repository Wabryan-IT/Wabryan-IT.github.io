/**
 * theme.js — Gestion du mode sombre / clair
 */

const STORAGE_KEY = 'bw-theme';

export function initTheme() {
  const html = document.documentElement;
  const btn  = document.getElementById('btn-theme');
  if (!btn) return;

  // Charge la préférence sauvegardée (dark par défaut)
  const saved = localStorage.getItem(STORAGE_KEY) || 'dark';
  html.setAttribute('data-theme', saved);

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);

    // Animation de rotation
    btn.style.transform = 'scale(1.2) rotate(180deg)';
    setTimeout(() => { btn.style.transform = ''; }, 420);
  });
}
