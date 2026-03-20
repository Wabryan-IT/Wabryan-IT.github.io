/**
 * modal.js — Gestion de la modale projet
 * Ouverture, fermeture, upload d'image
 */

import { PROJECTS, TRANSLATIONS } from './data.js';

const IMAGES_KEY = 'bw-images';

/** Charge les images sauvegardées en localStorage */
export function loadImages() {
  try {
    return JSON.parse(localStorage.getItem(IMAGES_KEY) || '{}');
  } catch {
    return {};
  }
}

/** Sauvegarde les images en localStorage */
function saveImages(images) {
  try {
    localStorage.setItem(IMAGES_KEY, JSON.stringify(images));
  } catch (e) {
    console.warn('localStorage full — image not saved', e);
  }
}

let images       = loadImages();
let currentId    = null;
let onRenderCb   = null; // callback pour re-rendre les cards après upload

export function initModal(onRender) {
  onRenderCb = onRender;

  // Fermeture sur clic overlay
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal();
    });
  }

  // Fermeture Échap
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Upload
  const fileInput = document.getElementById('file-input');
  if (fileInput) {
    fileInput.addEventListener('change', handleUpload);
  }

  const uploadZone = document.getElementById('upload-zone');
  if (uploadZone) {
    uploadZone.addEventListener('click', () => fileInput?.click());
  }
}

export function openModal(id) {
  const lang = document.documentElement.getAttribute('data-lang') || 'fr';
  const p    = PROJECTS.find(x => x.id === id);
  if (!p) return;

  currentId = id;
  const img = images[id] || p.image;

  // Image
  const modalImg  = document.getElementById('modal-img');
  const modalImgPh = document.getElementById('modal-img-ph');

  if (img) {
    modalImg.src = img;
    modalImg.style.display = 'block';
    if (modalImgPh) modalImgPh.style.display = 'none';
  } else {
    modalImg.style.display = 'none';
    if (modalImgPh) modalImgPh.style.display = 'flex';
  }

  // Textes
  document.getElementById('modal-category').textContent  = p[`category_${lang}`];
  document.getElementById('modal-badge').textContent     = p[`badge_${lang}`];
  document.getElementById('modal-title').textContent     = p[`title_${lang}`];
  document.getElementById('modal-body').innerHTML        = p[`body_${lang}`];

  // Tags
  document.getElementById('modal-tags').innerHTML =
    p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  // Labels traduits
  const T = TRANSLATIONS.modal;
  setLabel('modal-label-tech',   T.technologies[lang]);
  setLabel('modal-label-image',  T.image_label[lang]);
  setLabel('upload-hint-text',   T.upload_hint[lang]);
  setLabel('modal-img-ph-text',  T.img_none[lang]);

  // Liens
  document.getElementById('modal-links').innerHTML = buildLinks(p);

  // Ouvre
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

export function closeModal() {
  document.getElementById('modal-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
  currentId = null;
}

function handleUpload(e) {
  const file = e.target.files[0];
  if (!file || !currentId) return;

  const reader = new FileReader();
  reader.onload = ev => {
    const dataUrl = ev.target.result;
    images[currentId] = dataUrl;
    saveImages(images);

    // Affiche l'image dans la modale avec animation
    const modalImg   = document.getElementById('modal-img');
    const modalImgPh = document.getElementById('modal-img-ph');

    if (modalImgPh) modalImgPh.style.display = 'none';
    modalImg.src            = dataUrl;
    modalImg.style.opacity  = '0';
    modalImg.style.transform = 'scale(1.04)';
    modalImg.style.display   = 'block';

    requestAnimationFrame(() => {
      modalImg.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      modalImg.style.opacity    = '1';
      modalImg.style.transform  = 'scale(1)';
    });

    // Re-rend les cards
    if (onRenderCb) onRenderCb(images);
    e.target.value = '';
  };

  reader.readAsDataURL(file);
}

function buildLinks(p) {
  const parts = [];
  if (p.github) {
    parts.push(`
      <a href="${p.github}" target="_blank" rel="noopener" class="modal-link modal-link-primary">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        GitHub →
      </a>`);
  }
  if (p.live) {
    parts.push(`
      <a href="${p.live}" target="_blank" rel="noopener" class="modal-link">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Live →
      </a>`);
  }
  return parts.join('');
}

function setLabel(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) el.textContent = text;
}

/** Expose openModal globalement pour les onclick HTML */
window.openModal  = openModal;
window.closeModal = closeModal;
