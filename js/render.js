/**
 * render.js — Construit le DOM des sections dynamiques
 * (Experience, Projects, Skills, Education)
 * à partir des données de data.js
 */

import { EXPERIENCES, PROJECTS, SKILLS, EDUCATION } from './data.js';
import { currentLang } from './lang.js';

/* ── SVG ICONS ── */
const ICONS = {
  lock:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  user:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  monitor: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  server:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  globe:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  code:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  pin:     `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  github:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
};

function getLang() {
  return document.documentElement.getAttribute('data-lang') || 'fr';
}

/* ── EXPERIENCE ── */
export function renderExperience() {
  const container = document.getElementById('timeline');
  if (!container) return;
  const lang = getLang();

  container.innerHTML = EXPERIENCES.map(exp => {
    const groupsHTML = exp.groups.map(g => `
      <div>
        ${g[`label_${lang}`] ? `<div class="tc-group-label">${g[`label_${lang}`]}</div>` : ''}
        <ul class="tc-list">
          ${g.items.map(item => `
            <li class="tc-list-item">
              <span class="tc-dash">—</span>
              <span>${item[lang]}</span>
            </li>`).join('')}
        </ul>
      </div>`).join('');

    const introHTML = exp[`intro_${lang}`]
      ? `<p class="tc-intro">${exp[`intro_${lang}`]}</p>`
      : '';

    const tagsHTML = exp.tags.map(t => `<span class="tag">${t}</span>`).join('');

    return `
      <div class="timeline-card">
        <div class="tc-meta">
          <div class="tc-period">${exp[`period_${lang}`]}</div>
          <div class="tc-company">${exp.company}</div>
          <div class="tc-location">${ICONS.pin} ${exp[`location_${lang}`]}</div>
        </div>
        <div class="tc-body">
          <div class="tc-header">
            <span class="tc-role">${exp[`role_${lang}`]}</span>
            <span class="badge ${exp.badge_class}">${exp[`badge_${lang}`]}</span>
          </div>
          ${introHTML}
          <div class="tc-groups">${groupsHTML}</div>
          <div class="tag-list">${tagsHTML}</div>
        </div>
      </div>`;
  }).join('');
}

/* ── PROJECTS ── */
export function renderProjects(store = {}) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  const lang = getLang();
  const hint = lang === 'fr' ? 'Voir le détail →' : 'View details →';

  grid.innerHTML = PROJECTS.map(p => {
    const storedImgs = store[p.id];
    const coverSrc = (Array.isArray(storedImgs) && storedImgs.length > 0) ? storedImgs[0] : (p.images && p.images[0]) || null;
    const imgCount = (store[p.id] || []).length;

    const thumbHTML = coverSrc
      ? `<img src="${coverSrc}" alt="${p[`title_${lang}`]}" loading="lazy"/>`
      : `<div class="thumb-placeholder">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
           <span>${lang === 'fr' ? 'Cliquez pour voir le projet' : 'Click to see project'}</span>
         </div>`;

    const imgCountBadge = imgCount > 1
      ? `<div class="card-img-count">${imgCount}</div>`
      : '';

    const tagsHTML = p.tags.map(t => `<span class="card-tag">${t}</span>`).join('');

    return `
      <div class="project-card"
           data-project-id="${p.id}"
           role="button" tabindex="0"
           aria-label="${p[`title_${lang}`]}">
        <div class="card-thumb">
          ${thumbHTML}
          ${imgCountBadge}
          <div class="card-overlay"></div>
          <div class="card-hint">${hint}</div>
        </div>
        <div class="card-body">
          <div class="card-category">${p[`category_${lang}`]}</div>
          <div class="card-title">${p[`title_${lang}`]}</div>
          <div class="card-excerpt">${p[`excerpt_${lang}`]}</div>
          <div class="card-tags">${tagsHTML}</div>
        </div>
      </div>`;
  }).join('');
}

/* ── SKILLS ── */
export function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  const lang = getLang();

  grid.innerHTML = SKILLS.map(s => {
    const itemsHTML = s.items.map(item =>
      `<div class="skill-item">${item[lang]}</div>`
    ).join('');

    return `
      <div class="skill-card">
        <div class="skill-head">
          <div class="skill-icon ${s.icon_class}">${ICONS[s.icon] || ''}</div>
          <div>
            <div class="skill-name">${s[`name_${lang}`]}</div>
            <div class="skill-level">${s[`level_${lang}`]}</div>
          </div>
        </div>
        <div class="skill-items">${itemsHTML}</div>
      </div>`;
  }).join('');
}

/* ── EDUCATION ── */
export function renderEducation() {
  const grid = document.getElementById('edu-grid');
  if (!grid) return;
  const lang = getLang();

  grid.innerHTML = EDUCATION.map(e => {
    const statusHTML = e[`status_${lang}`]
      ? ` · ${e[`status_${lang}`]}`
      : '';

    return `
      <div class="edu-card">
        <div class="edu-type">${e.type}</div>
        <div class="edu-school">${e.school}</div>
        <div class="edu-field">${e[`field_${lang}`]}</div>
        <div class="edu-year">
          <span class="edu-dot"></span>
          ${e.years}${statusHTML}
        </div>
      </div>`;
  }).join('');
}
