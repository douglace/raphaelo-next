// Généré depuis le bundle Claude design — markup statique fidèle.
export const MARKUP = `<div id="rz-root" style="position:relative;width:100%;overflow:hidden;background:#0D0D0D;">

  <a href="#rz-main" data-scrollto="" style="position:fixed;left:12px;top:-60px;z-index:2000;background:#E63028;color:#fff;padding:10px 16px;border-radius:8px;font-weight:700;transition:top .2s;" style-focus="top:12px;">Aller au contenu</a>

  <!-- PRELOADER -->
  <div id="rz-pre" style="position:fixed;inset:0;z-index:1600;background:#0D0D0D;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:26px;">
    <div style="position:absolute;left:50%;top:54%;transform:translate(-50%,-50%);width:60vw;height:60vw;max-width:620px;max-height:620px;background:radial-gradient(circle,rgba(255,107,53,.20),rgba(230,48,40,.06) 40%,transparent 68%);filter:blur(8px);"></div>
    <img src="/logo.png" alt="Raphaëlo Pizza" style="position:relative;width:min(58vw,290px);height:auto;filter:drop-shadow(0 6px 30px rgba(230,48,40,.4))">
    <div style="position:relative;display:flex;align-items:baseline;gap:6px;font-family:'Anton';color:#F5F1E6;">
      <span id="rz-pre-num" style="font-size:clamp(2.2rem,7vw,3.6rem);line-height:1;">0</span>
      <span style="font-size:1.3rem;color:#FF6B35;">%</span>
    </div>
    <span style="position:relative;font-weight:700;letter-spacing:.34em;text-transform:uppercase;font-size:11px;color:#A39B91;">La Meilleure Pizza</span>
  </div>

  <!-- CURSOR -->
  <div id="rz-cursor" style="position:fixed;left:0;top:0;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:#FF6B35;z-index:1500;pointer-events:none;mix-blend-mode:difference;opacity:0;"></div>
  <div id="rz-cursor-ring" style="position:fixed;left:0;top:0;width:38px;height:38px;margin:-19px 0 0 -19px;border-radius:50%;border:1.5px solid rgba(245,241,230,.5);z-index:1500;pointer-events:none;transition:width .25s,height .25s,border-color .25s,background .25s;mix-blend-mode:difference;opacity:0;"></div>

  <!-- NAV -->
  <nav id="rz-nav" style="position:fixed;top:0;left:0;width:100%;z-index:1200;display:flex;align-items:center;justify-content:space-between;padding:15px clamp(18px,5vw,72px);border-bottom:1px solid transparent;transition:background .4s,border-color .4s,padding .4s;">
    <a href="#rz-top" data-scrollto="" data-cursor="" aria-label="Raphaëlo Pizza — accueil" style="display:flex;align-items:center;">
      <img src="/logo.png" alt="Raphaëlo Pizza" style="height:clamp(34px,4.4vw,44px);width:auto;filter:drop-shadow(0 2px 10px rgba(230,48,40,.35))">
    </a>
    <div id="rz-navlinks" style="display:flex;align-items:center;gap:clamp(20px,2.4vw,40px);white-space:nowrap;">
      <a href="#rz-about" data-scrollto="" data-cursor="" data-i18n="nav.about" style="font-weight:600;font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:#C9C2B8;transition:color .25s;" style-hover="color:#F5F1E6;">À propos</a>
      <a href="#rz-process" data-scrollto="" data-cursor="" data-i18n="nav.process" style="font-weight:600;font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:#C9C2B8;transition:color .25s;" style-hover="color:#F5F1E6;">Le Feu</a>
      <a href="#rz-menu" data-scrollto="" data-cursor="" data-i18n="nav.menu" style="font-weight:600;font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:#C9C2B8;transition:color .25s;" style-hover="color:#F5F1E6;">Menu</a>
      <a href="#rz-locations" data-scrollto="" data-cursor="" data-i18n="nav.locations" style="font-weight:600;font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:#C9C2B8;transition:color .25s;" style-hover="color:#F5F1E6;">Nos Points</a>
    </div>
    <div style="display:flex;align-items:center;gap:12px;">
      <button data-lang-toggle="" data-cursor="" aria-label="Switch language" style="width:42px;height:42px;border-radius:50%;border:1px solid rgba(245,241,230,.22);font-weight:700;font-size:12px;letter-spacing:.06em;color:#F5F1E6;transition:border-color .25s,background .25s;" style-hover="border-color:#C8A750;background:rgba(200,167,80,.12);">EN</button>
      <a id="rz-nav-order" data-order-generic="" data-magnetic="" data-cursor="" href="https://wa.me/237690909076?text=Bonjour%2C%20je%20souhaite%20commander%20une%20pizza%20Rapha%C3%ABlo" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:9px;padding:11px 20px;border-radius:100px;background:#25D366;color:#06231a;font-weight:800;font-size:13px;letter-spacing:.03em;box-shadow:0 6px 22px rgba(37,211,102,.32);transition:box-shadow .25s;" style-hover="box-shadow:0 10px 30px rgba(37,211,102,.5);">
        <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.3 31.7l8-2.1c2.3 1.3 4.9 1.9 7.6 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5C3.9 20.5 3.2 18.3 3.2 16 3.2 8.9 9 3.2 16 3.2 23 3.2 28.8 8.9 28.8 16S23 28.8 16 28.8zm7.2-9.6c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.7.2-.2.2-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8z"></path></svg>
        <span data-i18n="nav.order">Commander</span>
      </a>
      <button id="rz-burger" aria-label="Menu" aria-expanded="false" style="display:none;width:44px;height:44px;align-items:center;justify-content:center;flex-direction:column;gap:5px;">
        <span style="display:block;width:24px;height:2px;background:#F5F1E6;"></span>
        <span style="display:block;width:24px;height:2px;background:#F5F1E6;"></span>
      </button>
    </div>
  </nav>

  <!-- MOBILE MENU -->
  <div id="rz-mobile" data-open="0" style="position:fixed;inset:0;z-index:1150;background:#0D0D0D;transform:translateY(-100%);opacity:0;pointer-events:none;transition:transform .55s cubic-bezier(.76,0,.24,1),opacity .4s;display:flex;flex-direction:column;justify-content:center;gap:6px;padding:0 28px;">
    <a href="#rz-about" data-scrollto="" data-i18n="nav.about" style="font-family:'Anton';font-size:13vw;line-height:1.08;text-transform:uppercase;color:#F5F1E6;">À propos</a>
    <a href="#rz-process" data-scrollto="" data-i18n="nav.process" style="font-family:'Anton';font-size:13vw;line-height:1.08;text-transform:uppercase;color:#F5F1E6;">Le Feu</a>
    <a href="#rz-menu" data-scrollto="" data-i18n="nav.menu" style="font-family:'Anton';font-size:13vw;line-height:1.08;text-transform:uppercase;color:#F5F1E6;">Menu</a>
    <a href="#rz-locations" data-scrollto="" data-i18n="nav.locations" style="font-family:'Anton';font-size:13vw;line-height:1.08;text-transform:uppercase;color:#F5F1E6;">Nos Points</a>
    <a data-order-generic="" href="https://wa.me/237690909076?text=Bonjour%2C%20je%20souhaite%20commander%20une%20pizza%20Rapha%C3%ABlo" target="_blank" rel="noopener" style="margin-top:22px;display:inline-flex;align-items:center;gap:10px;align-self:flex-start;padding:15px 26px;border-radius:100px;background:#25D366;color:#06231a;font-weight:800;font-size:1.1rem;"><span data-i18n="nav.order">Commander</span></a>
  </div>

  <div id="rz-top"></div>
  <main id="rz-main">

  <!-- HERO -->
  <header style="position:relative;min-height:100svh;display:flex;align-items:center;padding:clamp(110px,16vh,180px) clamp(18px,5vw,72px) clamp(50px,8vh,90px);overflow:hidden;">
    <canvas data-ember="" style="position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;"></canvas>
    <div style="position:absolute;left:58%;top:42%;width:72vw;height:72vw;max-width:920px;max-height:920px;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(255,107,53,.16),rgba(230,48,40,.05) 42%,transparent 66%);z-index:0;pointer-events:none;"></div>
    <div style="position:relative;z-index:2;width:100%;max-width:1320px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:clamp(30px,5vw,60px);">
      <div style="flex:1 1 440px;min-width:280px;">
        <div data-hero-fade="" style="display:inline-flex;align-items:center;gap:12px;margin-bottom:26px;">
          <span style="width:30px;height:1px;background:#FF6B35;"></span>
          <span data-i18n="hero.eyebrow" style="font-weight:700;font-size:12px;letter-spacing:.34em;text-transform:uppercase;color:#FF6B35;">L'Instinct du Feu</span>
        </div>
        <h1 style="margin:0;font-family:'Anton';font-weight:400;text-transform:uppercase;line-height:.9;letter-spacing:.005em;font-size:clamp(3.4rem,9.2vw,8rem);color:#F5F1E6;">
          <span data-hero-line="" style="display:block;overflow:hidden;padding-bottom:.05em;"><span data-i18n="hero.t1" style="display:block;">La Meilleure</span></span>
          <span data-hero-line="" style="display:block;overflow:hidden;padding-bottom:.05em;"><span data-i18n="hero.t2" style="display:block;background:linear-gradient(100deg,#FF8A3D,#E63028);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;">Pizza du</span></span>
          <span data-hero-line="" style="display:block;overflow:hidden;padding-bottom:.05em;"><span data-i18n="hero.t3" style="display:block;">Cameroun</span></span>
        </h1>
        <p data-hero-fade="" data-i18n="hero.desc" style="margin:30px 0 0;max-width:30ch;font-size:clamp(1.05rem,1.5vw,1.3rem);line-height:1.55;color:#B7AFA4;">Pas de compromis. Pas de modération. Juste la brûlure du four et l'obsession du goût.</p>
        <div data-hero-fade="" style="display:flex;flex-wrap:wrap;align-items:center;gap:18px;margin-top:38px;">
          <a data-order-generic="" data-magnetic="" data-cursor="" href="https://wa.me/237690909076?text=Bonjour%2C%20je%20souhaite%20commander%20une%20pizza%20Rapha%C3%ABlo" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:12px;padding:18px 30px;border-radius:100px;background:#25D366;color:#06231a;font-weight:800;font-size:clamp(1rem,1.3vw,1.12rem);box-shadow:0 10px 34px rgba(37,211,102,.34);transition:box-shadow .25s;" style-hover="box-shadow:0 16px 44px rgba(37,211,102,.5);">
            <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.3 31.7l8-2.1c2.3 1.3 4.9 1.9 7.6 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5C3.9 20.5 3.2 18.3 3.2 16 3.2 8.9 9 3.2 16 3.2 23 3.2 28.8 8.9 28.8 16S23 28.8 16 28.8zm7.2-9.6c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.7.2-.2.2-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8z"></path></svg>
            <span data-i18n="hero.cta">Commander sur WhatsApp</span>
          </a>
        </div>
        <div data-hero-fade="" style="display:flex;flex-wrap:wrap;align-items:center;gap:24px;margin-top:34px;padding-top:26px;border-top:1px solid rgba(245,241,230,.1);">
          <div style="display:flex;flex-direction:column;gap:3px;">
            <span style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#7E776E;" data-i18n="hero.directlabel">Commande directe</span>
            <span style="font-weight:700;color:#E7E1D6;font-size:.96rem;">Yaoundé 690 909 076 · Douala 695 762 814</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="color:#C8A750;font-size:1.1rem;letter-spacing:2px;">★★★★★</span>
            <span style="font-weight:700;color:#E7E1D6;">4.5</span>
            <span style="color:#7E776E;">·</span>
            <span style="color:#7E776E;" data-i18n="hero.r2">900+ avis</span>
          </div>
        </div>
      </div>
      <div style="flex:1 1 320px;min-width:260px;display:flex;justify-content:center;">
        <div data-hero-pizza="" style="position:relative;width:min(78vw,460px);aspect-ratio:1/1;">
          <div data-hero-ring="" style="position:absolute;inset:-3%;border-radius:50%;background:conic-gradient(from 0deg,#E63028,#FF6B35,#FFB347,#E63028);opacity:.5;filter:blur(2px);"></div>
          <div style="position:absolute;inset:2%;border-radius:50%;background:#0D0D0D;"></div>
          <img src="/hero-pizza.jpg" alt="Pizza signature Raphaëlo" style="position:absolute;inset:3.5%;width:93%;height:93%;object-fit:cover;border-radius:50%;filter:saturate(1.08) contrast(1.06) brightness(.97);box-shadow:0 30px 80px rgba(0,0,0,.6),inset 0 0 60px rgba(0,0,0,.4);">
          <div style="position:absolute;left:-4%;bottom:8%;display:flex;flex-direction:column;gap:2px;padding:14px 20px;border-radius:16px;background:rgba(20,17,16,.82);backdrop-filter:blur(10px);border:1px solid rgba(200,167,80,.3);box-shadow:0 18px 40px rgba(0,0,0,.5);">
            <span style="font-size:10px;letter-spacing:.24em;text-transform:uppercase;color:#C8A750;">Signature</span>
            <span style="font-family:'Anton';font-size:1.5rem;color:#F5F1E6;line-height:1;">2 500 <span style="font-size:.7em;color:#7E776E;">FCFA</span></span>
          </div>
        </div>
      </div>
    </div>
    <div data-hero-fade="" style="position:absolute;left:50%;bottom:22px;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;z-index:2;">
      <span data-i18n="hero.scroll" style="font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:#7E776E;">Découvrir</span>
      <span style="width:1px;height:34px;background:linear-gradient(#FF6B35,transparent);"></span>
    </div>
  </header>

  <!-- MARQUEE -->
  <div style="position:relative;border-top:1px solid rgba(245,241,230,.08);border-bottom:1px solid rgba(245,241,230,.08);padding:22px 0;overflow:hidden;background:#0B0B0B;">
    <div style="display:flex;width:max-content;animation:rz-mq 30s linear infinite;will-change:transform;">
      <span data-i18n="marquee" style="font-family:'Anton';font-size:clamp(1.6rem,3.4vw,2.8rem);text-transform:uppercase;letter-spacing:.02em;color:#F5F1E6;white-space:nowrap;padding-right:.4em;">Pizza • Yaoundé • Douala • Depuis 2015 • La Meilleure • </span>
      <span data-i18n="marquee" aria-hidden="true" style="font-family:'Anton';font-size:clamp(1.6rem,3.4vw,2.8rem);text-transform:uppercase;letter-spacing:.02em;color:#F5F1E6;white-space:nowrap;padding-right:.4em;">Pizza • Yaoundé • Douala • Depuis 2015 • La Meilleure • </span>
    </div>
  </div>

  <!-- ABOUT -->
  <section id="rz-about" style="position:relative;padding:clamp(80px,13vh,170px) clamp(18px,5vw,72px);background:#0D0D0D;">
    <div style="max-width:1320px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:clamp(36px,6vw,90px);">
      <div data-reveal="" style="flex:1 1 380px;min-width:280px;position:relative;">
        <div style="position:relative;border-radius:18px;overflow:hidden;box-shadow:0 40px 90px rgba(0,0,0,.55);">
          <img src="/about-pizza.jpg" alt="Pizza artisanale Raphaëlo" style="width:100%;aspect-ratio:4/5;object-fit:cover;filter:saturate(1.05) contrast(1.05) brightness(.92);">
          <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(13,13,13,.55));"></div>
          <div style="position:absolute;left:18px;bottom:18px;display:inline-flex;align-items:center;gap:8px;padding:9px 15px;border-radius:100px;background:rgba(13,13,13,.7);backdrop-filter:blur(8px);border:1px solid rgba(255,107,53,.4);">
            <span style="width:7px;height:7px;border-radius:50%;background:#FF6B35;box-shadow:0 0 10px #FF6B35;"></span>
            <span data-i18n="about.tag" style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#F5F1E6;font-weight:600;">Artisan depuis 2015</span>
          </div>
        </div>
      </div>
      <div style="flex:1 1 420px;min-width:300px;">
        <div data-reveal="" style="display:inline-flex;align-items:center;gap:12px;margin-bottom:22px;">
          <span style="width:30px;height:1px;background:#FF6B35;"></span>
          <span data-i18n="about.label" style="font-weight:700;font-size:12px;letter-spacing:.32em;text-transform:uppercase;color:#FF6B35;">Notre Histoire</span>
        </div>
        <h2 data-reveal="" data-i18n-html="about.title" style="margin:0;font-family:'Anton';font-weight:400;text-transform:uppercase;line-height:.95;font-size:clamp(2.6rem,6vw,5rem);color:#F5F1E6;">L'art de la pizza,<br><span style="font-family:'Newsreader',serif;font-style:italic;font-weight:500;text-transform:none;color:#FF6B35;">fait maison</span></h2>
        <p data-reveal="" data-i18n="about.desc" style="margin:28px 0 0;max-width:48ch;font-size:clamp(1.02rem,1.3vw,1.18rem);line-height:1.65;color:#B7AFA4;">Depuis 2015, Raphaëlo Pizza s'engage à offrir la meilleure pizza au Cameroun. Des ingrédients frais, une pâte préparée chaque jour, et un savoir-faire qui a conquis des milliers de gourmands à travers le pays.</p>
        <div data-reveal="" style="display:flex;flex-wrap:wrap;gap:clamp(26px,4vw,56px);margin-top:42px;">
          <div style="display:flex;flex-direction:column;gap:4px;">
            <span data-count="5" data-suffix="+" style="font-family:'Anton';font-size:clamp(2.4rem,4vw,3.4rem);color:#E63028;line-height:1;">5+</span>
            <span data-i18n="about.s1l" style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#8B847A;">Points de vente</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;">
            <span data-count="900" data-suffix="+" style="font-family:'Anton';font-size:clamp(2.4rem,4vw,3.4rem);color:#E63028;line-height:1;">900+</span>
            <span data-i18n="about.s2l" style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#8B847A;">Avis clients</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;">
            <span data-count="16" data-suffix="K+" style="font-family:'Anton';font-size:clamp(2.4rem,4vw,3.4rem);color:#E63028;line-height:1;">16K+</span>
            <span data-i18n="about.s3l" style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#8B847A;">Pizzas servies</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROCESS — LE FEU -->
  <section id="rz-process" style="position:relative;padding:clamp(80px,13vh,160px) clamp(18px,5vw,72px);background:linear-gradient(180deg,#0D0D0D,#120b09 55%,#0D0D0D);overflow:hidden;">
    <div data-feu-glow="" style="position:absolute;left:50%;bottom:-10%;width:90vw;height:60vh;transform:translateX(-50%);background:radial-gradient(ellipse at bottom,rgba(255,107,53,.16),rgba(230,48,40,.04) 45%,transparent 70%);pointer-events:none;"></div>
    <div style="position:relative;max-width:1320px;margin:0 auto;">
      <div data-reveal="" style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:clamp(46px,7vw,80px);">
        <div>
          <div style="display:inline-flex;align-items:center;gap:12px;margin-bottom:18px;">
            <span style="width:30px;height:1px;background:#FF6B35;"></span>
            <span data-i18n="process.label" style="font-weight:700;font-size:12px;letter-spacing:.32em;text-transform:uppercase;color:#FF6B35;">03 // Le Procédé</span>
          </div>
          <h2 data-i18n="process.title" style="margin:0;font-family:'Anton';font-weight:400;text-transform:uppercase;line-height:.92;font-size:clamp(2.6rem,7vw,5.6rem);color:#F5F1E6;">Le Feu Décide</h2>
        </div>
        <p data-i18n="process.sub" style="margin:0;max-width:34ch;font-size:clamp(1rem,1.3vw,1.16rem);line-height:1.6;color:#B7AFA4;">Trois gestes, aucun raccourci. De la pâte vivante à la braise, chaque pizza est un acte de résistance contre la médiocrité.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:clamp(18px,2.4vw,32px);">
        <article data-reveal="" data-feu-step="" style="position:relative;padding:clamp(26px,3vw,40px) clamp(24px,2.6vw,34px);border-radius:18px;background:linear-gradient(160deg,rgba(28,22,20,.9),rgba(18,14,13,.9));border:1px solid rgba(245,241,230,.08);overflow:hidden;">
          <div data-feu-fill="" style="position:absolute;inset:0;background:linear-gradient(180deg,transparent,rgba(230,48,40,.14));opacity:0;transition:opacity .6s;"></div>
          <span style="position:relative;font-family:'Anton';font-size:clamp(3rem,5vw,4.4rem);line-height:.8;color:rgba(255,107,53,.28);">01</span>
          <h3 data-i18n="process.s1t" style="position:relative;margin:18px 0 0;font-family:'Anton';font-weight:400;text-transform:uppercase;font-size:clamp(1.4rem,2.2vw,1.9rem);color:#F5F1E6;letter-spacing:.01em;">Fermentation 48h</h3>
          <p data-i18n="process.s1d" style="position:relative;margin:12px 0 0;font-size:.98rem;line-height:1.6;color:#9E978C;">La pâte repose deux jours. Le temps fait le goût : légère, digeste, vivante.</p>
        </article>
        <article data-reveal="" data-feu-step="" style="position:relative;padding:clamp(26px,3vw,40px) clamp(24px,2.6vw,34px);border-radius:18px;background:linear-gradient(160deg,rgba(36,24,18,.92),rgba(20,14,12,.92));border:1px solid rgba(255,107,53,.16);overflow:hidden;">
          <div data-feu-fill="" style="position:absolute;inset:0;background:linear-gradient(180deg,transparent,rgba(255,107,53,.2));opacity:0;transition:opacity .6s;"></div>
          <span style="position:relative;font-family:'Anton';font-size:clamp(3rem,5vw,4.4rem);line-height:.8;color:rgba(255,107,53,.42);">02</span>
          <h3 data-i18n="process.s2t" style="position:relative;margin:18px 0 0;font-family:'Anton';font-weight:400;text-transform:uppercase;font-size:clamp(1.4rem,2.2vw,1.9rem);color:#F5F1E6;letter-spacing:.01em;">Cuisson Haute Température</h3>
          <p data-i18n="process.s2d" style="position:relative;margin:12px 0 0;font-size:.98rem;line-height:1.6;color:#A89F92;">La braise monte. Quelques minutes au feu vif, et la croûte se signe de bulles dorées.</p>
        </article>
        <article data-reveal="" data-feu-step="" style="position:relative;padding:clamp(26px,3vw,40px) clamp(24px,2.6vw,34px);border-radius:18px;background:linear-gradient(160deg,rgba(48,26,18,.94),rgba(24,14,11,.94));border:1px solid rgba(230,48,40,.26);overflow:hidden;">
          <div data-feu-fill="" style="position:absolute;inset:0;background:linear-gradient(180deg,transparent,rgba(230,48,40,.26));opacity:0;transition:opacity .6s;"></div>
          <span style="position:relative;font-family:'Anton';font-size:clamp(3rem,5vw,4.4rem);line-height:.8;color:rgba(230,48,40,.6);">03</span>
          <h3 data-i18n="process.s3t" style="position:relative;margin:18px 0 0;font-family:'Anton';font-weight:400;text-transform:uppercase;font-size:clamp(1.4rem,2.2vw,1.9rem);color:#F5F1E6;letter-spacing:.01em;">Service Immédiat</h3>
          <p data-i18n="process.s3d" style="position:relative;margin:12px 0 0;font-size:.98rem;line-height:1.6;color:#B7AFA4;">Sortie du four, sur WhatsApp, jusqu'à votre table. La pizza n'attend pas — vous non plus.</p>
        </article>
      </div>
      <div data-reveal="" style="margin-top:clamp(36px,5vw,56px);display:flex;align-items:center;gap:18px;">
        <span style="flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(255,107,53,.4),transparent);"></span>
        <span data-feu-gauge="" style="font-family:'Anton';font-size:clamp(1.6rem,3vw,2.4rem);color:#FF6B35;white-space:nowrap;">340°C</span>
        <span style="flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(255,107,53,.4),transparent);"></span>
      </div>
    </div>
  </section>

  <!-- MENU -->
  <section id="rz-menu" style="position:relative;padding:clamp(80px,13vh,160px) 0 clamp(70px,10vh,120px);background:#0B0B0B;">
    <div style="max-width:1320px;margin:0 auto;padding:0 clamp(18px,5vw,72px);">
      <div data-reveal="" style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:22px;">
        <div>
          <div style="display:inline-flex;align-items:center;gap:12px;margin-bottom:18px;">
            <span style="width:30px;height:1px;background:#FF6B35;"></span>
            <span data-i18n="menu.label" style="font-weight:700;font-size:12px;letter-spacing:.32em;text-transform:uppercase;color:#FF6B35;">02 // La Sélection</span>
          </div>
          <h2 data-i18n="menu.title" style="margin:0;font-family:'Anton';font-weight:400;text-transform:uppercase;line-height:.92;font-size:clamp(2.6rem,7vw,5.6rem);color:#F5F1E6;">Nos Pizzas</h2>
          <p data-i18n="menu.sub" style="margin:16px 0 0;font-size:clamp(.95rem,1.2vw,1.08rem);color:#9E978C;letter-spacing:.02em;">Fermentation 48h • Cuisson Haute Température • Prix en FCFA</p>
        </div>
      </div>
      <div data-menu-filters="" style="display:flex;flex-wrap:wrap;gap:10px;margin-top:clamp(30px,4vw,44px);">
        <button data-filter="all" aria-pressed="true" style="padding:10px 20px;border-radius:100px;border:1px solid #E63028;background:#E63028;color:#fff;font-weight:700;font-size:13px;letter-spacing:.08em;text-transform:uppercase;transition:all .25s;"><span data-i18n="menu.f.all">Tout</span></button>
        <button data-filter="CLASSIC" aria-pressed="false" style="padding:10px 20px;border-radius:100px;border:1px solid rgba(245,241,230,.2);background:transparent;color:#C9C2B8;font-weight:700;font-size:13px;letter-spacing:.08em;text-transform:uppercase;transition:all .25s;" style-hover="border-color:#F5F1E6;color:#F5F1E6;">Classic</button>
        <button data-filter="PREMIUM" aria-pressed="false" style="padding:10px 20px;border-radius:100px;border:1px solid rgba(245,241,230,.2);background:transparent;color:#C9C2B8;font-weight:700;font-size:13px;letter-spacing:.08em;text-transform:uppercase;transition:all .25s;" style-hover="border-color:#F5F1E6;color:#F5F1E6;">Premium</button>
        <button data-filter="SIGNATURE" aria-pressed="false" style="padding:10px 20px;border-radius:100px;border:1px solid rgba(245,241,230,.2);background:transparent;color:#C9C2B8;font-weight:700;font-size:13px;letter-spacing:.08em;text-transform:uppercase;transition:all .25s;" style-hover="border-color:#F5F1E6;color:#F5F1E6;">Signature</button>
      </div>
    </div>
    <div data-menu-grid="" style="margin-top:clamp(34px,4vw,48px);display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:clamp(16px,2vw,26px);max-width:1320px;margin-left:auto;margin-right:auto;padding:0 clamp(18px,5vw,72px);"></div>
  </section>

  <!-- SIZES & PRICES -->
  <section style="position:relative;padding:clamp(60px,8vh,100px) clamp(18px,5vw,72px);background:#0D0D0D;border-top:1px solid rgba(245,241,230,.06);">
    <div style="max-width:1320px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:clamp(30px,5vw,70px);">
      <div data-reveal="" style="flex:1 1 320px;min-width:280px;">
        <div style="display:inline-flex;align-items:center;gap:12px;margin-bottom:16px;">
          <span style="width:30px;height:1px;background:#C8A750;"></span>
          <span data-i18n="sizes.label" style="font-weight:700;font-size:12px;letter-spacing:.32em;text-transform:uppercase;color:#C8A750;">Tailles &amp; Prix</span>
        </div>
        <h2 data-i18n="sizes.title" style="margin:0;font-family:'Anton';font-weight:400;text-transform:uppercase;line-height:.95;font-size:clamp(2.2rem,5vw,3.6rem);color:#F5F1E6;">Une taille pour chaque faim</h2>
        <p data-i18n="sizes.desc" style="margin:18px 0 0;max-width:42ch;font-size:1.04rem;line-height:1.6;color:#B7AFA4;">Du solo gourmand à la grande tablée. Toutes nos pizzas existent en quatre formats — prix en FCFA, du plus accessible au plus généreux.</p>
      </div>
      <div data-reveal="" style="flex:1 1 380px;min-width:280px;display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:22px 10px;border-radius:14px;background:rgba(255,255,255,.03);border:1px solid rgba(245,241,230,.08);">
          <span style="width:24px;height:24px;border-radius:50%;background:rgba(255,107,53,.18);border:1px solid rgba(255,107,53,.4);"></span>
          <span style="font-family:'Anton';font-size:1.3rem;color:#F5F1E6;">S</span>
          <span style="font-size:.74rem;color:#8B847A;letter-spacing:.04em;text-align:center;">dès 2 500</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:22px 10px;border-radius:14px;background:rgba(255,255,255,.03);border:1px solid rgba(245,241,230,.08);">
          <span style="width:32px;height:32px;border-radius:50%;background:rgba(255,107,53,.22);border:1px solid rgba(255,107,53,.5);"></span>
          <span style="font-family:'Anton';font-size:1.3rem;color:#F5F1E6;">M</span>
          <span style="font-size:.74rem;color:#8B847A;letter-spacing:.04em;text-align:center;">dès 4 500</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:22px 10px;border-radius:14px;background:rgba(255,255,255,.03);border:1px solid rgba(245,241,230,.08);">
          <span style="width:40px;height:40px;border-radius:50%;background:rgba(230,48,40,.24);border:1px solid rgba(230,48,40,.55);"></span>
          <span style="font-family:'Anton';font-size:1.3rem;color:#F5F1E6;">L</span>
          <span style="font-size:.74rem;color:#8B847A;letter-spacing:.04em;text-align:center;">dès 6 500</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:22px 10px;border-radius:14px;background:rgba(230,48,40,.07);border:1px solid rgba(230,48,40,.3);">
          <span style="width:48px;height:48px;border-radius:50%;background:rgba(230,48,40,.32);border:1px solid rgba(230,48,40,.7);box-shadow:0 0 18px rgba(230,48,40,.35);"></span>
          <span style="font-family:'Anton';font-size:1.3rem;color:#F5F1E6;">XL</span>
          <span style="font-size:.74rem;color:#C8A750;letter-spacing:.04em;text-align:center;">dès 10 500</span>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURE BAND -->
  <section style="position:relative;padding:clamp(50px,7vh,90px) clamp(18px,5vw,72px);background:#E63028;overflow:hidden;">
    <div style="position:absolute;inset:0;opacity:.12;background:radial-gradient(circle at 20% 30%,#fff,transparent 40%),radial-gradient(circle at 80% 70%,#000,transparent 45%);pointer-events:none;"></div>
    <div style="position:relative;max-width:1320px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:clamp(24px,4vw,50px);text-align:center;">
      <div data-reveal="" style="display:flex;flex-direction:column;gap:6px;">
        <span data-count="5" data-suffix="+" style="font-family:'Anton';font-size:clamp(3rem,6vw,5rem);line-height:.9;color:#fff;">5+</span>
        <span data-i18n="fb.1" style="font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.78);font-weight:600;">Points de vente</span>
      </div>
      <div data-reveal="" style="display:flex;flex-direction:column;gap:6px;">
        <span data-count="900" data-suffix="+" style="font-family:'Anton';font-size:clamp(3rem,6vw,5rem);line-height:.9;color:#fff;">900+</span>
        <span data-i18n="fb.2" style="font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.78);font-weight:600;">Avis clients</span>
      </div>
      <div data-reveal="" style="display:flex;flex-direction:column;gap:6px;">
        <span data-count="7" data-suffix="/7" style="font-family:'Anton';font-size:clamp(3rem,6vw,5rem);line-height:.9;color:#fff;">7/7</span>
        <span data-i18n="fb.3" style="font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.78);font-weight:600;">Jours ouvert</span>
      </div>
    </div>
  </section>

  <!-- LOCATIONS -->
  <section id="rz-locations" style="position:relative;padding:clamp(80px,13vh,160px) clamp(18px,5vw,72px);background:#0D0D0D;">
    <div style="max-width:1320px;margin:0 auto;">
      <div data-reveal="" style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:22px;margin-bottom:clamp(40px,6vw,64px);">
        <div>
          <div style="display:inline-flex;align-items:center;gap:12px;margin-bottom:18px;">
            <span style="width:30px;height:1px;background:#FF6B35;"></span>
            <span data-i18n="loc.label" style="font-weight:700;font-size:12px;letter-spacing:.32em;text-transform:uppercase;color:#FF6B35;">Où nous trouver</span>
          </div>
          <h2 data-i18n="loc.title" style="margin:0;font-family:'Anton';font-weight:400;text-transform:uppercase;line-height:.92;font-size:clamp(2.6rem,7vw,5.6rem);color:#F5F1E6;">Nos Points de Vente</h2>
        </div>
        <div style="display:inline-flex;align-items:center;gap:10px;padding:11px 18px;border-radius:100px;border:1px solid rgba(200,167,80,.35);background:rgba(200,167,80,.06);">
          <span style="width:7px;height:7px;border-radius:50%;background:#C8A750;box-shadow:0 0 10px #C8A750;"></span>
          <span data-i18n="loc.hours" style="font-weight:700;font-size:13px;letter-spacing:.08em;color:#E7E1D6;">7j/7 • 11h — 21h30</span>
        </div>
      </div>
      <div data-loc-grid="" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:clamp(16px,2vw,24px);"></div>
    </div>
  </section>

  <!-- REVIEWS -->
  <section style="position:relative;padding:clamp(70px,11vh,140px) clamp(18px,5vw,72px);background:linear-gradient(180deg,#0B0B0B,#0D0D0D);">
    <div style="max-width:1320px;margin:0 auto;">
      <div data-reveal="" style="text-align:center;margin-bottom:clamp(40px,6vw,64px);">
        <div style="display:inline-flex;align-items:center;gap:12px;margin-bottom:16px;">
          <span style="width:30px;height:1px;background:#C8A750;"></span>
          <span data-i18n="rev.label" style="font-weight:700;font-size:12px;letter-spacing:.32em;text-transform:uppercase;color:#C8A750;">Ils en redemandent</span>
          <span style="width:30px;height:1px;background:#C8A750;"></span>
        </div>
        <h2 data-i18n="rev.title" style="margin:0;font-family:'Anton';font-weight:400;text-transform:uppercase;line-height:.95;font-size:clamp(2.2rem,5.5vw,4rem);color:#F5F1E6;">4.5 ★ sur 900+ avis</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(16px,2vw,24px);">
        <figure data-reveal="" style="margin:0;padding:clamp(26px,3vw,38px);border-radius:18px;background:rgba(255,255,255,.03);border:1px solid rgba(245,241,230,.08);">
          <span style="color:#C8A750;font-size:1.1rem;letter-spacing:2px;">★★★★★</span>
          <blockquote data-i18n="rev.q1" style="margin:16px 0 0;font-family:'Newsreader',serif;font-style:italic;font-size:clamp(1.1rem,1.6vw,1.32rem);line-height:1.5;color:#E7E1D6;">« La meilleure pâte de Yaoundé, sans débat. On sent le feu, on sent le travail. »</blockquote>
          <figcaption style="margin-top:18px;display:flex;align-items:center;gap:10px;"><span style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#E63028,#FF6B35);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.9rem;color:#fff;">N</span><span><span style="display:block;font-weight:700;color:#F5F1E6;font-size:.92rem;">Nadège M.</span><span style="display:block;font-size:.78rem;color:#8B847A;">EKIE, Yaoundé</span></span></figcaption>
        </figure>
        <figure data-reveal="" style="margin:0;padding:clamp(26px,3vw,38px);border-radius:18px;background:rgba(255,255,255,.03);border:1px solid rgba(245,241,230,.08);">
          <span style="color:#C8A750;font-size:1.1rem;letter-spacing:2px;">★★★★★</span>
          <blockquote data-i18n="rev.q2" style="margin:16px 0 0;font-family:'Newsreader',serif;font-style:italic;font-size:clamp(1.1rem,1.6vw,1.32rem);line-height:1.5;color:#E7E1D6;">« Commande sur WhatsApp, pizza chaude en 25 min. La All American est une tuerie. »</blockquote>
          <figcaption style="margin-top:18px;display:flex;align-items:center;gap:10px;"><span style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#E63028,#FF6B35);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.9rem;color:#fff;">B</span><span><span style="display:block;font-weight:700;color:#F5F1E6;font-size:.92rem;">Brice T.</span><span style="display:block;font-size:.78rem;color:#8B847A;">Douala</span></span></figcaption>
        </figure>
        <figure data-reveal="" style="margin:0;padding:clamp(26px,3vw,38px);border-radius:18px;background:rgba(255,255,255,.03);border:1px solid rgba(245,241,230,.08);">
          <span style="color:#C8A750;font-size:1.1rem;letter-spacing:2px;">★★★★★</span>
          <blockquote data-i18n="rev.q3" style="margin:16px 0 0;font-family:'Newsreader',serif;font-style:italic;font-size:clamp(1.1rem,1.6vw,1.32rem);line-height:1.5;color:#E7E1D6;">« Artisanal, généreux, jamais industriel. Depuis 2015 je ne commande qu'ici. »</blockquote>
          <figcaption style="margin-top:18px;display:flex;align-items:center;gap:10px;"><span style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#E63028,#FF6B35);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.9rem;color:#fff;">S</span><span><span style="display:block;font-weight:700;color:#F5F1E6;font-size:.92rem;">Sandrine K.</span><span style="display:block;font-size:.78rem;color:#8B847A;">Awaé, Yaoundé</span></span></figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section style="position:relative;padding:clamp(90px,16vh,200px) clamp(18px,5vw,72px);background:#0B0B0B;overflow:hidden;text-align:center;">
    <canvas data-ember="" style="position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;"></canvas>
    <div style="position:absolute;left:50%;top:50%;width:80vw;height:80vw;max-width:900px;max-height:900px;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(230,48,40,.16),rgba(255,107,53,.05) 42%,transparent 66%);pointer-events:none;"></div>
    <div style="position:relative;z-index:2;max-width:900px;margin:0 auto;">
      <h2 data-reveal="" data-i18n="cta.title" style="margin:0;font-family:'Anton';font-weight:400;text-transform:uppercase;line-height:.9;font-size:clamp(3rem,11vw,8rem);color:#F5F1E6;">Envie d'une pizza ?</h2>
      <p data-reveal="" data-i18n="cta.desc" style="margin:24px auto 0;max-width:46ch;font-size:clamp(1.05rem,1.5vw,1.3rem);line-height:1.6;color:#B7AFA4;">Commandez directement sur WhatsApp et recevez votre pizza fraîche en un rien de temps.</p>
      <div data-reveal="" style="margin-top:42px;">
        <a data-order-generic="" data-magnetic="" data-cursor="" href="https://wa.me/237690909076?text=Bonjour%2C%20je%20souhaite%20commander%20une%20pizza%20Rapha%C3%ABlo" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:14px;padding:22px 40px;border-radius:100px;background:#25D366;color:#06231a;font-weight:800;font-size:clamp(1.05rem,1.5vw,1.3rem);box-shadow:0 14px 44px rgba(37,211,102,.4);transition:box-shadow .25s;" style-hover="box-shadow:0 20px 60px rgba(37,211,102,.6);">
          <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.3 31.7l8-2.1c2.3 1.3 4.9 1.9 7.6 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5C3.9 20.5 3.2 18.3 3.2 16 3.2 8.9 9 3.2 16 3.2 23 3.2 28.8 8.9 28.8 16S23 28.8 16 28.8zm7.2-9.6c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.7.2-.2.2-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8z"></path></svg>
          <span data-i18n="cta.btn">Commander sur WhatsApp</span>
        </a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer style="position:relative;background:#070707;border-top:1px solid rgba(245,241,230,.08);overflow:hidden;">
    <div style="border-bottom:1px solid rgba(245,241,230,.06);padding:18px 0;overflow:hidden;display:flex;flex-direction:column;gap:6px;">
      <div style="display:flex;width:max-content;animation:rz-mq 24s linear infinite;"><span style="font-family:'Anton';font-size:clamp(1.1rem,2vw,1.6rem);text-transform:uppercase;color:rgba(245,241,230,.14);white-space:nowrap;padding-right:.5em;">Sans Compromis · Artisan Brut · Feu de Bois · Sans Compromis · Artisan Brut · Feu de Bois · </span><span aria-hidden="true" style="font-family:'Anton';font-size:clamp(1.1rem,2vw,1.6rem);text-transform:uppercase;color:rgba(245,241,230,.14);white-space:nowrap;padding-right:.5em;">Sans Compromis · Artisan Brut · Feu de Bois · Sans Compromis · Artisan Brut · Feu de Bois · </span></div>
      <div style="display:flex;width:max-content;animation:rz-mqr 28s linear infinite;"><span style="font-family:'Anton';font-size:clamp(1.1rem,2vw,1.6rem);text-transform:uppercase;color:rgba(230,48,40,.22);white-space:nowrap;padding-right:.5em;">Pâte Vivante · Zéro Concession · Tradition Radicale · Pâte Vivante · Zéro Concession · Tradition Radicale · </span><span aria-hidden="true" style="font-family:'Anton';font-size:clamp(1.1rem,2vw,1.6rem);text-transform:uppercase;color:rgba(230,48,40,.22);white-space:nowrap;padding-right:.5em;">Pâte Vivante · Zéro Concession · Tradition Radicale · Pâte Vivante · Zéro Concession · Tradition Radicale · </span></div>
    </div>
    <div style="position:relative;max-width:1320px;margin:0 auto;padding:clamp(56px,8vw,90px) clamp(18px,5vw,72px) clamp(30px,4vw,46px);">
      <div data-feu-glow="" style="position:absolute;left:50%;top:0;width:70vw;height:50%;transform:translateX(-50%);background:radial-gradient(ellipse at top,rgba(230,48,40,.1),transparent 65%);pointer-events:none;"></div>
      <div style="position:relative;display:flex;flex-wrap:wrap;gap:clamp(36px,6vw,80px);justify-content:space-between;">
        <div style="flex:1 1 420px;min-width:280px;">
          <img src="/logo.png" alt="Raphaëlo Pizza" style="height:54px;width:auto;margin-bottom:24px;filter:drop-shadow(0 2px 12px rgba(230,48,40,.4))">
          <p data-manifesto="" data-i18n="footer.manifesto" style="margin:0;max-width:36ch;font-family:'Newsreader',serif;font-style:italic;font-size:clamp(1.2rem,2vw,1.7rem);line-height:1.5;color:#E7E1D6;">La pâte fermente. Le feu décide. Aucun raccourci. Aucune concession. Chaque pizza est un acte de résistance contre la médiocrité.</p>
          <p data-i18n="footer.tagline" style="margin:22px 0 0;font-weight:700;font-size:12px;letter-spacing:.28em;text-transform:uppercase;color:#FF6B35;">Pizza artisanale radicale</p>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:clamp(34px,5vw,64px);">
          <div style="min-width:160px;">
            <h3 data-i18n="footer.contact" style="margin:0 0 16px;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#8B847A;font-weight:700;">Contact</h3>
            <div style="display:flex;flex-direction:column;gap:10px;font-size:.95rem;color:#C9C2B8;">
              <a href="tel:+237690909076" data-cursor="" style="transition:color .2s;" style-hover="color:#fff;">Yaoundé · 690 909 076</a>
              <a href="tel:+237695762814" data-cursor="" style="transition:color .2s;" style-hover="color:#fff;">Douala · 695 762 814</a>
              <a href="mailto:raphaelopizza237@gmail.com" data-cursor="" style="transition:color .2s;" style-hover="color:#fff;">raphaelopizza237@gmail.com</a>
            </div>
          </div>
          <div style="min-width:150px;">
            <h3 data-i18n="footer.follow" style="margin:0 0 16px;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#8B847A;font-weight:700;">Suivez-nous</h3>
            <div style="display:flex;flex-direction:column;gap:10px;font-size:.95rem;color:#C9C2B8;">
              <a href="https://www.instagram.com/raphaelopizza/" target="_blank" rel="noopener" data-cursor="" style="transition:color .2s;" style-hover="color:#fff;">Instagram</a>
              <a href="https://www.facebook.com/RaphaeloPizza/" target="_blank" rel="noopener" data-cursor="" style="transition:color .2s;" style-hover="color:#fff;">Facebook</a>
              <span data-i18n="footer.hours" style="color:#8B847A;">7j/7 • 11h — 21h30</span>
            </div>
          </div>
        </div>
      </div>
      <div style="position:relative;margin-top:clamp(40px,6vw,64px);padding-top:24px;border-top:1px solid rgba(245,241,230,.08);display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;align-items:center;">
        <span style="font-size:.84rem;color:#6E675F;">© 2025 Raphaëlo Pizza. <span data-i18n="footer.rights">Tous droits réservés.</span></span>
        <a data-order-generic="" data-cursor="" href="https://wa.me/237690909076?text=Bonjour%2C%20je%20souhaite%20commander%20une%20pizza%20Rapha%C3%ABlo" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:9px;padding:10px 18px;border-radius:100px;border:1px solid rgba(37,211,102,.4);color:#25D366;font-weight:700;font-size:13px;transition:background .2s;" style-hover="background:rgba(37,211,102,.1);"><span data-i18n="nav.order">Commander</span></a>
      </div>
    </div>
  </footer>

  <!-- (sections injected here) -->
  <div data-sections-anchor=""></div>

  </main>

  <!-- FLOATING WHATSAPP -->
  <a id="rz-fab" class="" data-order-generic="" data-cursor="" href="https://wa.me/237690909076?text=Bonjour%2C%20je%20souhaite%20commander%20une%20pizza%20Rapha%C3%ABlo" target="_blank" rel="noopener" aria-label="Commander sur WhatsApp" style="position:fixed;right:clamp(16px,3vw,30px);bottom:clamp(16px,3vw,30px);z-index:1100;width:62px;height:62px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 34px rgba(37,211,102,.45);overflow:hidden;">
    <span style="position:absolute;inset:0;border-radius:50%;background:#25D366;animation:rz-pulse 2.6s ease-out infinite;"></span>
    <svg viewBox="0 0 32 32" width="30" height="30" fill="#06231a" aria-hidden="true" style="position:relative;flex:0 0 auto;"><path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.3 31.7l8-2.1c2.3 1.3 4.9 1.9 7.6 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5C3.9 20.5 3.2 18.3 3.2 16 3.2 8.9 9 3.2 16 3.2 23 3.2 28.8 8.9 28.8 16S23 28.8 16 28.8zm7.2-9.6c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.7.2-.2.2-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8z"></path></svg>
  </a>

</div>`;
