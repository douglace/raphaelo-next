# Lessons — raphaelo-next

## 2026-06-24 — `pnpm dev` plante (`ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING`), c'est corepack

**Symptôme** : `pnpm dev` sort en exit 1 immédiatement avec
`TypeError [ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING]: A dynamic import callback was not specified.`
La stack pointe vers `~/.cache/node/corepack/v1/pnpm/11.6.0/bin/pnpm.cjs:3` et le `corepack.cjs` de Node.

**Cause** : ce n'est pas le projet. C'est une incompatibilité entre le **shim corepack** qui résout pnpm
11.6.0 et **Node v20.19.0** : le wrapper corepack charge le `.cjs` de pnpm dans un contexte VM sans callback
d'import dynamique. L'erreur est trompeuse car elle n'a aucun rapport avec le code Next.

**Correction** : contourner corepack en appelant le binaire local directement —
`node_modules/.bin/next dev` (au lieu de `pnpm dev`). Next 16 + Turbopack démarre normalement.
Alternative durable : `corepack disable` puis pnpm global, ou changer de version de Node.

**Pour la prochaine fois** : `ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING` + `corepack`/`pnpm.cjs` dans la stack →
ce n'est pas le projet, c'est le shim corepack. Lancer via `node_modules/.bin/<bin>`.

## 2026-06-14 — Un export « Standalone .html » de Claude design est un bundle, pas une page

**Symptôme** : le fichier `Raphaelo Pizza - Standalone.html` (1,5 Mo, 181 lignes) semblait illisible —
une ligne de 1,4 Mo, aucune balise `<section>` lisible, des faux positifs `React`/`Vue` au grep.
Impossible d'« intégrer » en lisant le HTML directement.

**Cause** : l'export Claude design est un **bundle auto-portant**, pas du HTML final. La vraie page vit
dans des blocs `<script type="__bundler/...">` :
- `__bundler/manifest` : JSON `{ uuid: { mime, data(base64) } }` — contient images, **polices woff2** ET
  les libs JS (GSAP, ScrollTrigger, Lenis) **gzippées** (magic bytes `1f 8b`).
- `__bundler/template` : une **string JSON** (`JSON.parse` requis) = le vrai `<x-dc>` markup + CSS inline
  + un `<script type="text/x-dc">` contenant la logique (classe `DCLogic`, i18n, data) en clair.
- Les `src="<uuid>"` et `url("<uuid>")` pointent vers le manifest, pas vers des fichiers.
- Sucre runtime DC : attributs `style-hover="..."` / `style-focus="..."` (inexistants en DOM standard) +
  bindings `{{ maVar }}` résolus par `renderVals()`.

**Correction** : script d'extraction Node (`zlib.gunzipSync` pour les bundles, `JSON.parse` du template).
Stratégie d'intégration retenue dans `raphaelo-next` : rendre le markup tel quel via
`dangerouslySetInnerHTML` (`src/lib/raphaelo/markup.ts`) + porter `DCLogic` en fonction d'init client
(`src/lib/raphaelo/runtime.ts`) utilisant les libs npm (gsap/lenis) ; polices woff2 auto-hébergées dans
`public/fonts` + `@font-face` réécrits ; `style-hover/style-focus` réimplémentés génériquement dans le
runtime. next-intl/`[locale]` retirés car le design gère son propre i18n FR/EN.

**Pour la prochaine fois** : « standalone .html » de Claude design illisible / ligne géante / `__bundler/` →
ne pas lire le HTML, **extraire** manifest + template ; le markup et la logique sont dans `__bundler/template`.

## 2026-06-14 — Next.js 16 : `middleware.ts` ne route plus, il faut `src/proxy.ts`

**Symptôme** : après migration de la landing, `GET /` renvoyait `404` alors que `/fr` et `/en`
renvoyaient `200`. La locale par défaut (`as-needed`, donc servie sur `/` sans préfixe) n'était jamais
résolue. Le build affichait pourtant « ƒ Proxy (Middleware) » avec `middleware.ts` présent.

**Cause** : Next.js 16 a **déprécié et renommé** la convention `middleware` en `proxy`
(`node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md`). Deux pièges cumulés :
1. Dans un projet avec dossier `src/`, le fichier doit vivre dans **`src/proxy.ts`** (au même niveau que
   `app/`), pas à la racine. Un `proxy.ts` racine n'est **pas détecté** (le build ne liste plus le Proxy).
2. Next 16 attend une **fonction nommée `proxy`** : il fait
   `adapterFn = middlewareModule.default` puis `adapterFn({ handler: module.proxy || module.middleware, ... })`.
   Un `export default createMiddleware(routing)` (next-intl) court-circuite l'adaptateur injecté par le
   loader → erreur runtime **`TypeError: adapterFn is not a function`** (500).

**Correction** : créer `src/proxy.ts` exportant une fonction **nommée** `proxy` qui délègue au handler
next-intl, et supprimer `middleware.ts` :
```ts
// src/proxy.ts
import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { routing } from './i18n/routing';
const handleI18nRouting = createMiddleware(routing);
export function proxy(request: NextRequest) { return handleI18nRouting(request); }
export const config = { matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'] };
```
Penser à `rm -rf .next` après le changement (Turbopack garde une référence périmée à l'ancien fichier →
`MODULE_UNPARSABLE: Could not parse module '[project]/proxy.ts', file not found`).

**Pour la prochaine fois** : `404 sur /` mais `/locale` OK, ou `adapterFn is not a function` → c'est la
convention `middleware` → `proxy` de Next 16. Fichier dans `src/`, export **nommé** `proxy`.

## 2026-06-14 — next/image : timeout 500 sur images Unsplash distantes (optimiseur serveur)

**Symptôme** : `GET /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2F...` renvoyait `500` après
~7-8 s avec `Error [TimeoutError]: The operation was aborted due to timeout`. Le navigateur, lui,
atteignait Unsplash sans problème.

**Cause** : `next/image` optimise les images distantes en les **fetchant côté serveur** (le runtime Next
télécharge l'image, la ré-encode, la sert). Si l'environnement d'exécution n'a pas (ou peu) d'accès réseau
sortant — sandbox de dev, CI, host restreint — ce fetch serveur timeout, alors que le client y accède très
bien. C'est un mode d'échec **invisible en local avec bon réseau** mais qui casse l'image ailleurs.

**Correction** : pour des images **externes déjà dimensionnées** (URL Unsplash avec `?w=800&q=80`),
ajouter `unoptimized` sur le `<Image>` → l'image est chargée **directement par le navigateur** (comme un
`<img>` classique, comportement de la landing d'origine), sans proxy serveur. On garde l'optimisation pour
les assets **locaux** (ex. `/logo.png`). Fichiers : `src/components/sections/{Hero,About,Menu,FeatureBand}.tsx`.

**Pour la prochaine fois** : `_next/image` qui timeout / 500 sur des URLs distantes alors que l'image
s'affiche en accès direct → l'optimiseur serveur ne peut pas fetch. `unoptimized` sur les images externes,
ou héberger les images en local.
