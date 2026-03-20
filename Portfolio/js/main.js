/**
 * main.js — Point d'entrée principal
 * Initialise tous les modules dans l'ordre correct.
 */

import { initCursor, initScrollBar } from './cursor.js';
import { initTheme }                 from './theme.js';
import { initLang, applyLang, currentLang } from './lang.js';
import { scrambleText }              from './scramble.js';
import { renderExperience, renderProjects, renderSkills, renderEducation } from './render.js';
import { initModal, loadImages }     from './modal.js';

/* ── MAGNETIC BUTTONS ── */
function initMagnetic() {
  document.querySelectorAll('.btn-primary, .btn-secondary, .contact-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width  / 2) * 0.2;
      const y = (e.clientY - r.top  - r.height / 2) * 0.2;
      btn.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ── RENDER ALL DYNAMIC SECTIONS ── */
function renderAll(images) {
  renderExperience();
  renderProjects(images);
  renderSkills();
  renderEducation();
  initMagnetic();
}

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded', () => {
  // Cursor + scroll
  initCursor();
  initScrollBar();

  // Theme
  initTheme();

  // Language
  initLang();

  // Scramble hero name
  scrambleText('hero-scramble', 'Wambo.');

  // Load images from localStorage
  const images = loadImages();

  // Initial render
  renderAll(images);

  // Modal (callback pour re-rendre les cards après upload)
  initModal((updatedImages) => {
    renderProjects(updatedImages);
  });

  // Re-render quand la langue change
  document.addEventListener('langchange', () => {
    renderAll(loadImages());
  });
});
