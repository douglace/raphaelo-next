# 07 — Interactions & motion design (niveau awwwards)

> Objectif : un site qui **se vit**, pas qui se scrolle. Chaque animation sert le récit
> (le feu, la pâte, l'artisanat, la gourmandise) — **jamais d'animation gratuite**.
> Stack motion déjà en place : **GSAP + ScrollTrigger**, **Lenis** (smooth scroll), **Three.js** (WebGL).

## Principes de motion

1. **Le mouvement raconte la marque.** Révélations qui évoquent la braise, la pâte qui lève, la
   chaleur. Pas juste des fade-in génériques.
2. **Easings signature.** Utiliser des courbes franches et premium (ex. `cubic-bezier(0.76, 0, 0.24, 1)`
   déjà employée). Cohérence des durées (révélations 1–1.4s, micro-interactions 0.2–0.4s).
3. **Orchestration au scroll.** Chaque section a une entrée chorégraphiée (clip-path, masque,
   stagger). Le scroll est le métronome du récit.
4. **Réactivité tactile.** Sur mobile : tap states nets, pas de hover fantôme, transitions courtes.
5. **Performance = priorité.** 60 fps cible. `transform`/`opacity` only, `will-change` ciblé,
   `IntersectionObserver` pour ne pas animer hors écran. Voir `08`.
6. **Respect de `prefers-reduced-motion`.** Tout doit dégrader proprement (déjà géré en CSS).

## Inventaire des interactions existantes (à conserver / sublimer)

| Élément | Comportement actuel | Piste d'amélioration |
|---|---|---|
| **Preloader** | Compteur 0→100, révélation par clip-path | En faire un vrai moment de marque (feu qui s'allume, pâte) |
| **Curseur custom** | Cercle blanc, blend `difference`, grossit + rouge au hover | Garder sur desktop ; états contextuels (drag menu, « commander ») |
| **Boutons magnétiques** | Attraction au curseur + remplissage or au hover | Affiner la physique, ajouter feedback sonore optionnel |
| **Marquees** | Bandeaux mots-clés en défilement infini | Vitesse réactive au scroll, plusieurs couches/directions |
| **Révélations texte** | `clip-path: inset()` au scroll | Stagger par mot/caractère, masques typographiques |
| **Révélations image** | Wipe horizontal (`img-reveal`) | Parallaxe, zoom doux, traitement chaleur |
| **Cartes pizza** | Hover : zoom + décalage + contraste accru | Tilt 3D léger, prix qui s'anime, CTA qui « chauffe » |
| **Cartes locations** | Tilt 3D (rotateX/Y) + ombre | Garder ; ajouter mini-carte ou pin animé |
| **WhatsApp flottant** | Orbite + texte tournant + pulsation, apparaît à 3s | Garder — c'est un signal de conversion fort |
| **Footer brutaliste** | Fixe en parallaxe, WebGL, manifeste révélé char par char, marquees | Pièce maîtresse — pousser le WebGL « cendres/braise » |
| **Hero WebGL** | Canvas Three.js en `mix-blend-mode: multiply` | Effet braise/fumée/particules de farine selon direction |

## Idées motion fortes pour le redesign (par section)

- **Hero** : titre en split-text qui se révèle par masque ; particules de braise/farine en WebGL
  réactives à la souris ; un gros plan de pizza qui « entre » au scroll.
- **Process « le feu »** (nouvelle section) : timeline horizontale pinnée (ScrollTrigger pin)
  fermentation → four → service, avec la température qui monte visuellement.
- **Menu** : scroll horizontal des cartes (déjà amorcé), avec **snap**, prix en FCFA animés,
  filtres CLASSIC/PREMIUM/SIGNATURE avec transition de tri fluide (FLIP).
- **Locations** : cartes en stagger, note ★ qui se remplit, hover tilt, accent sur EKIE (featured).
- **Manifeste / footer** : révélation caractère par caractère avec lueur rouge (déjà en place,
  à sublimer) — le grand final émotionnel.
- **Transition de langue FR/EN** : micro-animation élégante (pas un simple reload de texte).

## Micro-interactions à ne pas oublier

- États focus/hover/active de tous les CTA (surtout WhatsApp).
- Feedback au clic « Commander » (confirmation visuelle avant l'ouverture de WhatsApp).
- Apparition contextuelle du bouton WhatsApp / nav sticky selon la position de scroll.
- Skeleton / blur-up des images pendant le chargement (réseau mobile).

## Garde-fous motion

- **Pas d'animation qui retarde l'accès au CTA WhatsApp.** La conversion prime sur le spectacle.
- **Pas de scroll-jacking abusif.** Lenis lisse, mais l'utilisateur garde le contrôle.
- **Tester sur mobile milieu de gamme** : si ça rame, simplifier (désactiver WebGL lourd, etc.).
