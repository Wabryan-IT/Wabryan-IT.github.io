/**
 * main.js — Point d'entrée principal
 * Initialise tous les modules dans l'ordre correct.
 */

import { initCursor, initScrollBar } from './cursor.js';
import { initTheme }                 from './theme.js';
import { initLang }                          from './lang.js';
import { scrambleText }              from './scramble.js';
import { renderExperience, renderProjects, renderSkills, renderEducation } from './render.js';
import { initModal, loadImages, openModal } from './modal.js';

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
function renderAll(store) {
  renderExperience();
  renderProjects(store);
  renderSkills();
  renderEducation();
  initMagnetic();
}

/* ── PROJECT CARD EVENTS — delegation, no inline onclick ── */
function attachProjectCards() {
  document.querySelectorAll('.project-card[data-project-id]').forEach(card => {
    // Remove old listeners by replacing with clone
    const clone = card.cloneNode(true);
    card.parentNode.replaceChild(clone, card);

    clone.addEventListener('click', () => {
      openModal(clone.dataset.projectId);
    });
    clone.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openModal(clone.dataset.projectId);
    });
  });
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

  // Load images store from localStorage
  const store = loadImages();

  // Initial render
  renderAll(store);

  // Modal — re-render cards after image upload/delete
  initModal((updatedStore) => {
    renderProjects(updatedStore);
    attachProjectCards();
  });

  // Attach card events after initial render
  attachProjectCards();

  // Re-render quand la langue change
  document.addEventListener('langchange', () => {
    renderAll(loadImages());
    attachProjectCards();
  });
});
