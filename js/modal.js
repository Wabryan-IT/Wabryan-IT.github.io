/**
 * modal.js — Modale projet avec carrousel d'images (max 3)
 * - Navigation prev / next par boutons
 * - Première image affichée par défaut
 * - Upload jusqu'à 3 images
 * - Suppression individuelle d'images
 * - Persistance localStorage
 */

import { PROJECTS, TRANSLATIONS } from './data.js';

const IMAGES_KEY  = 'bw-images';
const MAX_IMAGES  = 3;

/* ── STORAGE ── */
export function loadImages() {
  try { return JSON.parse(localStorage.getItem(IMAGES_KEY) || '{}'); }
  catch { return {}; }
}

function saveImages(store) {
  try { localStorage.setItem(IMAGES_KEY, JSON.stringify(store)); }
  catch (e) { console.warn('localStorage full', e); }
}

/* ── STATE ── */
let store       = loadImages(); // { projectId: [dataUrl, dataUrl, ...] }
let currentId   = null;
let currentIdx  = 0;            // index de l'image affichée dans le carrousel
let onRenderCb  = null;

/* ── INIT ── */
export function initModal(onRender) {
  onRenderCb = onRender;

  document.getElementById('modal-overlay')
    ?.addEventListener('click', e => { if (e.target.id === 'modal-overlay') closeModal(); });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  document.getElementById('file-input')
    ?.addEventListener('change', handleUpload);

  document.getElementById('upload-zone')
    ?.addEventListener('click', () => document.getElementById('file-input')?.click());
}

/* ── OPEN MODAL ── */
export function openModal(id) {
  const lang = document.documentElement.getAttribute('data-lang') || 'fr';
  const p    = PROJECTS.find(x => x.id === id);
  if (!p) return;

  currentId  = id;
  currentIdx = 0;

  // Textes
  document.getElementById('modal-category').textContent = p[`category_${lang}`];
  document.getElementById('modal-badge').textContent    = p[`badge_${lang}`];
  document.getElementById('modal-title').textContent    = p[`title_${lang}`];
  document.getElementById('modal-body').innerHTML       = p[`body_${lang}`];
  document.getElementById('modal-tags').innerHTML =
    p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  // Labels traduits
  const T = TRANSLATIONS.modal;
  setLabel('modal-label-tech',  T.technologies[lang]);
  setLabel('modal-label-image', T.image_label[lang]);
  setLabel('upload-hint-text',  T.upload_hint[lang]);

  // Liens
  document.getElementById('modal-links').innerHTML = buildLinks(p);

  // Carrousel
  renderCarousel();

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ── CLOSE ── */
export function closeModal() {
  document.getElementById('modal-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
  currentId  = null;
  currentIdx = 0;
}

/* ── CAROUSEL RENDER ── */
function getImages() {
  return store[currentId] || [];
}

function renderCarousel() {
  if (!currentId) return;
  const lang   = document.documentElement.getAttribute('data-lang') || 'fr';
  const imgs   = getImages();
  const wrap   = document.getElementById('carousel-wrap');
  const T      = TRANSLATIONS.modal;

  if (imgs.length === 0) {
    // Placeholder
    wrap.innerHTML = `
      <div class="carousel-placeholder" id="modal-img-ph">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="3"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <span>${T.img_none[lang]}</span>
      </div>`;
    return;
  }

  // Clamp index
  if (currentIdx >= imgs.length) currentIdx = imgs.length - 1;
  if (currentIdx < 0)            currentIdx = 0;

  const showPrev = currentIdx > 0;
  const showNext = currentIdx < imgs.length - 1;
  const delLabel = T.delete_img[lang];

  wrap.innerHTML = `
    <div class="carousel">
      <!-- Slides -->
      <div class="carousel-track" id="carousel-track">
        ${imgs.map((src, i) => `
          <div class="carousel-slide ${i === currentIdx ? 'active' : ''}" data-index="${i}">
            <img src="${src}" alt="Image ${i + 1}" loading="lazy"/>
            <button class="carousel-del" data-index="${i}" title="${delLabel}" aria-label="${delLabel}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                <path d="M10 11v6M14 11v6"/>
                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
              </svg>
            </button>
          </div>`).join('')}
      </div>

      <!-- Prev button -->
      ${showPrev ? `
        <button class="carousel-nav carousel-prev" id="carousel-prev" aria-label="Image précédente">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>` : ''}

      <!-- Next button -->
      ${showNext ? `
        <button class="carousel-nav carousel-next" id="carousel-next" aria-label="Image suivante">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>` : ''}

      <!-- Dots -->
      ${imgs.length > 1 ? `
        <div class="carousel-dots">
          ${imgs.map((_, i) => `
            <button class="carousel-dot ${i === currentIdx ? 'active' : ''}"
                    data-index="${i}" aria-label="Image ${i + 1}"></button>`).join('')}
        </div>` : ''}

      <!-- Counter -->
      <div class="carousel-counter">${currentIdx + 1} / ${imgs.length}</div>
    </div>`;

  // Event listeners
  document.getElementById('carousel-prev')
    ?.addEventListener('click', e => { e.stopPropagation(); navigate(-1); });
  document.getElementById('carousel-next')
    ?.addEventListener('click', e => { e.stopPropagation(); navigate(1); });

  wrap.querySelectorAll('.carousel-dot').forEach(dot => {
    dot.addEventListener('click', e => {
      e.stopPropagation();
      currentIdx = parseInt(dot.dataset.index);
      renderCarousel();
    });
  });

  wrap.querySelectorAll('.carousel-del').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      deleteImage(parseInt(btn.dataset.index));
    });
  });

  // Upload zone — toujours visible si < MAX_IMAGES
  updateUploadZone();
}

function updateUploadZone() {
  const lang   = document.documentElement.getAttribute('data-lang') || 'fr';
  const imgs   = getImages();
  const zone   = document.getElementById('upload-zone');
  const T      = TRANSLATIONS.modal;
  if (!zone) return;

  if (imgs.length >= MAX_IMAGES) {
    zone.style.display = 'none';
  } else {
    zone.style.display = 'flex';
    const hint = zone.querySelector('#upload-hint-text');
    if (hint) hint.textContent = T.upload_hint[lang];
  }
}

/* ── NAVIGATE ── */
function navigate(dir) {
  const imgs = getImages();
  if (!imgs.length) return;
  currentIdx = Math.max(0, Math.min(imgs.length - 1, currentIdx + dir));
  renderCarousel();
}

/* ── DELETE IMAGE ── */
function deleteImage(idx) {
  if (!currentId) return;
  const imgs = store[currentId] || [];
  imgs.splice(idx, 1);

  if (imgs.length === 0) delete store[currentId];
  else store[currentId] = imgs;

  saveImages(store);

  // Adjust index
  if (currentIdx >= imgs.length) currentIdx = Math.max(0, imgs.length - 1);

  renderCarousel();
  if (onRenderCb) onRenderCb(store);
}

/* ── UPLOAD ── */
function handleUpload(e) {
  const file = e.target.files[0];
  if (!file || !currentId) return;

  const imgs = store[currentId] || [];
  if (imgs.length >= MAX_IMAGES) return;

  const reader = new FileReader();
  reader.onload = ev => {
    const dataUrl = ev.target.result;
    if (!store[currentId]) store[currentId] = [];
    store[currentId].push(dataUrl);
    saveImages(store);

    // Jump to the newly added image
    currentIdx = store[currentId].length - 1;
    renderCarousel();

    if (onRenderCb) onRenderCb(store);
    e.target.value = '';
  };
  reader.readAsDataURL(file);
}

/* ── HELPERS ── */
function buildLinks(p) {
  const parts = [];
  if (p.github) parts.push(`
    <a href="${p.github}" target="_blank" rel="noopener" class="modal-link modal-link-primary">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
      GitHub →
    </a>`);
  if (p.live) parts.push(`
    <a href="${p.live}" target="_blank" rel="noopener" class="modal-link">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      Live →
    </a>`);
  return parts.join('');
}

function setLabel(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) el.textContent = text;
}

/* ── PUBLIC API ── */
export function getProjectCover(id, store) {
  const imgs = store[id];
  return (imgs && imgs.length > 0) ? imgs[0] : null;
}

window.openModal  = openModal;
window.closeModal = closeModal;
