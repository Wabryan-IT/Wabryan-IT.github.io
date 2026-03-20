/**
 * lang.js — Switcher FR / EN
 * Lit les attributs data-fr et data-en sur chaque élément
 * et met à jour le contenu selon la langue active.
 */

const STORAGE_KEY = 'bw-lang';
export let currentLang = localStorage.getItem(STORAGE_KEY) || 'fr';

/** Applique la langue à tous les éléments [data-fr] / [data-en] */
export function applyLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  localStorage.setItem(STORAGE_KEY, lang);

  // Met à jour le label du bouton
  const label = document.getElementById('lang-label');
  if (label) label.textContent = lang === 'fr' ? 'EN' : 'FR';

  // Bascule tous les éléments qui ont data-fr ET data-en
  document.querySelectorAll('[data-fr]').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if (val !== null) el.innerHTML = val;
  });
}

export function initLang() {
  const btn = document.getElementById('btn-lang');
  if (!btn) return;

  // Applique la langue initiale
  applyLang(currentLang);

  btn.addEventListener('click', () => {
    const next = currentLang === 'fr' ? 'en' : 'fr';

    // Animation rapide
    btn.style.transform = 'scale(1.1)';
    setTimeout(() => { btn.style.transform = ''; }, 300);

    applyLang(next);

    // Déclenche le re-rendu des sections dynamiques
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: next } }));
  });
}
