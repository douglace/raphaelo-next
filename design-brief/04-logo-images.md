# 04 — Logo & images

## Logo (CONSERVÉ TEL QUEL)

- Fichier : `assets/logo.png` (également dans le projet : `public/logo.png`).
- Dimensions : **917 × 490 px**, PNG **transparent** (RGBA).
- Description : wordmark **script rouge** « Raphaëlo » (rouge `#E63028`), avec un **bonnet de
  Père Noël** sur le « R » et le baseline « **La Meilleure Pizza** » + un swoosh/sourire rouge.

### Décision client : le logo est conservé à l'identique.

- **Ne pas redessiner le logo, ne pas retirer le bonnet.**
- claude design doit **bien l'intégrer** : marges de protection, lisibilité sur fond sombre ET
  clair, versions de taille (navbar, footer, preloader, favicon).
- Sur fond sombre, le rouge ressort bien ; prévoir éventuellement un léger halo/contour ou une
  zone de respiration pour garantir le contraste.
- Penser une **déclinaison monochrome** (blanc cassé `#F5F5F0`) pour les contextes où le rouge
  passe mal (ex. sur du rouge, sur photo chargée) — sans modifier le logo de marque, juste une
  variante d'usage.

## Banque d'images — pizzas (URLs DÉJÀ DANS LE PROJET)

> **Décision client : réutiliser ces liens.** Ce sont des photos Unsplash haute qualité déjà
> référencées dans `src/lib/constants.ts`. Chaque pizza a son image dédiée.

| Pizza | Type | Image |
|---|---|---|
| New York Cheese | CLASSIC | `https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80` |
| Azzura Cheese | CLASSIC | `https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80` |
| Hawaienne | CLASSIC | `https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=800&q=80` |
| Margherita | PREMIUM | `https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&q=80` |
| Regina | PREMIUM | `https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=800&q=80` |
| Belle Paysanne | PREMIUM | `https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&q=80` |
| Suisse | PREMIUM | `https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?w=800&q=80` |
| All American | SIGNATURE | `https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80` |
| Sicilia | SIGNATURE | `https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&q=80` |
| Mexicaine | SIGNATURE | `https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&q=80` |

> Astuce : ces URLs Unsplash acceptent des paramètres (`w=`, `q=`, `auto=format`, `fit=crop`).
> Pour un hero ou un gros plan, monter la largeur (`w=1600`) ; pour des vignettes, baisser.

## Traitement photo (direction artistique des images)

Le design actuel applique un **traitement « brutalisme culinaire »** aux photos :

```css
filter: contrast(1.1) brightness(0.85) saturate(0.9);
/* au hover : contrast(1.5) brightness(0.7) saturate(0.7) + léger décalage + scale */
```

→ Photos **sombres, contrastées, dramatiques**, gradient noir en pied de carte pour la lisibilité
du texte. Cela unifie des photos stock hétérogènes en une **direction cohérente**.

### Recommandations pour le redesign

- **Unifier** les 10 photos via un traitement commun (le mélange de styles Unsplash est le point
  faible actuel) : même grain, même température, même contraste → une « patine maison ».
- Si la direction retenue est **chaleureuse/claire** (`06`), basculer le traitement vers des tons
  **chauds et appétissants** (saturation maîtrisée, lumière dorée) plutôt que sombre.
- Prévoir un **placeholder élégant** (blur-up / dominante de couleur) pendant le chargement —
  crucial sur réseau mobile camerounais. Voir `08`.
- **Images d'ambiance** (four, pâte, braise, mains du pizzaïolo) : il n'y en a pas dans le projet.
  claude design peut en chercher d'autres sur Unsplash dans le même esprit pour les sections
  storytelling (about, manifeste), ou jouer le **typographique + texture** sans photo d'ambiance.

## Icônes & éléments graphiques

- **WhatsApp** : icône officielle, sur pastille verte `#25D366`. Élément récurrent et désirable.
- **Étoiles** : notation des points de vente (or `#C8A750`).
- **Marquees / bandeaux** : éléments typographiques défilants (mots-clés ADN) — voir `02`/`07`.
- Pas de banque d'icônes imposée : choisir un set cohérent (ex. Lucide) et discret.
