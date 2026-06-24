# 05 — Contenu & structure des pages

> Contenu **complet et bilingue** (FR/EN). Source de vérité : `messages/fr.json`,
> `messages/en.json` et `src/lib/constants.ts`. **Tout est réutilisable tel quel.**
> Le périmètre est **une seule landing page enrichie**.

## Structure actuelle (ordre des sections)

```
1. Hero
2. Marquee (bandeau défilant)
3. About (notre histoire + chiffres)
4. Menu (les pizzas)
5. FeatureBand (bande de chiffres clés)
6. Locations (points de vente)
7. FinalCta (appel à commander)
8. Footer (manifeste + contacts)
```

## Suggestions d'enrichissement (périmètre = 1 page, mais plus riche)

claude design peut **ajouter des sections de storytelling** pour densifier le récit, par ex. :

- **« Le feu » / le procédé** : fermentation 48h → four haute température → service. Une section
  process en 3-4 temps, très visuelle, qui justifie le premium.
- **Filtre / catégories de menu** : CLASSIC · PREMIUM · SIGNATURE (les types existent déjà).
- **Avis clients** : une preuve sociale plus incarnée (citations, notes par point de vente).
- **Section « Tailles & prix »** : expliquer la fourchette de prix (S→XL) en FCFA.
- **Bandeau Instagram / communauté** (les comptes existent — voir contacts).

> Garder l'ensemble **cohérent et fluide** : une page longue, rythmée, pas un patchwork.

---

## CONTENU DÉTAILLÉ (à réutiliser)

### Métadonnées (SEO)

- **FR titre** : « Raphaëlo Pizza — La Meilleure Pizza »
- **FR desc** : « Raphaëlo Pizza - La Meilleure Pizza au Cameroun. Commandez directement sur WhatsApp. Yaoundé & Douala. »
- **EN titre** : « Raphaëlo Pizza — The Best Pizza »
- **EN desc** : « Raphaëlo Pizza - The Best Pizza in Cameroon. Order directly on WhatsApp. Yaoundé & Douala. »

### Navigation

| Clé | FR | EN |
|---|---|---|
| about | À propos | About |
| menu | Menu | Menu |
| locations | Nos Points | Locations |
| order | Commander | Order |

### Hero

- **Sur-titre** — FR : « L'INSTINCT DU FEU » · EN : « FIRE INSTINCT »
- **Titre** (du design actuel, façon « CRAVING / PIZZA ? ») — adaptable.
- **Description** — FR : « Pas de compromis. Pas de modération. Juste la brûlure du four et l'obsession du goût. »
  EN : « No compromise. No moderation. Just the burn of the oven and the obsession of taste. »
- **CTA** — FR : « Commander » · EN : « Order » → WhatsApp.

### Marquee (bandeau défilant)

Mots : `Pizza • Yaoundé • Douala • Depuis 2015 • La Meilleure •` (en boucle).

### About — Notre histoire

- **Label** — FR : « Notre Histoire » · EN : « Our Story »
- **Titre** — FR : « L'art de la pizza, fait maison » · EN : « The art of pizza, homemade »
- **Description** — FR : « Depuis 2015, Raphaëlo Pizza s'engage à offrir la meilleure pizza au
  Cameroun. Des ingrédients frais, une pâte préparée chaque jour, et un savoir-faire qui a
  conquis des milliers de gourmands à travers le pays. »
  EN : « Since 2015, Raphaëlo Pizza is committed to offering the best pizza in Cameroon. Fresh
  ingredients, dough prepared daily, and expertise that has won over thousands of food lovers
  across the country. »
- **Chiffres** : `5+` Points de vente · `900+` Avis clients · `16+ K+` Fans

### Menu — Nos pizzas

- **Label** — FR : « 02 // LA SÉLECTION » · EN : « 02 // THE SELECTION »
- **Titre** — FR : « NOS PIZZAS » · EN : « OUR PIZZAS »
- **Sous-titre** — FR : « Fermentation 48h • Cuisson Haute Température • Prix en FCFA »
  EN : « 48h Fermentation • High Temperature • Prices in FCFA »

**Les 10 pizzas** (nom · catégorie · prix FCFA · ingrédients FR / EN). Images → voir `04`.

| # | Nom | Type | Prix (FCFA) | Ingrédients FR | Ingredients EN |
|---|---|---|---|---|---|
| 1 | New York Cheese | CLASSIC | 2 500 — 6 500 | Sauce Tomate, Herbes, Fromage | Tomato Sauce, Herbs, Mozzarella |
| 2 | Azzura Cheese | CLASSIC | 2 500 — 6 500 | Sauce Tomate, Saucisson, Fromage | Sausage, Tomato Sauce, Cheese |
| 3 | Hawaienne | CLASSIC | 2 500 — 6 500 | Jambon, Ananas, Sauce Tomate, Fromage | Ham, Pineapple, Tomato Sauce, Cheese |
| 4 | Margherita | PREMIUM | 4 000 — 8 000 | Sauce Tomate, Olives Noirs, Fromage | Black Olives, Tomato Sauce, Cheese |
| 5 | Regina | PREMIUM | 4 500 — 8 000 | Jambon, Champignon, Sauce Tomate, Fromage | Ham, Mushroom, Tomato Sauce, Cheese |
| 6 | Belle Paysanne | PREMIUM | 4 500 — 9 000 | Lardon, Jambon, Champignon, Fromage | Bacon, Ham, Mushroom, Cheese |
| 7 | Suisse | PREMIUM | 4 500 — 8 000 | Saucisson, Champignon, Crème Fraîche, Fromage | Sausage, Mushroom, Cream, Cheese |
| 8 | All American | SIGNATURE | 6 000 — 10 500 | Poulet, Viande Hachée, Jambon, Crème, Fromage | Chicken, Minced Meat, Ham, Cream, Cheese |
| 9 | Sicilia | SIGNATURE | 5 000 — 8 500 | Sardines, Maïs Doux, Crème Fraîche, Fromage | Sardines, Sweet Corn, Cream, Cheese |
| 10 | Mexicaine | SIGNATURE | 6 000 — 10 500 | Viande Hachée, Maïs Doux, Crème Fraîche, Fromage | Minced Meat, Sweet Corn, Cream, Cheese |

> Bouton par pizza → WhatsApp pré-rempli : « Bonjour, je voudrais commander une pizza {nom} ».

### FeatureBand — chiffres clés

- `Points de Vente` / `Locations` · `Avis Clients` / `Reviews` · `Jours Ouvert` / `Days Open`

### Locations — Points de vente

- **Label** — FR : « Où nous trouver » · EN : « Find Us »
- **Titre** — FR : « Nos Points de Vente » · EN : « Our Locations »
- **Horaires** — FR : « 7j/7 • 11h — 21h30 » · EN : « 7/7 • 11am — 9:30pm »

| Nom | Ville | Note ★ | Avis | Services | Mise en avant |
|---|---|---|---|---|---|
| EKIE | Yaoundé | 4.6 | 179 | Dine-in, Pickup, Delivery | ⭐ Oui |
| Awaé Escalier | Yaoundé | 4.4 | 340 | Drive-through, Delivery | Non |
| Vogt | Yaoundé | 4.3 | — | Dine-in, Takeaway | Non |
| Simbock | Yaoundé | 4.4 | — | Dine-in, Takeaway | Non |
| Douala | Douala | 4.5 | — | Dine-in, Delivery | Non (tél. dédié) |

### CTA final

- **Titre** — FR : « ENVIE D'UNE PIZZA ? » · EN : « CRAVING PIZZA? »
- **Description** — FR : « Commandez directement sur WhatsApp et recevez votre pizza fraîche en un
  rien de temps. » · EN : « Order directly on WhatsApp and get your fresh pizza in no time. »
- **Bouton** — FR : « Commander sur WhatsApp » · EN : « Order on WhatsApp »

### Footer

- **Manifeste** — voir `02` (texte signature, FR + EN).
- **Tagline** — FR : « Pizza artisanale radicale » · EN : « Radical artisanal pizza »
- **Horaires** — « 7j/7 • 11h — 21h30 »
- **Marquees footer** (mots-clés ADN, 3 lignes) :
  - `SANS COMPROMIS · ARTISAN BRUT · FEU DE BOIS`
  - `PÂTE VIVANTE · ZÉRO CONCESSION · TRADITION RADICALE`
  - `FERMENTATION LENTE · INSTINCT DU FEU · SANS ARTIFICE`
- **Mentions** — « Tous droits réservés. »

---

## Contacts & liens (fonctionnels — à câbler)

| Élément | Valeur |
|---|---|
| WhatsApp (numéro) | `237 690 909 076` |
| WhatsApp (URL pré-remplie) | `https://wa.me/237690909076?text=Bonjour%2C%20je%20souhaite%20commander%20une%20pizza` |
| Tél. Yaoundé | `+237 690 909 076` (affiché : 690 909 076) |
| Tél. Douala | `+237 695 762 814` (affiché : 695 762 814) |
| Email | `raphaelopizza237@gmail.com` |
| Facebook | `https://www.facebook.com/RaphaeloPizza/` |
| Instagram | `https://www.instagram.com/raphaelopizza/` |

> **WhatsApp est le cœur de la conversion.** Chaque CTA de commande pointe vers un lien `wa.me`
> pré-rempli. Le bouton flottant WhatsApp (orbite + pulsation) doit rester présent au scroll.
