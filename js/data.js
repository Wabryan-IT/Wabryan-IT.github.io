/**
 * data.js — Contenu du portfolio (FR + EN)
 * Modifier ce fichier pour mettre à jour les textes
 * et ajouter / retirer des projets.
 */

/* ─── TRADUCTIONS GÉNÉRALES ─── */
export const TRANSLATIONS = {
  nav: {
    experience: { fr: 'Expérience',   en: 'Experience' },
    projects:   { fr: 'Projets',      en: 'Projects' },
    skills:     { fr: 'Compétences',  en: 'Skills' },
    education:  { fr: 'Formation',    en: 'Education' },
    contact:    { fr: 'Contact',      en: 'Contact' },
    cta:        { fr: 'Me contacter →', en: 'Contact me →' },
  },
  hero: {
    eyebrow: { fr: 'Cybersecurity Student — Ecole-IT — Belgique', en: 'Cybersecurity Student — Ecole-IT — Belgium' },
    role:    { fr: 'Sécurité & Infrastructure IT', en: 'Security & IT Infrastructure' },
    chip1:   { fr: 'Disponible pour stage', en: 'Available for internship' },
    chip3:   { fr: "Test d'intrusion · Audit", en: 'Penetration testing · Audit' },
    bio: {
      fr: "Mon parcours m'a permis de découvrir et pratiquer différents aspects de la cybersécurité — sécurité des réseaux, gestion des identités, protection des systèmes. Je cherche une expérience professionnelle où je pourrai apprendre aux côtés de professionnels du domaine et contribuer concrètement à des projets liés à la sécurité informatique.",
      en: "My journey has allowed me to discover and practice various aspects of cybersecurity — network security, identity management, and system protection. I am looking for a professional experience where I can learn alongside domain experts and make a meaningful contribution to security projects.",
    },
    cta1:   { fr: "M'envoyer un message", en: 'Send me a message' },
    cta2:   { fr: 'Mon parcours',         en: 'My experience' },
    stat1:  { fr: 'Utilisateurs 2FA déployés', en: '2FA users deployed' },
    stat2:  { fr: 'Stages IT réalisés',        en: 'IT internships completed' },
    stat3:  { fr: 'Audit de conformité',       en: 'Compliance audit' },
    scroll: { fr: 'Défiler', en: 'Scroll' },
  },
  sections: {
    experience:       { fr: 'Expérience professionnelle', en: 'Professional Experience' },
    projects:         { fr: 'Projets',        en: 'Projects' },
    certifications:   { fr: 'Certifications', en: 'Certifications' },
    skills:           { fr: 'Compétences',    en: 'Skills' },
    education:        { fr: 'Formation',      en: 'Education' },
    recommendation:   { fr: 'Recommandation', en: 'Recommendation' },
    contact_heading:  { fr: 'Parlons de votre', en: "Let's talk about your" },
    contact_em:       { fr: 'sécurité.',        en: 'security.' },
    contact_sub:      { fr: "Je cherche un stage ou une alternance en cybersécurité. Basé en Belgique, ouvert à toute opportunité d'apprentissage et d'échange. N'hésitez pas à m'écrire.", en: "I am looking for an internship or apprenticeship in cybersecurity. Based in Belgium, open to any learning opportunity. Feel free to reach out." },
    footer_status:    { fr: 'Disponible pour un stage en cybersécurité', en: 'Available for a cybersecurity internship' },
    footer_country:   { fr: 'Belgique', en: 'Belgium' },
  },
  modal: {
    technologies: { fr: 'Technologies', en: 'Technologies' },
    image_label:  { fr: 'Image du projet', en: 'Project image' },
    upload_hint:  { fr: 'Cliquez pour ajouter une image', en: 'Click to add an image' },
    img_none:     { fr: 'Aucune image', en: 'No image yet' },
  },
};

/* ─── EXPÉRIENCES ─── */
export const EXPERIENCES = [
  {
    period_fr: 'Nov 2025 — Jan 2026 · 3 mois',
    period_en: 'Nov 2025 — Jan 2026 · 3 months',
    company: 'Alteo Group SARL',
    location_fr: 'Belgique · Sur site',
    location_en: 'Belgium · On-site',
    role_fr: 'Stagiaire Support IT & Sécurité',
    role_en: 'IT Security Intern',
    badge_fr: 'Cybersécurité',
    badge_en: 'Cybersecurity',
    badge_class: 'badge-blue',
    intro_fr: "Stage au sein de l'équipe IT & Sécurité d'ALTEO Group, axé sur la sécurité opérationnelle et la gestion du parc informatique.",
    intro_en: 'Internship within the IT & Security team at ALTEO Group, focused on operational security and IT asset management.',
    groups: [
      {
        label_fr: 'Sécurité & Conformité',
        label_en: 'Security & Compliance',
        items: [
          { fr: 'Participation aux travaux de conformité réglementaire dans le cadre NIS2', en: 'Contributed to regulatory compliance work (NIS2 framework)' },
          { fr: 'Contribution aux recommandations de durcissement des systèmes',           en: 'Assisted in system hardening recommendations' },
          { fr: 'Évaluation de la sécurité WiFi et validation DMARC/DKIM/SPF',             en: 'WiFi security assessment and DMARC/DKIM/SPF validation' },
        ],
      },
      {
        label_fr: 'Gestion des identités & Endpoints',
        label_en: 'Identity & Endpoint Management',
        items: [
          { fr: 'Administration Microsoft Active Directory et Entra ID — audit et nettoyage', en: 'Participated in Microsoft environment administration (Active Directory / Entra ID)' },
          { fr: "Déploiement de l'authentification multifacteur sur 150+ utilisateurs",       en: '2FA deployment across 150+ users' },
          { fr: 'Migration Windows 10 vers Windows 11 et sécurisation des postes',            en: 'Contributed to workstation update and security projects' },
        ],
      },
      {
        label_fr: 'Gestion IT',
        label_en: 'IT Management',
        items: [
          { fr: 'Analyse SharePoint via Microsoft Purview et eDiscovery',                                  en: 'SharePoint data analysis (Microsoft Purview / eDiscovery)' },
          { fr: 'Inventaire complet du parc informatique sous Odoo avec traçabilité par code-barres', en: 'Full IT asset inventory management (Odoo, barcode tracking)' },
        ],
      },
    ],
    tags: ['NIS2','Microsoft Entra ID','Active Directory','MFA / 2FA','DMARC · DKIM · SPF','Microsoft Purview','Windows 11','Hardening','Odoo'],
  },
  {
    period_fr: 'Fév 2022 — Avr 2022 · 3 mois',
    period_en: 'Feb 2022 — Apr 2022 · 3 months',
    company: 'Bloosat CM',
    location_fr: 'Cameroun · Hybride',
    location_en: 'Cameroon · Hybrid',
    role_fr: 'Stagiaire Assistant IT',
    role_en: 'IT Assistant Intern',
    badge_fr: 'Support & Réseau',
    badge_en: 'Support & Network',
    badge_class: 'badge-amber',
    intro_fr: null,
    intro_en: null,
    groups: [
      {
        label_fr: null,
        label_en: null,
        items: [
          { fr: 'Support quotidien des utilisateurs finaux et compréhension des besoins métier',    en: 'Daily end-user support and business needs understanding' },
          { fr: 'Installation, configuration et maintenance matérielle et logicielle des postes',   en: 'Endpoint installation, configuration and hardware/software maintenance' },
          { fr: "Assistance au technicien réseau et rédaction de rapports de maintenance",          en: 'Support to network technician and maintenance reporting' },
        ],
      },
    ],
    tags: ['Support N1','Maintenance postes','Administration réseau','Documentation'],
  },
];

/* ─── PROJETS ─── */
export const PROJECTS = [
  {
    id: 'secureshop',
    category_fr: 'Projet académique',
    category_en: 'Academic project',
    badge_fr: 'Cybersécurité',
    badge_en: 'Cybersecurity',
    title_fr: 'SecureShop — Audit de sécurité web',
    title_en: 'SecureShop — Web Security Audit',
    org_fr: 'Associé à Ecole-IT',
    org_en: 'Associated with Ecole-IT',
    excerpt_fr: "Audit de sécurité complet sur une application e-commerce fictive, en adoptant une posture à la fois offensive et défensive.",
    excerpt_en: "Full security audit on a fictional e-commerce application, adopting both offensive and defensive posture.",
    body_fr: `<p>Dans le cadre de ma formation en cybersécurité, j'ai conduit un audit de sécurité complet sur une application web e-commerce fictive, en adoptant à la fois une posture offensive et défensive.</p><p>Ce projet m'a permis de mettre en pratique des méthodologies d'analyse de vulnérabilités, de rédiger une documentation structurée, et de proposer des mesures correctives concrètes. Les détails techniques sont disponibles sur mon profil GitHub.</p>`,
    body_en: `<p>As part of my cybersecurity training, I conducted a full security audit on a fictional e-commerce web application, adopting both an offensive and defensive stance.</p><p>This project allowed me to apply vulnerability analysis methodologies, write structured documentation, and propose concrete corrective measures. Technical details are available on my GitHub profile.</p>`,
    tags: ["Test d'intrusion", "Analyse de vulnérabilités", "Posture offensive & défensive", "Documentation technique", "Rapport d'audit"],
    github: 'https://github.com/Wabryan-IT',
    live: null,
    image: null, // sera chargé depuis localStorage si uploadé
  },
];

/* ─── COMPÉTENCES ─── */
export const SKILLS = [
  {
    icon_class: 'si-blue',
    icon: 'lock',
    name_fr: 'Cybersécurité & Conformité', name_en: 'Cybersecurity & Compliance',
    level_fr: 'Cœur de métier',            level_en: 'Core expertise',
    items: [
      { fr: "Audit NIS2 — analyse des écarts",       en: "NIS2 audit — gap analysis" },
      { fr: "Test d'intrusion — posture off./déf.",  en: "Penetration testing — off./def." },
      { fr: "Analyse de vulnérabilités",             en: "Vulnerability analysis" },
      { fr: "Hardening & DMARC/DKIM/SPF",           en: "Hardening & DMARC/DKIM/SPF" },
    ],
  },
  {
    icon_class: 'si-navy',
    icon: 'user',
    name_fr: 'Gestion des identités', name_en: 'Identity Management',
    level_fr: 'Avancé',               level_en: 'Advanced',
    items: [
      { fr: "Microsoft Entra ID / Azure AD",              en: "Microsoft Entra ID / Azure AD" },
      { fr: "Active Directory — audit & nettoyage",       en: "Active Directory — audit & cleanup" },
      { fr: "Déploiement MFA / 2FA (150+ users)",         en: "MFA / 2FA deployment (150+ users)" },
    ],
  },
  {
    icon_class: 'si-green',
    icon: 'monitor',
    name_fr: 'Microsoft 365 & Cloud', name_en: 'Microsoft 365 & Cloud',
    level_fr: 'Avancé',               level_en: 'Advanced',
    items: [
      { fr: "Microsoft Purview & eDiscovery", en: "Microsoft Purview & eDiscovery" },
      { fr: "SharePoint administration",      en: "SharePoint administration" },
      { fr: "Suite Microsoft Office",         en: "Microsoft Office Suite" },
      { fr: "Windows 10 & 11 · Odoo",        en: "Windows 10 & 11 · Odoo" },
    ],
  },
  {
    icon_class: 'si-amber',
    icon: 'server',
    name_fr: 'Systèmes & Virtualisation', name_en: 'Systems & Virtualisation',
    level_fr: 'Intermédiaire',             level_en: 'Intermediate',
    items: [
      { fr: "VMware · Docker",             en: "VMware · Docker" },
      { fr: "Linux & Windows Server",      en: "Linux & Windows Server" },
      { fr: "Notions DevOps",              en: "DevOps basics" },
    ],
  },
  {
    icon_class: 'si-blue',
    icon: 'globe',
    name_fr: 'Réseaux',          name_en: 'Networking',
    level_fr: 'En développement', level_en: 'In progress',
    items: [
      { fr: "Cisco Packet Tracer",                   en: "Cisco Packet Tracer" },
      { fr: "Modélisation architectures réseau",     en: "Network architecture design" },
      { fr: "Évaluation sécurité WiFi",              en: "WiFi security assessment" },
    ],
  },
  {
    icon_class: 'si-purple',
    icon: 'code',
    name_fr: 'Développement & Outils', name_en: 'Development & Tools',
    level_fr: 'Apprentissage actif',   level_en: 'Actively learning',
    items: [
      { fr: "Git & GitHub",                  en: "Git & GitHub" },
      { fr: "Développement Web & Mobile",    en: "Web & Mobile development" },
      { fr: "VS Code · Bases de données",    en: "VS Code · Database basics" },
    ],
  },
];

/* ─── FORMATION ─── */
export const EDUCATION = [
  {
    type: "Master's degree",
    school: 'Ecole-IT',
    field_fr: 'Cybersecurity — Belgique',    field_en: 'Cybersecurity — Belgium',
    years: '2025 — 2027',
    status_fr: 'En cours', status_en: 'In progress',
  },
  {
    type: 'Bachelor — Computer Science',
    school: 'Ecole-IT',
    field_fr: 'Informatique — Belgique',     field_en: 'Computer Science — Belgium',
    years: '2024 — 2025',
    status_fr: null, status_en: null,
  },
  {
    type: 'Cycle Bachelor',
    school: 'Keyce Informatique',
    field_fr: 'Informatique & IA — Cameroun', field_en: 'Computer Science & AI — Cameroon',
    years: '2022 — 2024',
    status_fr: 'Diplômé', status_en: 'Graduated',
  },
];
