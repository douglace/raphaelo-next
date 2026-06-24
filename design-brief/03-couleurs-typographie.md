# 03 — Couleurs & typographie

> Ces tokens sont ceux du design **actuel**. Ils servent de **point de départ**, pas de prison.
> claude design peut faire évoluer la palette selon la direction retenue (`06`), mais doit
> conserver le **rouge Raphaëlo** comme couleur de marque (il vient du logo).

## Palette actuelle (design tokens)

Définis dans `src/app/globals.css` via `@theme` (Tailwind v4).

| Token | Hex | Usage |
|---|---|---|
| `--color-dark` | `#0D0D0D` | Fond principal (noir profond) |
| `--color-dark-elevated` | `#161616` | Surfaces surélevées (cartes) |
| `--color-dark-surface` | `#1E1E1E` | Surfaces secondaires |
| `--color-accent-red` | `#E63028` | **Couleur de marque** — CTA, accents, prix |
| `--color-accent-gold` | `#C8A750` | Or — étoiles, labels, highlights premium |
| `--color-cream` | `#F8F4E8` | Crème (fonds clairs alternatifs) |
| `--color-text-primary` | `#F5F5F0` | Texte principal (blanc cassé) |
| `--color-text-secondary` | `#B0B0B0` | Texte secondaire (gris) |
| WhatsApp | `#25D366` | Vert WhatsApp — réservé au bouton de commande |

### Notes palette

- Le **rouge `#E63028`** est l'ADN visuel (issu du logo). À **conserver** comme couleur signature.
- L'**or `#C8A750`** signale le premium (notes, labels « SIGNATURE »). Précieux, à utiliser avec parcimonie.
- Le **vert WhatsApp** est fonctionnel : il ne sert qu'à la commande. Ne pas le diluer dans la déco.
- Si une direction plus **chaleureuse/claire** est explorée (`06`), prévoir des tons **terre cuite,
  croûte dorée, braise, crème** qui restent cohérents avec le rouge.

## Typographie actuelle

| Rôle | Police | Usage |
|---|---|---|
| **Display** | `Bebas Neue` | Titres, hero, marquees — condensée, impactante, brutaliste |
| **Body** | `Source Sans 3` | Texte courant, labels, prix |

Versions antérieures utilisaient `Playfair Display` (display) + `Space Grotesk` (body).

### Échelle typographique (fluide, `clamp`)

| Token | Valeur | Usage |
|---|---|---|
| `--font-size-hero` | `clamp(3.5rem, 10vw, 9rem)` | Titre hero |
| `--font-size-section` | `clamp(2.5rem, 6vw, 5rem)` | Titres de section |
| `--font-size-marquee` | `clamp(2rem, 4vw, 3.5rem)` | Bandeaux défilants |

### Pistes typographiques pour le redesign

La typo doit porter le caractère de la marque. Selon la direction (`06`), explorer :

- **Brutaliste / radical** : une display condensée et brute (Bebas Neue, Anton, Druk, Archivo
  Expanded) + une grotesque neutre lisible.
- **Premium éditorial** : une serif de caractère (Playfair, GT Sectra, Canela) en contraste
  avec une sans nette (Söhne, Neue Haas, Inter).
- **Chaleureux / gourmand** : une display à fort caractère mais plus organique, voire un trait
  manuscrit pour rappeler l'artisanat, contrebalancé par une sans très propre.

**Règles** : 2 familles maximum (3 si un accent manuscrit). Contraste fort entre titre et corps.
Toujours vérifier le rendu des **caractères accentués FR** (é, è, à, ë du mot « Raphaëlo »).

## Détails de finition déjà en place (à conserver/améliorer)

- **Grain / bruit** : overlay de grain à ~3 % d'opacité sur tout le site (texture analogique).
- **Sélection de texte** : fond rouge `#E63028`.
- **Focus visible** : contour or `#C8A750`, offset 3px (accessibilité — à garder).
- **Text-stroke** : titres en contour (outline) transparent pour les marquees.
