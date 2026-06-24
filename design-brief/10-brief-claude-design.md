# 10 — Brief prêt à coller pour claude design

> Copie-colle le bloc ci-dessous dans claude design (en lui donnant accès à tout le dossier
> `design-brief/` + `assets/`). C'est le point de départ. Les fichiers `01`→`09` sont les annexes.

---

## PROMPT

Tu es chargé de **refaire entièrement le design** de la landing page de **Raphaëlo Pizza**, une
pizzeria artisanale camerounaise (Yaoundé & Douala) qui prend ses commandes **sur WhatsApp**.
Le projet existe déjà (Next.js 16 + Tailwind v4 + next-intl + GSAP + Lenis + Three.js) ; je veux
une **refonte du design et des interactions**, nettement supérieure, **niveau awwwards**, plus
appétissante et mieux animée — tout en **gardant la stack, le contenu, le logo et les images**.

**Lis d'abord tout le dossier de briefing** (fichiers `00`→`09` dans `design-brief/`, et le dossier
`assets/`). Il contient le projet, la marque, les couleurs, la typo, le logo, les images, le
contenu bilingue complet, les directions artistiques, le motion design et les contraintes techniques.

### Contraintes non négociables

1. **Logo conservé tel quel** (`assets/logo.png`, avec le bonnet). Ne pas le redessiner — bien l'intégrer.
2. **Images** : réutiliser les **URLs de pizzas déjà fournies** (`04-logo-images.md`).
3. **Périmètre** : **une seule landing page**, mais **enrichie** (plus de sections, meilleur récit).
4. **Stack inchangée** : Next.js 16 (App Router), Tailwind v4, next-intl (FR/EN), GSAP, Lenis, Three.js.
5. **Contenu** : réutiliser textes, pizzas, points de vente, contacts de `05-contenu-pages.md`.
   Aucun texte en dur non traduit ; accents FR soignés (« Raphaëlo »).
6. **WhatsApp = conversion** : CTA omniprésent et désirable (`05`, `07`).
7. **Mobile-first, rapide, accessible** (`08`) : superbe ET léger sur 4G.
8. **Rouge de marque `#E63028`** présent partout.

### Direction artistique

Le client te laisse **proposer**. Dans `06-directions-design.md`, 3 pistes sont cadrées
(A brutalisme culinaire, B feu & matière, C premium éditorial). **Présente brièvement les 3,
recommande-en une** (par défaut B « feu & matière », le meilleur équilibre envie-de-manger ×
premium × awwwards), puis **pousse la direction retenue jusqu'au bout**.

### Objectifs (dans l'ordre)

1. Donner faim et donner envie de commander dès les 3 premières secondes.
2. Maximiser les clics « Commander sur WhatsApp ».
3. Asseoir le positionnement premium / artisanal (« la meilleure », sans compromis).
4. Marquer les esprits : finition et motion dignes d'awwwards.

### Livrables attendus

1. **Direction artistique** : 3 pistes décrites + 1 recommandée (couleurs, typo, ambiance, mood).
2. **Système de design** : palette finale, échelle typo, tokens, composants clés (boutons, cartes
   pizza, cartes points de vente, navbar, footer, bouton WhatsApp).
3. **Structure de la page enrichie** : sections, ordre, intention de chaque section, wireframe/
   layout (cf. `05` pour le contenu et les suggestions d'enrichissement).
4. **Plan de motion** : entrées au scroll, micro-interactions, moments forts (hero, process « le
   feu », menu, manifeste/footer), avec respect de `prefers-reduced-motion` (cf. `07`).
5. **Le code** : implémentation des composants en React/Next.js + Tailwind v4 + GSAP/Lenis/Three,
   fidèle à la stack et au modèle de données existants (cf. `08`).

### Méthode souhaitée

- Commence par **clarifier ta compréhension** et **proposer la direction** avant de coder massivement.
- Procède **section par section**, du plus impactant (hero) au footer.
- Vérifie en continu : appétit, conversion WhatsApp, performance mobile, accessibilité, bilingue.
- Vise un résultat qu'un **jury awwwards** jugerait abouti — voir le test final dans `09`.

Commence par : (1) résumer ta lecture du brief, (2) présenter les 3 directions avec ta reco,
(3) proposer la structure enrichie de la page. Ensuite seulement, attaque l'implémentation.

---

## Checklist de transmission (pour le client)

- [ ] Donner les 11 fichiers `.md` du dossier `design-brief/`.
- [ ] Donner le dossier `assets/` (logo + aperçus actuels).
- [ ] S'assurer que claude design a accès au repo `raphaelo-next` (stack + `constants.ts` + `messages/`).
- [ ] Trancher la direction artistique quand claude design présente A / B / C.
