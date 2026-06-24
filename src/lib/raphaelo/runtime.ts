/**
 * Runtime Raphaëlo — porté fidèlement depuis la classe DCLogic du bundle Claude design.
 * Reproduit : preloader, curseur custom, boutons magnétiques, Lenis, animations GSAP/ScrollTrigger,
 * canvas de braises, filtres menu, construction menu + points de vente, i18n FR/EN, menu mobile.
 *
 * Tout est impératif (DOM direct), appelé une seule fois côté client depuis un useEffect.
 * `initRaphaelo()` renvoie une fonction de nettoyage.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

type Dict = Record<string, string>;
type Pizza = { n: string; c: 'CLASSIC' | 'PREMIUM' | 'SIGNATURE'; price: string; ing: string; img: string };
type Loc = { n: string; city: string; rating: number; reviews: number | null; sv_fr: string; sv_en: string; feat: boolean; tel: string };

const WA_ICON = `<svg viewBox="0 0 32 32" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.3 31.7l8-2.1c2.3 1.3 4.9 1.9 7.6 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm7.2 18.8c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.7.2-.2.2-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8z"/></svg>`;

const DICT: Record<'fr' | 'en', Dict> = {
  fr: {
    'nav.about': 'À propos', 'nav.process': 'Le Feu', 'nav.menu': 'Menu', 'nav.locations': 'Nos Points', 'nav.order': 'Commander',
    'hero.eyebrow': "L'Instinct du Feu", 'hero.t1': 'La Meilleure', 'hero.t2': 'Pizza du', 'hero.t3': 'Cameroun',
    'hero.desc': "Pas de compromis. Pas de modération. Juste la brûlure du four et l'obsession du goût.",
    'hero.cta': 'Commander sur WhatsApp', 'hero.directlabel': 'Commande directe', 'hero.r2': '900+ avis', 'hero.scroll': 'Découvrir',
    'marquee': 'Pizza • Yaoundé • Douala • Depuis 2015 • La Meilleure • ',
    'about.tag': 'Artisan depuis 2015', 'about.label': 'Notre Histoire', 'about.title': "L'art de la pizza,<br><span style=\"font-family:'Newsreader',serif;font-style:italic;font-weight:500;text-transform:none;color:#FF6B35;\">fait maison</span>",
    'about.desc': "Depuis 2015, Raphaëlo Pizza s'engage à offrir la meilleure pizza au Cameroun. Des ingrédients frais, une pâte préparée chaque jour, et un savoir-faire qui a conquis des milliers de gourmands à travers le pays.",
    'about.s1l': 'Points de vente', 'about.s2l': 'Avis clients', 'about.s3l': 'Pizzas servies',
    'process.label': '03 // Le Procédé', 'process.title': 'Le Feu Décide',
    'process.sub': "Trois gestes, aucun raccourci. De la pâte vivante à la braise, chaque pizza est un acte de résistance contre la médiocrité.",
    'process.s1t': 'Fermentation 48h', 'process.s1d': "La pâte repose deux jours. Le temps fait le goût : légère, digeste, vivante.",
    'process.s2t': 'Cuisson Haute Température', 'process.s2d': "La braise monte. Quelques minutes au feu vif, et la croûte se signe de bulles dorées.",
    'process.s3t': 'Service Immédiat', 'process.s3d': "Sortie du four, sur WhatsApp, jusqu'à votre table. La pizza n'attend pas — vous non plus.",
    'menu.label': '02 // La Sélection', 'menu.title': 'Nos Pizzas', 'menu.sub': 'Fermentation 48h • Cuisson Haute Température • Prix en FCFA',
    'menu.f.all': 'Tout', 'menu.order': 'Commander',
    'menu.ing.1': 'Sauce tomate, herbes, fromage', 'menu.ing.2': 'Sauce tomate, saucisson, fromage', 'menu.ing.3': 'Jambon, ananas, sauce tomate, fromage',
    'menu.ing.4': 'Sauce tomate, olives noires, fromage', 'menu.ing.5': 'Jambon, champignon, sauce tomate, fromage', 'menu.ing.6': 'Lardon, jambon, champignon, fromage',
    'menu.ing.7': 'Saucisson, champignon, crème fraîche, fromage', 'menu.ing.8': 'Poulet, viande hachée, jambon, crème, fromage', 'menu.ing.9': 'Sardines, maïs doux, crème fraîche, fromage', 'menu.ing.10': 'Viande hachée, maïs doux, crème fraîche, fromage',
    'sizes.label': 'Tailles & Prix', 'sizes.title': 'Une taille pour chaque faim', 'sizes.desc': "Du solo gourmand à la grande tablée. Toutes nos pizzas existent en quatre formats — prix en FCFA, du plus accessible au plus généreux.",
    'fb.1': 'Points de vente', 'fb.2': 'Avis clients', 'fb.3': 'Jours ouvert',
    'loc.label': 'Où nous trouver', 'loc.title': 'Nos Points de Vente', 'loc.hours': '7j/7 • 11h — 21h30', 'loc.featured': 'Le plus aimé', 'loc.reviews': 'avis',
    'rev.label': 'Ils en redemandent', 'rev.title': '4.5 ★ sur 900+ avis',
    'rev.q1': "« La meilleure pâte de Yaoundé, sans débat. On sent le feu, on sent le travail. »",
    'rev.q2': "« Commande sur WhatsApp, pizza chaude en 25 min. La All American est une tuerie. »",
    'rev.q3': "« Artisanal, généreux, jamais industriel. Depuis 2015 je ne commande qu'ici. »",
    'cta.title': "Envie d'une pizza ?", 'cta.desc': "Commandez directement sur WhatsApp et recevez votre pizza fraîche en un rien de temps.", 'cta.btn': 'Commander sur WhatsApp',
    'footer.manifesto': "La pâte fermente. Le feu décide. Aucun raccourci. Aucune concession. Chaque pizza est un acte de résistance contre la médiocrité.",
    'footer.tagline': 'Pizza artisanale radicale', 'footer.contact': 'Contact', 'footer.follow': 'Suivez-nous', 'footer.hours': '7j/7 • 11h — 21h30', 'footer.rights': 'Tous droits réservés.',
  },
  en: {
    'nav.about': 'About', 'nav.process': 'The Fire', 'nav.menu': 'Menu', 'nav.locations': 'Locations', 'nav.order': 'Order',
    'hero.eyebrow': 'The Fire Instinct', 'hero.t1': 'The Best', 'hero.t2': 'Pizza in', 'hero.t3': 'Cameroon',
    'hero.desc': 'No compromise. No moderation. Just the burn of the oven and an obsession with taste.',
    'hero.cta': 'Order on WhatsApp', 'hero.directlabel': 'Direct order', 'hero.r2': '900+ reviews', 'hero.scroll': 'Scroll',
    'marquee': 'Pizza • Yaoundé • Douala • Since 2015 • The Best • ',
    'about.tag': 'Artisan since 2015', 'about.label': 'Our Story', 'about.title': "The art of pizza,<br><span style=\"font-family:'Newsreader',serif;font-style:italic;font-weight:500;text-transform:none;color:#FF6B35;\">made by hand</span>",
    'about.desc': "Since 2015, Raphaëlo Pizza has been committed to serving the best pizza in Cameroon. Fresh ingredients, dough made fresh every day, and craftsmanship that has won over thousands of food lovers across the country.",
    'about.s1l': 'Locations', 'about.s2l': 'Customer reviews', 'about.s3l': 'Pizzas served',
    'process.label': '03 // The Process', 'process.title': 'Fire Decides',
    'process.sub': "Three gestures, no shortcuts. From living dough to glowing embers, every pizza is an act of resistance against mediocrity.",
    'process.s1t': '48h Fermentation', 'process.s1d': "The dough rests for two days. Time makes the taste: light, digestible, alive.",
    'process.s2t': 'High-Temperature Bake', 'process.s2d': "The embers rise. A few minutes over live fire, and the crust signs itself with golden blisters.",
    'process.s3t': 'Served Immediately', 'process.s3d': "Straight from the oven, ordered on WhatsApp, to your table. The pizza won't wait — neither should you.",
    'menu.label': '02 // The Selection', 'menu.title': 'Our Pizzas', 'menu.sub': '48h Fermentation • High Temperature • Prices in FCFA',
    'menu.f.all': 'All', 'menu.order': 'Order',
    'menu.ing.1': 'Tomato sauce, herbs, mozzarella', 'menu.ing.2': 'Sausage, tomato sauce, cheese', 'menu.ing.3': 'Ham, pineapple, tomato sauce, cheese',
    'menu.ing.4': 'Black olives, tomato sauce, cheese', 'menu.ing.5': 'Ham, mushroom, tomato sauce, cheese', 'menu.ing.6': 'Bacon, ham, mushroom, cheese',
    'menu.ing.7': 'Sausage, mushroom, cream, cheese', 'menu.ing.8': 'Chicken, minced meat, ham, cream, cheese', 'menu.ing.9': 'Sardines, sweet corn, cream, cheese', 'menu.ing.10': 'Minced meat, sweet corn, cream, cheese',
    'sizes.label': 'Sizes & Prices', 'sizes.title': 'A size for every hunger', 'sizes.desc': "From a gourmand solo to the big table. Every pizza comes in four formats — prices in FCFA, from the most accessible to the most generous.",
    'fb.1': 'Locations', 'fb.2': 'Customer reviews', 'fb.3': 'Days open',
    'loc.label': 'Find Us', 'loc.title': 'Our Locations', 'loc.hours': '7/7 • 11am — 9:30pm', 'loc.featured': 'Most loved', 'loc.reviews': 'reviews',
    'rev.label': 'They keep coming back', 'rev.title': '4.5 ★ from 900+ reviews',
    'rev.q1': "“The best dough in Yaoundé, no debate. You can taste the fire, you can taste the work.”",
    'rev.q2': "“Order on WhatsApp, hot pizza in 25 min. The All American is a killer.”",
    'rev.q3': "“Artisanal, generous, never industrial. Since 2015 I only order here.”",
    'cta.title': 'Craving Pizza?', 'cta.desc': 'Order directly on WhatsApp and get your fresh pizza in no time.', 'cta.btn': 'Order on WhatsApp',
    'footer.manifesto': "The dough ferments. Fire decides. No shortcuts. No concessions. Every pizza is an act of resistance against mediocrity.",
    'footer.tagline': 'Radical artisanal pizza', 'footer.contact': 'Contact', 'footer.follow': 'Follow us', 'footer.hours': '7/7 • 11am — 9:30pm', 'footer.rights': 'All rights reserved.',
  },
};

const PIZZAS: Pizza[] = [
  { n: 'New York Cheese', c: 'CLASSIC', price: '2 500 — 6 500', ing: 'menu.ing.1', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80&auto=format&fit=crop' },
  { n: 'Azzura Cheese', c: 'CLASSIC', price: '2 500 — 6 500', ing: 'menu.ing.2', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80&auto=format&fit=crop' },
  { n: 'Hawaienne', c: 'CLASSIC', price: '2 500 — 6 500', ing: 'menu.ing.3', img: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=800&q=80&auto=format&fit=crop' },
  { n: 'Margherita', c: 'PREMIUM', price: '4 000 — 8 000', ing: 'menu.ing.4', img: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&q=80&auto=format&fit=crop' },
  { n: 'Regina', c: 'PREMIUM', price: '4 500 — 8 000', ing: 'menu.ing.5', img: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=800&q=80&auto=format&fit=crop' },
  { n: 'Belle Paysanne', c: 'PREMIUM', price: '4 500 — 9 000', ing: 'menu.ing.6', img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&q=80&auto=format&fit=crop' },
  { n: 'Suisse', c: 'PREMIUM', price: '4 500 — 8 000', ing: 'menu.ing.7', img: 'https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?w=800&q=80&auto=format&fit=crop' },
  { n: 'All American', c: 'SIGNATURE', price: '6 000 — 10 500', ing: 'menu.ing.8', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80&auto=format&fit=crop' },
  { n: 'Sicilia', c: 'SIGNATURE', price: '5 000 — 8 500', ing: 'menu.ing.9', img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&q=80&auto=format&fit=crop' },
  { n: 'Mexicaine', c: 'SIGNATURE', price: '6 000 — 10 500', ing: 'menu.ing.10', img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&q=80&auto=format&fit=crop' },
];

const LOCATIONS: Loc[] = [
  { n: 'EKIE', city: 'Yaoundé', rating: 4.6, reviews: 179, sv_fr: 'Sur place · Retrait · Livraison', sv_en: 'Dine-in · Pickup · Delivery', feat: true, tel: '237690909076' },
  { n: 'Awaé Escalier', city: 'Yaoundé', rating: 4.4, reviews: 340, sv_fr: 'Drive · Livraison', sv_en: 'Drive-through · Delivery', feat: false, tel: '237690909076' },
  { n: 'Vogt', city: 'Yaoundé', rating: 4.3, reviews: null, sv_fr: 'Sur place · À emporter', sv_en: 'Dine-in · Takeaway', feat: false, tel: '237690909076' },
  { n: 'Simbock', city: 'Yaoundé', rating: 4.4, reviews: null, sv_fr: 'Sur place · À emporter', sv_en: 'Dine-in · Takeaway', feat: false, tel: '237690909076' },
  { n: 'Douala', city: 'Douala', rating: 4.5, reviews: null, sv_fr: 'Sur place · Livraison', sv_en: 'Dine-in · Delivery', feat: false, tel: '237695762814' },
];

export function initRaphaelo(): () => void {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.getElementById('rz-root') as HTMLElement | null;
  if (!root) return () => {};
  const rootEl: HTMLElement = root;

  let lang: 'fr' | 'en' = 'fr';
  let scrolled = false;
  let lenis: Lenis | null = null;
  let preDone = false;
  let heroDone = false;
  let preTimer: ReturnType<typeof setTimeout> | undefined;
  const rafIds: number[] = [];
  const cleanups: Array<() => void> = [];

  const waGeneric = () =>
    lang === 'fr'
      ? 'https://wa.me/237690909076?text=Bonjour%2C%20je%20souhaite%20commander%20une%20pizza%20Rapha%C3%ABlo'
      : 'https://wa.me/237690909076?text=Hello%2C%20I%20would%20like%20to%20order%20a%20Rapha%C3%ABlo%20pizza';

  const waPizza = (name: string) => {
    const txt = lang === 'fr' ? `Bonjour, je voudrais commander une pizza ${name}` : `Hello, I'd like to order a ${name} pizza`;
    return `https://wa.me/237690909076?text=${encodeURIComponent(txt)}`;
  };

  // ---------- menu ----------
  function buildMenu() {
    const grid = document.querySelector<HTMLElement>('[data-menu-grid]');
    if (!grid || grid.childElementCount) return;
    const cat: Record<string, string> = { CLASSIC: '#C8A750', PREMIUM: '#FF6B35', SIGNATURE: '#E63028' };
    PIZZAS.forEach((p) => {
      const card = document.createElement('article');
      card.setAttribute('data-card', '');
      card.setAttribute('data-cat', p.c);
      card.style.cssText = 'position:relative;display:flex;flex-direction:column;border-radius:18px;overflow:hidden;background:linear-gradient(180deg,#141110,#0e0c0b);border:1px solid rgba(245,241,230,.08);transition:transform .4s cubic-bezier(.2,.8,.2,1),border-color .4s,box-shadow .4s;';
      card.innerHTML = `
        <div data-card-media style="position:relative;aspect-ratio:4/3;overflow:hidden;">
          <img src="${p.img}" alt="Pizza ${p.n}" loading="lazy" style="width:100%;height:100%;object-fit:cover;filter:saturate(1.08) contrast(1.05) brightness(.95);transition:transform .6s cubic-bezier(.2,.8,.2,1),filter .4s;">
          <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(10,9,8,.85));"></div>
          <span style="position:absolute;left:14px;top:14px;padding:6px 12px;border-radius:100px;background:rgba(10,9,8,.72);backdrop-filter:blur(6px);border:1px solid ${cat[p.c]}55;font-size:10px;font-weight:800;letter-spacing:.14em;color:${cat[p.c]};">${p.c}</span>
          <h3 style="position:absolute;left:16px;bottom:12px;margin:0;font-family:'Anton';font-weight:400;text-transform:uppercase;font-size:1.5rem;line-height:1;color:#F5F1E6;">${p.n}</h3>
        </div>
        <div style="display:flex;flex-direction:column;gap:14px;padding:18px;flex:1;">
          <p data-i18n="${p.ing}" style="margin:0;font-size:.9rem;line-height:1.45;color:#9E978C;min-height:2.6em;">${DICT[lang][p.ing]}</p>
          <div style="margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:12px;">
            <span style="font-family:'Anton';font-size:1.15rem;color:#F5F1E6;white-space:nowrap;">${p.price}<span style="font-size:.6em;color:#7E776E;margin-left:5px;">FCFA</span></span>
            <a data-order-pizza="${p.n.replace(/"/g, '')}" data-cursor href="${waPizza(p.n)}" target="_blank" rel="noopener" aria-label="Commander ${p.n} sur WhatsApp" style="display:inline-flex;align-items:center;gap:7px;padding:10px 15px;border-radius:100px;background:#25D366;color:#06231a;font-weight:800;font-size:12px;letter-spacing:.03em;white-space:nowrap;transition:transform .25s,box-shadow .25s;box-shadow:0 4px 16px rgba(37,211,102,.28);">
              ${WA_ICON}
              <span data-i18n="menu.order">${DICT[lang]['menu.order']}</span>
            </a>
          </div>
        </div>`;
      const media = card.querySelector<HTMLElement>('[data-card-media] img');
      card.addEventListener('mouseenter', () => { card.style.transform = 'translateY(-6px)'; card.style.borderColor = cat[p.c] + '66'; card.style.boxShadow = '0 26px 50px rgba(0,0,0,.5)'; if (media) media.style.transform = 'scale(1.07)'; });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; card.style.borderColor = 'rgba(245,241,230,.08)'; card.style.boxShadow = 'none'; if (media) media.style.transform = ''; });
      grid.appendChild(card);
    });
  }

  function buildLocations() {
    const grid = document.querySelector<HTMLElement>('[data-loc-grid]');
    if (!grid || grid.childElementCount) return;
    LOCATIONS.forEach((l) => {
      const card = document.createElement('article');
      card.setAttribute('data-reveal', '');
      const accent = l.feat ? '#E63028' : 'rgba(245,241,230,.08)';
      card.style.cssText = `position:relative;display:flex;flex-direction:column;gap:14px;padding:clamp(22px,2.6vw,30px);border-radius:18px;background:${l.feat ? 'linear-gradient(165deg,rgba(40,20,16,.9),rgba(18,13,11,.95))' : 'linear-gradient(180deg,#141110,#0e0c0b)'};border:1px solid ${accent};transition:transform .4s,border-color .4s;transform-style:preserve-3d;`;
      const stars = '★★★★★';
      const filled = Math.round(l.rating);
      card.innerHTML = `
        ${l.feat ? `<span data-i18n="loc.featured" style="position:absolute;right:16px;top:16px;padding:5px 11px;border-radius:100px;background:#E63028;color:#fff;font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;">${DICT[lang]['loc.featured']}</span>` : ''}
        <span style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#8B847A;font-weight:700;">${l.city}</span>
        <h3 style="margin:0;font-family:'Anton';font-weight:400;text-transform:uppercase;font-size:clamp(1.6rem,2.6vw,2.2rem);line-height:.95;color:#F5F1E6;">${l.n}</h3>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="position:relative;font-size:1rem;letter-spacing:2px;color:rgba(245,241,230,.18);">${stars}<span style="position:absolute;left:0;top:0;overflow:hidden;width:${(filled / 5 * 100)}%;color:#C8A750;">${stars}</span></span>
          <span style="font-weight:800;color:#F5F1E6;font-size:.92rem;">${l.rating.toFixed(1)}</span>
          ${l.reviews ? `<span style="color:#7E776E;font-size:.84rem;">· ${l.reviews} <span data-i18n="loc.reviews">${DICT[lang]['loc.reviews']}</span></span>` : ''}
        </div>
        <p data-loc-sv style="margin:0;font-size:.9rem;color:#9E978C;">${lang === 'fr' ? l.sv_fr : l.sv_en}</p>
        <a data-cursor href="https://wa.me/${l.tel}?text=${encodeURIComponent(lang === 'fr' ? ('Bonjour, je souhaite commander depuis ' + l.n) : ('Hello, I would like to order from ' + l.n))}" target="_blank" rel="noopener" style="margin-top:6px;display:inline-flex;align-items:center;gap:8px;align-self:flex-start;padding:10px 16px;border-radius:100px;border:1px solid rgba(37,211,102,.45);color:#25D366;font-weight:700;font-size:12px;transition:background .25s;">
          ${WA_ICON}
          <span data-i18n="nav.order">${DICT[lang]['nav.order']}</span>
        </a>`;
      const ax = l.feat ? '#E63028' : 'rgba(255,107,53,.4)';
      card.addEventListener('mousemove', (e) => { if (reduce) return; const r = card.getBoundingClientRect(); const rx = ((e.clientY - r.top) / r.height - .5) * -7; const ry = ((e.clientX - r.left) / r.width - .5) * 7; card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`; card.style.borderColor = ax; });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; card.style.borderColor = accent; });
      grid.appendChild(card);
    });
  }

  // ---------- i18n ----------
  function refreshBindings() {
    document.querySelectorAll<HTMLAnchorElement>('[data-order-generic]').forEach((a) => a.setAttribute('href', waGeneric()));
    document.querySelectorAll<HTMLElement>('[data-lang-toggle]').forEach((b) => { b.textContent = lang === 'fr' ? 'EN' : 'FR'; });
  }

  function updateOrderLinks() {
    document.querySelectorAll<HTMLAnchorElement>('[data-order-pizza]').forEach((a) => {
      a.setAttribute('href', waPizza(a.getAttribute('data-order-pizza') || ''));
    });
    document.querySelectorAll<HTMLElement>('[data-loc-sv]').forEach((el, i) => {
      const l = LOCATIONS[i]; if (l) el.textContent = lang === 'fr' ? l.sv_fr : l.sv_en;
    });
  }

  function applyI18n() {
    const d = DICT[lang];
    document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n'); if (k && d[k] != null) el.textContent = d[k];
    });
    document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
      const k = el.getAttribute('data-i18n-html'); if (k && d[k] != null) el.innerHTML = d[k];
    });
    document.documentElement.lang = lang;
    refreshBindings();
    updateOrderLinks();
  }

  const toggleLang = () => { lang = lang === 'fr' ? 'en' : 'fr'; applyI18n(); };

  // ---------- menu filter ----------
  function filterMenu(c: string) {
    document.querySelectorAll<HTMLElement>('[data-menu-filters] [data-filter]').forEach((b) => {
      const on = b.getAttribute('data-filter') === c;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (on) { b.style.background = '#E63028'; b.style.borderColor = '#E63028'; b.style.color = '#fff'; }
      else { b.style.background = 'transparent'; b.style.borderColor = 'rgba(245,241,230,.2)'; b.style.color = '#C9C2B8'; }
    });
    document.querySelectorAll<HTMLElement>('[data-menu-grid] [data-card]').forEach((card) => {
      const show = c === 'all' || card.getAttribute('data-cat') === c;
      if (show) {
        card.style.display = 'flex';
        if (!reduce) gsap.fromTo(card, { opacity: 0, scale: .94, y: 14 }, { opacity: 1, scale: 1, y: 0, duration: .5, ease: 'power3.out' });
      } else {
        card.style.display = 'none';
      }
    });
    setTimeout(() => ScrollTrigger.refresh(), 60);
  }

  // ---------- style-hover / style-focus (sucre du runtime DC) ----------
  function wireStateStyles() {
    const parse = (s: string) => s.split(';').map((x) => x.trim()).filter(Boolean).map((p) => { const i = p.indexOf(':'); return [p.slice(0, i).trim(), p.slice(i + 1).trim()] as [string, string]; });
    const bind = (attr: string, on: string, off: string) => {
      rootEl.querySelectorAll<HTMLElement>(`[${attr}]`).forEach((el) => {
        const decls = parse(el.getAttribute(attr) || '');
        const prev = new Map<string, string>();
        el.addEventListener(on, () => decls.forEach(([k, v]) => { prev.set(k, el.style.getPropertyValue(k)); el.style.setProperty(k, v); }));
        el.addEventListener(off, () => decls.forEach(([k]) => el.style.setProperty(k, prev.get(k) || '')));
      });
    };
    bind('style-hover', 'mouseenter', 'mouseleave');
    bind('style-focus', 'focus', 'blur');
  }

  // ---------- UI ----------
  function openMobile() {
    const m = document.getElementById('rz-mobile'); if (!m) return;
    m.setAttribute('data-open', '1');
    Object.assign(m.style, { transform: 'translateY(0)', opacity: '1', pointerEvents: 'auto' });
    document.getElementById('rz-burger')?.setAttribute('aria-expanded', 'true');
  }
  function closeMobile() {
    const m = document.getElementById('rz-mobile'); if (!m) return;
    m.setAttribute('data-open', '0');
    Object.assign(m.style, { transform: 'translateY(-100%)', opacity: '0', pointerEvents: 'none' });
    document.getElementById('rz-burger')?.setAttribute('aria-expanded', 'false');
  }

  function magnetic(el: HTMLElement) {
    const s = 0.3;
    const move = (e: MouseEvent) => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * s}px,${(e.clientY - r.top - r.height / 2) * s}px)`; };
    const leave = () => { el.style.transition = 'transform .4s cubic-bezier(.18,.9,.3,1.2)'; el.style.transform = 'translate(0,0)'; setTimeout(() => (el.style.transition = ''), 420); };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
  }

  function initCursor() {
    const dot = document.getElementById('rz-cursor');
    const ring = document.getElementById('rz-cursor-ring');
    if (!dot || !ring) return;
    let rx = 0, ry = 0, x = 0, y = 0;
    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; dot.style.transform = `translate(${x}px,${y}px)`; dot.style.opacity = '1'; ring.style.opacity = '1'; };
    window.addEventListener('mousemove', onMove);
    cleanups.push(() => window.removeEventListener('mousemove', onMove));
    const loop = () => { rx += (x - rx) * 0.18; ry += (y - ry) * 0.18; ring.style.transform = `translate(${rx}px,${ry}px)`; rafIds.push(requestAnimationFrame(loop)); };
    loop();
    rootEl.addEventListener('mouseover', (e) => { if ((e.target as Element).closest('[data-cursor],a,button')) { ring.style.width = '58px'; ring.style.height = '58px'; ring.style.borderColor = '#FF6B35'; ring.style.background = 'rgba(255,107,53,.1)'; } });
    rootEl.addEventListener('mouseout', (e) => { if ((e.target as Element).closest('[data-cursor],a,button')) { ring.style.width = '38px'; ring.style.height = '38px'; ring.style.borderColor = 'rgba(245,241,230,.5)'; ring.style.background = 'transparent'; } });
  }

  function bindUI() {
    document.querySelectorAll<HTMLElement>('[data-lang-toggle]').forEach((b) => b.addEventListener('click', toggleLang));

    rootEl.addEventListener('click', (e) => {
      const a = (e.target as Element).closest<HTMLAnchorElement>('[data-scrollto]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (!id || !id.startsWith('#')) return;
      const t = document.querySelector<HTMLElement>(id);
      if (!t) return;
      e.preventDefault();
      closeMobile();
      if (lenis) lenis.scrollTo(t, { offset: -70, duration: 1.1 });
      else t.scrollIntoView({ behavior: 'smooth' });
    });

    const burger = document.getElementById('rz-burger');
    if (burger) burger.addEventListener('click', () => {
      const m = document.getElementById('rz-mobile');
      const open = m?.getAttribute('data-open') === '1';
      open ? closeMobile() : openMobile();
    });

    if (matchMedia('(pointer:fine)').matches) initCursor();
    if (!reduce) document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => magnetic(el));
    wireStateStyles();
  }

  // ---------- scroll state ----------
  function onScrollState(y: number) {
    const sc = y > 360;
    if (sc !== scrolled) { scrolled = sc; document.getElementById('rz-fab')?.classList.toggle('rz-fab--show', sc); }
    const nav = document.getElementById('rz-nav');
    if (nav) {
      if (y > 30) { nav.style.background = 'rgba(11,11,11,.82)'; nav.style.backdropFilter = 'blur(14px)'; nav.style.borderColor = 'rgba(245,241,230,.08)'; nav.style.padding = '10px clamp(18px,5vw,72px)'; }
      else { nav.style.background = 'transparent'; nav.style.backdropFilter = 'none'; nav.style.borderColor = 'transparent'; nav.style.padding = '15px clamp(18px,5vw,72px)'; }
    }
  }

  // ---------- hero ----------
  function animateHero() {
    if (heroDone) return; heroDone = true;
    const lines = document.querySelectorAll<HTMLElement>('[data-hero-line] > span');
    const fades = document.querySelectorAll<HTMLElement>('[data-hero-fade]');
    const pizza = document.querySelector<HTMLElement>('[data-hero-pizza]');
    if (reduce) {
      lines.forEach((l) => (l.style.transform = 'translateY(0)'));
      fades.forEach((f) => (f.style.opacity = '1'));
      onScrollState(window.scrollY || 0);
      return;
    }
    gsap.set(lines, { yPercent: 115 });
    gsap.set(fades, { opacity: 0, y: 24 });
    if (pizza) gsap.set(pizza, { scale: .8, opacity: 0, rotate: -12 });
    const tl = gsap.timeline();
    tl.to(lines, { yPercent: 0, duration: 1.0, ease: 'power4.out', stagger: .09 })
      .to(pizza, { scale: 1, opacity: 1, rotate: 0, duration: 1.2, ease: 'power3.out' }, '-=.8')
      .to(fades, { opacity: 1, y: 0, duration: .7, ease: 'power2.out', stagger: .08 }, '-=.9');
  }

  // ---------- preloader ----------
  function dismissPreloader() {
    if (preDone) return; preDone = true;
    clearTimeout(preTimer);
    const pre = document.getElementById('rz-pre');
    if (pre) {
      pre.style.transition = 'opacity .6s, transform .8s cubic-bezier(.76,0,.24,1)';
      pre.style.opacity = '0'; pre.style.transform = 'translateY(-3%)'; pre.style.pointerEvents = 'none';
      setTimeout(() => { pre.style.display = 'none'; }, 800);
    }
    animateHero();
  }

  function runPreloader() {
    const num = document.getElementById('rz-pre-num');
    if (reduce || !num) { if (num) num.textContent = '100'; setTimeout(dismissPreloader, 200); return; }
    let p = 0;
    const tick = () => {
      if (preDone) return;
      p += Math.max(1, (100 - p) * 0.06) + Math.random() * 2;
      if (p >= 100) { num.textContent = '100'; setTimeout(dismissPreloader, 300); return; }
      num.textContent = String(Math.floor(p));
      setTimeout(tick, 22 + Math.random() * 30);
    };
    tick();
  }

  // ---------- Lenis ----------
  function initLenis() {
    if (reduce) return;
    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true });
    const raf = (t: number) => { lenis!.raf(t); rafIds.push(requestAnimationFrame(raf)); };
    rafIds.push(requestAnimationFrame(raf));
    lenis.on('scroll', () => ScrollTrigger.update());
  }

  // ---------- process + manifesto ----------
  function afterMotion() {
    document.querySelectorAll<HTMLElement>('[data-feu-step]').forEach((s) => {
      const fill = s.querySelector<HTMLElement>('[data-feu-fill]');
      ScrollTrigger.create({ trigger: s, start: 'top 75%', onEnter: () => { if (fill) fill.style.opacity = '1'; }, onLeaveBack: () => { if (fill) fill.style.opacity = '0'; } });
    });
    const gauge = document.querySelector<HTMLElement>('[data-feu-gauge]');
    if (gauge) {
      const o = { v: 60 };
      ScrollTrigger.create({ trigger: gauge, start: 'top 90%', once: true, onEnter: () => gsap.to(o, { v: 340, duration: 1.8, ease: 'power2.out', onUpdate: () => (gauge.textContent = Math.round(o.v) + '°C') }) });
    }
    const man = document.querySelector<HTMLElement>('[data-manifesto]');
    if (man && !man.dataset.split) {
      man.dataset.split = '1';
      const words = (man.textContent || '').trim().split(/\s+/);
      man.innerHTML = words.map((w) => `<span style="display:inline-block;overflow:hidden;"><span style="display:inline-block;">${w}</span></span>`).join(' ');
      const inner = man.querySelectorAll('span > span');
      gsap.set(inner, { yPercent: 110, opacity: .15 });
      ScrollTrigger.create({ trigger: man, start: 'top 82%', once: true, onEnter: () => gsap.to(inner, { yPercent: 0, opacity: 1, duration: .7, ease: 'power3.out', stagger: .025 }) });
    }
  }

  // ---------- scroll motion ----------
  function initMotion() {
    const onScroll = () => onScrollState(window.scrollY || window.pageYOffset || 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener('scroll', onScroll));
    if (lenis) lenis.on('scroll', () => onScrollState(window.scrollY || window.pageYOffset || 0));
    onScroll();

    if (reduce) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((e) => (e.style.opacity = '1'));
      afterMotion();
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 42 }, { opacity: 1, y: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%' } });
    });

    document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
      const end = parseFloat(el.getAttribute('data-count') || '0');
      const suf = el.getAttribute('data-suffix') || '';
      const o = { v: 0 };
      ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => gsap.to(o, { v: end, duration: 1.6, ease: 'power2.out', onUpdate: () => (el.textContent = Math.floor(o.v) + suf) }) });
    });

    const ring = document.querySelector<HTMLElement>('[data-hero-ring]');
    const pizza = document.querySelector<HTMLElement>('[data-hero-pizza]');
    if (pizza) gsap.to(pizza, { rotate: 90, ease: 'none', scrollTrigger: { trigger: '#rz-top', start: 'top top', end: '+=900', scrub: 1 } });
    if (ring) gsap.to(ring, { rotate: 200, ease: 'none', scrollTrigger: { trigger: '#rz-top', start: 'top top', end: '+=900', scrub: 1 } });

    afterMotion();
    setTimeout(() => ScrollTrigger.refresh(), 400);
  }

  // ---------- ember canvas ----------
  function emberOn(cv: HTMLCanvasElement) {
    const ctx = cv.getContext('2d'); if (!ctx) return;
    let w = 0, h = 0;
    const dpr = window.devicePixelRatio || 1;
    const resize = () => { const r = cv.getBoundingClientRect(); w = cv.width = r.width * dpr; h = cv.height = r.height * dpr; };
    resize();
    window.addEventListener('resize', resize);
    cleanups.push(() => window.removeEventListener('resize', resize));
    const spawn = () => ({ x: Math.random() * w, y: h + Math.random() * 40 * dpr, r: (Math.random() * 2 + 0.6) * dpr, vy: -(Math.random() * 0.7 + 0.25) * dpr, vx: (Math.random() - 0.5) * 0.3 * dpr, life: Math.random() * 0.6 + 0.4, hue: Math.random() < 0.5 ? 18 : 30 });
    const N = Math.min(70, Math.floor(window.innerWidth / 22));
    const parts = Array.from({ length: N }, () => { const p = spawn(); p.y = Math.random() * h; return p; });
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy; p.life -= 0.0025;
        if (p.y < -10 || p.life <= 0) Object.assign(p, spawn());
        const a = Math.max(0, Math.min(1, p.life)) * 0.7;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7);
        ctx.fillStyle = `hsla(${p.hue},95%,58%,${a})`;
        ctx.shadowBlur = 8 * dpr; ctx.shadowColor = `hsla(${p.hue},95%,55%,${a})`;
        ctx.fill();
      }
      rafIds.push(requestAnimationFrame(draw));
    };
    draw();
  }

  function startEmber() {
    if (reduce) return;
    document.querySelectorAll<HTMLCanvasElement>('[data-ember]').forEach((cv) => emberOn(cv));
  }

  // ---------- boot ----------
  buildMenu();
  buildLocations();
  applyI18n();
  bindUI();
  startEmber();
  document.querySelectorAll<HTMLElement>('[data-menu-filters] [data-filter]').forEach((b) =>
    b.addEventListener('click', () => filterMenu(b.getAttribute('data-filter') || 'all')));

  const safe = (fn: () => void, label: string) => { try { fn(); } catch (e) { console.error('[rz] ' + label, e); } };
  requestAnimationFrame(() => requestAnimationFrame(() => {
    safe(initLenis, 'lenis');
    safe(initMotion, 'motion');
    safe(runPreloader, 'preloader');
  }));
  preTimer = setTimeout(() => safe(dismissPreloader, 'pre-fallback'), 3600);

  // ---------- cleanup ----------
  return () => {
    clearTimeout(preTimer);
    rafIds.forEach((id) => cancelAnimationFrame(id));
    cleanups.forEach((fn) => { try { fn(); } catch { /* noop */ } });
    try { ScrollTrigger.getAll().forEach((t) => t.kill()); } catch { /* noop */ }
    try { lenis?.destroy(); } catch { /* noop */ }
  };
}
