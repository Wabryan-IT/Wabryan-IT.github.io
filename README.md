# Portfolio — Bryan Wambo

Portfolio personnel en HTML/CSS/JS pur, structuré comme un vrai projet de développement.

## Structure du projet

```
portfolio-bryan-wambo/
│
├── index.html              ← Page principale (structure HTML uniquement)
│
├── css/
│   ├── variables.css       ← Design tokens (couleurs oklch, typographie, espacements)
│   ├── base.css            ← Reset, styles globaux, animations, boutons, badges
│   ├── layout.css          ← Cursor, scroll bar, navbar, boutons de contrôle
│   ├── hero.css            ← Section hero (nom, bio, stats, scroll hint)
│   ├── sections.css        ← Experience, Skills, Education, Certif, Contact, Footer
│   ├── projects.css        ← Cards projet + modale détail + upload image
│   └── responsive.css      ← Media queries (mobile < 900px, < 580px)
│
├── js/
│   ├── data.js             ← ✏️  TOUT LE CONTENU (textes FR/EN, projets, compétences...)
│   ├── main.js             ← Point d'entrée — initialise tous les modules
│   ├── cursor.js           ← Curseur custom + barre de progression scroll
│   ├── theme.js            ← Toggle dark / light mode
│   ├── lang.js             ← Switcher FR / EN
│   ├── scramble.js         ← Animation de texte scramble (hero)
│   ├── render.js           ← Construit le DOM des sections dynamiques
│   └── modal.js            ← Modale projet (ouvrir, fermer, upload image)
│
└── assets/
    └── images/             ← Dossier pour vos images (screenshots projets, etc.)
```

## Modifier le contenu

Tout le contenu est centralisé dans **`js/data.js`**.  
Pas besoin de toucher au HTML ou au CSS pour :

- Changer vos textes (FR et EN)
- Ajouter / modifier / supprimer un projet
- Mettre à jour vos compétences
- Modifier vos expériences
- Ajouter des images de projets (via `image: 'assets/images/mon-image.jpg'`)

## Ajouter un projet

Dans `js/data.js`, ajoutez un objet dans le tableau `PROJECTS` :

```js
{
  id: 'mon-projet',                  // identifiant unique
  category_fr: 'Projet personnel',
  category_en: 'Personal project',
  badge_fr: 'Cybersécurité',
  badge_en: 'Cybersecurity',
  title_fr: 'Nom du projet',
  title_en: 'Project name',
  org_fr: 'Associé à ...',
  org_en: 'Associated with ...',
  excerpt_fr: 'Courte description (affichée sur la carte).',
  excerpt_en: 'Short description (shown on the card).',
  body_fr: '<p>Description longue dans la modale.</p>',
  body_en: '<p>Long description in the modal.</p>',
  tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  github: 'https://github.com/Wabryan-IT/mon-repo',
  live: null,                        // ou une URL si démo disponible
  image: 'assets/images/mon-projet.jpg',  // ou null
}
```

## Mise en ligne

### Option 1 — GitHub Pages (recommandé)
1. Créez un repo `Wabryan-IT.github.io` sur GitHub
2. Uploadez tous les fichiers
3. Settings → Pages → Deploy from branch → main
4. URL : `https://wabryan-it.github.io`

### Option 2 — Netlify Drop
1. Zippez le dossier
2. Déposez le zip sur `netlify.com/drop`
3. En ligne en 30 secondes

### Option 3 — Vercel
1. `vercel.com` → Add New → Upload
2. Déposez le dossier

## Développement local

Ouvrez simplement `index.html` dans votre navigateur.  
> Les modules ES (`import/export`) nécessitent un serveur local pour fonctionner correctement.  
> Utilisez l'extension **Live Server** sur VS Code, ou :
> ```bash
> npx serve .
> ```

## Fonctionnalités

- Mode sombre / clair (bouton flottant, mémorisé)
- Switcher FR / EN (bouton flottant, mémorisé)
- Curseur custom avec anneau magnétique
- Effet scramble sur le nom
- Projets : carte avec image + modale détaillée
- Upload d'image par projet (sauvegardé localement)
- Animations CSS scroll-driven (entrée au scroll)
- Boutons magnétiques
- Responsive mobile
