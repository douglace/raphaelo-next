# 08 — Spécifications techniques & contraintes

## Stack du projet (à respecter)

| Brique | Techno | Version |
|---|---|---|
| Framework | **Next.js** (App Router) | 16.2.9 |
| Langage | **TypeScript** | 5.x |
| UI | **React** | 19.2.4 |
| Styles | **Tailwind CSS v4** (`@theme` dans `globals.css`) | 4.x |
| i18n | **next-intl** (routing par `[locale]`) | 4.13 |
| Animation | **GSAP** + `@gsap/react` | 3.15 |
| Smooth scroll | **Lenis** | 1.3 |
| WebGL/3D | **three** | 0.184 |
| Utils | `clsx`, `tailwind-merge` | — |

Arborescence (extrait) :

```
src/
├── app/[locale]/         layout.tsx, page.tsx, globals.css
├── components/
│   ├── sections/         Hero, Marquee, About, Menu, FeatureBand, Locations, FinalCta
│   ├── layout/           Navbar, BrutalFooter, WhatsAppOrbit
│   ├── effects/          Preloader, CustomCursor, MagneticButtons, HeroWebGL, FooterWebGL
│   └── ui/               LanguageSwitcher
├── hooks/                useLandingAnimations.ts
├── lib/                  constants.ts (données), animations.ts, cn.ts
└── i18n/                 routing.ts, request.ts, navigation.ts
messages/                 fr.json, en.json
public/                   logo.png
```

> claude design peut **réorganiser/réécrire** ces composants, mais doit **conserver la stack**
> (Next.js 16 + Tailwind v4 + next-intl + GSAP/Lenis/Three) et le **modèle de données**
> (`constants.ts` + fichiers `messages`).

## Internationalisation (FR/EN)

- Routing par locale via **next-intl** : tout texte vient de `messages/{fr,en}.json`.
- **Aucun texte en dur** dans les composants : ajouter toute nouvelle copy dans les deux fichiers.
- Soigner les **caractères accentués** (« Raphaëlo », é/è/à/ë) dans toutes les polices choisies.

## Données

- Pizzas, points de vente, contacts, mots-clés : **`src/lib/constants.ts`** (voir `05`).
- Helper `waOrder(pizzaName)` génère le lien WhatsApp pré-rempli par pizza — à réutiliser.

## Accessibilité (exigences)

- **`prefers-reduced-motion`** : déjà géré, à maintenir (désactive marquees, curseur, reveals…).
- **Focus visible** : contour or `#C8A750` (déjà en place). Tous les interactifs focusables.
- **Lien d'évitement** « Aller au contenu principal » (clé `nav.skip`) — à conserver.
- **Contrastes** AA minimum sur le texte (attention au texte sur photo → gradient de lisibilité).
- **Cibles tactiles** ≥ 44px sur mobile. Labels ARIA pour les boutons icônes (WhatsApp, langue, menu).
- Le **curseur custom** ne doit jamais bloquer l'usage (désactivé tactile / reduced-motion).

## Performance (critique — contexte mobile Cameroun)

- **Cible** : LCP rapide, 60 fps, JS raisonnable. Beaucoup d'utilisateurs en **4G / data limitée**.
- **Images** : utiliser `next/image`, formats modernes (AVIF/WebP), `sizes` correct, lazy-loading,
  **placeholder blur/dominante**. Les URLs Unsplash acceptent `w=`/`q=`/`auto=format` (voir `04`).
- **WebGL** : magnifique mais coûteux → charger en différé, désactiver sur appareils faibles /
  `prefers-reduced-motion`, plafonner le `devicePixelRatio`.
- **Polices** : `next/font`, `display: swap`, sous-ensembles latin (+ accents FR).
- **Animations** : `transform`/`opacity` uniquement, `IntersectionObserver`, pas d'anim hors-écran.
- Éviter les bibliothèques lourdes redondantes ; profiter du tree-shaking.

## SEO & partage

- Métadonnées FR/EN déjà définies (voir `05`). Ajouter **Open Graph / Twitter Card** (image de
  partage appétissante), **JSON-LD `Restaurant`** (adresses, horaires, note), `hreflang` FR/EN.
- Le logo sert de base au **favicon** et à l'image de partage.

## Détail utile

- Le projet maintient un **`lesson.md`** à la racine (journal de bugs/gotchas). À consulter avant
  de débugger, et à alimenter après tout fix non trivial.
