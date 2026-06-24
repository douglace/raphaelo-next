# 01 — Le projet

## Qu'est-ce que Raphaëlo Pizza ?

**Raphaëlo Pizza** est une pizzeria artisanale **camerounaise**, présente à **Yaoundé** et
**Douala**, fondée en **2015**. Elle se positionne comme « **La Meilleure Pizza** » du Cameroun :
pâte préparée chaque jour, fermentation lente, cuisson haute température, ingrédients frais.

Le site est une **landing page vitrine** dont l'objectif unique est de **déclencher une commande
sur WhatsApp**. Il n'y a ni panier, ni paiement en ligne, ni compte client : tout passe par un
lien WhatsApp pré-rempli.

## Le marché et le contexte (important pour le design)

- **Pays** : Cameroun (Afrique centrale, francophone + anglophone).
- **Villes** : Yaoundé (capitale) et Douala (capitale économique).
- **Devise** : **FCFA** (Franc CFA). Les prix s'écrivent ex. « 4 500 — 8 000 ».
- **Canal de commande** : **WhatsApp** (et téléphone). C'est LE réflexe d'achat local — bien plus
  que les apps de livraison. WhatsApp doit donc être **omniprésent et désirable**, pas un détail.
- **Mobile-first absolu** : la majorité du trafic est sur smartphone, souvent sur réseau mobile.
  → Le design doit être **somptueux sur mobile** et **léger** (data, batterie). Voir `08`.
- **Bilingue** : Français (par défaut) et Anglais. Tout texte doit exister dans les deux langues.

## La cible

- Jeunes adultes et familles urbaines, 18–40 ans, à l'aise avec WhatsApp et Instagram.
- Gourmands qui choisissent avec **les yeux** : la photo de pizza doit donner faim immédiatement.
- Public sensible au **statut** (« la meilleure », artisanale, premium) et à la **proximité**
  (« il y a un point Raphaëlo près de chez moi »).

## Objectifs du redesign (par ordre de priorité)

1. **Donner faim et donner envie de commander** dès les 3 premières secondes.
2. **Maximiser les clics « Commander sur WhatsApp »** (CTA clair, présent, désirable).
3. **Asseoir le positionnement premium / artisanal** (« la meilleure », sans compromis).
4. **Marquer les esprits** : viser un niveau de finition et d'animation digne d'awwwards,
   pour se démarquer radicalement de la concurrence locale (sites plats et génériques).
5. **Rassurer et rapprocher** : montrer les points de vente, les avis, les horaires.

## Ce qui existe déjà

- Une **v1 statique** (HTML/CSS/JS + GSAP) — voir `assets/apercu-actuel-*.png`.
- Une **v2 en Next.js 16** (en cours), avec direction « brutalisme culinaire » sombre,
  Three.js, curseur custom, preloader, Lenis smooth-scroll, marquees, etc. → détails dans `08`.

Le redesign **part de ce contenu et de cette stack**, mais doit **réinventer la forme**.
Le contenu (textes, pizzas, points de vente) est fourni intégralement dans `05`.

## Indicateurs de succès (comment juger le résultat)

- « J'ai faim » en voyant le hero.
- Le bouton WhatsApp est trouvable en < 1 seconde, à tout moment du scroll.
- Le site « respire le premium » sans paraître froid ou inaccessible.
- Les animations servent le récit (le feu, la pâte, l'artisanat) — jamais gratuites.
- Parfait sur un smartphone de milieu de gamme sur réseau 4G.
