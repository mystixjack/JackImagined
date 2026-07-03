/* ==========================================================================
   JACK IMAGINED — stylesheet
   Design tokens: sunrise gradient (navy night -> sky blue -> gold -> orange)
   Display: Anton | Body: Work Sans | Utility: JetBrains Mono
   ========================================================================== */

:root{
  /* colors */
  --navy-950:#0a1428;
  --navy-800:#122447;
  --navy-700:#1a3260;
  --blue-500:#3b7dd8;
  --blue-300:#8fbdf2;
  --gold-400:#ffb347;
  --orange-500:#ff6b35;
  --orange-600:#e8501c;
  --cream:#fbf6ee;
  --cream-200:#f2ead9;
  --ink:#14171f;
  --ink-60:rgba(20,23,31,.6);
  --white:#ffffff;

  --sunrise-gradient:linear-gradient(180deg,
    var(--navy-950) 0%,
    var(--navy-700) 38%,
    var(--blue-500) 58%,
    var(--gold-400) 80%,
    var(--orange-500) 100%);

  --sunrise-gradient-h:linear-gradient(90deg,
    var(--navy-800) 0%,
    var(--blue-500) 40%,
    var(--gold-400) 72%,
    var(--orange-500) 100%);

  /* type */
  --font-display:'Anton', Impact, sans-serif;
  --font-body:'Work Sans', -apple-system, sans-serif;
  --font-mono:'JetBrains Mono', monospace;

  /* layout */
  --max-w:1240px;
  --radius:2px;
  --edge:clamp(1.25rem, 4vw, 3.5rem);
}

*,*::before,*::after{box-sizing:border-box;}
html{scroll-behavior:smooth;}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto;}
  *,*::before,*::after{animation-duration:.001ms !important;animation-iteration-count:1 !important;transition-duration:.001ms !important;}
}

body{
  margin:0;
  background:var(--cream);
  color:var(--ink);
  font-family:var(--font-body);
  font-size:16px;
  line-height:1.55;
  -webkit-font-smoothing:antialiased;
}

img{max-width:100%;display:block;}
a{color:inherit;text-decoration:none;}
ul{list-style:none;margin:0;padding:0;}
button{font-family:inherit;cursor:pointer;}
input,textarea,select{font-family:inherit;font-size:1rem;}

h1,h2,h3,h4{
  font-family:var(--font-display);
  font-weight:400;
  letter-spacing:.01em;
  line-height:1.02;
  margin:0 0 .5em;
  text-transform:uppercase;
}
h1{font-size:clamp(2.6rem,7vw,5.6rem);}
h2{font-size:clamp(1.9rem,4.4vw,3.1rem);}
h3{font-size:clamp(1.2rem,2.4vw,1.5rem);}
p{margin:0 0 1em;}

.eyebrow{
  font-family:var(--font-mono);
  font-size:.72rem;
  letter-spacing:.18em;
  text-transform:uppercase;
  color:var(--orange-600);
  display:inline-flex;
  align-items:center;
  gap:.5em;
  margin-bottom:1em;
}
.eyebrow::before{
  content:"";
  width:1.4em;height:1px;
  background:var(--orange-600);
  display:inline-block;
}

.wrap{max-width:var(--max-w);margin:0 auto;padding:0 var(--edge);}

:focus-visible{outline:2px solid var(--orange-500);outline-offset:3px;}

/* ---------- buttons ---------- */
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:.5em;
  font-family:var(--font-mono);
  font-size:.82rem;
  letter-spacing:.06em;
  text-transform:uppercase;
  padding:.95em 1.7em;
  border:1px solid var(--ink);
  border-radius:var(--radius);
  background:transparent;
  color:var(--ink);
  transition:transform .15s ease, background .2s ease, color .2s ease, border-color .2s ease;
  white-space:nowrap;
}
.btn:hover{transform:translateY(-2px);}
.btn-primary{
  background:var(--orange-500);
  border-color:var(--orange-500);
  color:var(--white);
}
.btn-primary:hover{background:var(--orange-600);border-color:var(--orange-600);}
.btn-on-dark{border-color:var(--cream);color:var(--cream);}
.btn-on-dark:hover{background:var(--cream);color:var(--navy-950);}
.btn-block{width:100%;}
.btn-ghost{border-color:transparent;padding-left:0;padding-right:0;}
.btn-ghost::after{content:"→";margin-left:.35em;transition:transform .2s ease;}
.btn-ghost:hover::after{transform:translateX(4px);}
.btn:disabled{opacity:.45;cursor:not-allowed;transform:none;}

/* ---------- header / nav ---------- */
.site-header{
  position:sticky;top:0;z-index:100;
  background:rgba(251,246,238,.92);
  backdrop-filter:blur(8px);
  border-bottom:1px solid rgba(20,23,31,.08);
}
.nav{
  max-width:var(--max-w);margin:0 auto;padding:0 var(--edge);
  display:flex;align-items:center;justify-content:space-between;
  height:78px;
}
.logo{
  font-family:var(--font-display);
  font-size:1.35rem;
  letter-spacing:.02em;
  text-transform:uppercase;
  display:flex;align-items:center;gap:.5em;
}
.logo .dot{
  width:.6em;height:.6em;border-radius:50%;
  background:var(--sunrise-gradient-h);
  display:inline-block;
}
.nav-links{display:flex;align-items:center;gap:2.1rem;}
.nav-links a{
  font-family:var(--font-mono);
  font-size:.78rem;
  letter-spacing:.08em;
  text-transform:uppercase;
  position:relative;
  padding:.3em 0;
}
.nav-links a::after{
  content:"";position:absolute;left:0;right:0;bottom:0;height:2px;
  background:var(--orange-500);transform:scaleX(0);transform-origin:left;
  transition:transform .2s ease;
}
.nav-links a:hover::after,.nav-links a[aria-current="page"]::after{transform:scaleX(1);}
.nav-links a[aria-current="page"]{color:var(--orange-600);}
.nav-actions{display:flex;align-items:center;gap:1rem;}
.cart-btn{
  position:relative;
  font-family:var(--font-mono);font-size:.78rem;letter-spacing:.06em;text-transform:uppercase;
  display:flex;align-items:center;gap:.5em;
  border:1px solid var(--ink);border-radius:var(--radius);padding:.55em 1em;
  background:transparent;
}
.cart-count{
  background:var(--orange-500);color:#fff;border-radius:50%;
  width:1.35em;height:1.35em;display:inline-flex;align-items:center;justify-content:center;
  font-size:.72em;
}
.nav-toggle{display:none;background:none;border:none;padding:.4em;}
.nav-toggle span{display:block;width:22px;height:2px;background:var(--ink);margin:5px 0;transition:.2s;}

/* ---------- horizon divider (signature element) ---------- */
.horizon{
  position:relative;
  height:64px;
  background:var(--sunrise-gradient-h);
  overflow:visible;
}
.horizon::after{
  content:"";
  position:absolute;left:50%;top:50%;
  width:34px;height:34px;border-radius:50%;
  background:var(--cream);
  border:3px solid var(--orange-600);
  transform:translate(-50%,-50%);
  box-shadow:0 0 0 6px rgba(255,255,255,.35);
}
.horizon.flip{transform:scaleY(-1);}

/* ---------- hero ---------- */
.hero{
  background:var(--sunrise-gradient);
  color:var(--cream);
  position:relative;
  overflow:hidden;
  padding:6.5rem var(--edge) 5rem;
}
.hero::before{
  content:"";
  position:absolute;inset:0;
  background-image:radial-gradient(circle at 82% 78%, rgba(255,255,255,.16), transparent 42%);
  pointer-events:none;
}
.hero-inner{max-width:var(--max-w);margin:0 auto;position:relative;z-index:1;}
.hero .eyebrow{color:var(--gold-400);}
.hero .eyebrow::before{background:var(--gold-400);}
.hero h1{max-width:14ch;}
.hero-sub{max-width:44ch;font-size:1.1rem;color:rgba(251,246,238,.85);}
.hero-cta{display:flex;gap:1rem;flex-wrap:wrap;margin-top:2rem;}
.hero-meta{
  display:flex;gap:2.5rem;margin-top:4rem;flex-wrap:wrap;
  font-family:var(--font-mono);font-size:.78rem;letter-spacing:.06em;
  color:rgba(251,246,238,.7);
  border-top:1px solid rgba(251,246,238,.2);
  padding-top:1.5rem;
}
.hero-meta strong{display:block;color:var(--cream);font-family:var(--font-body);font-size:1.05rem;font-weight:600;}

/* ---------- sections ---------- */
section{padding:5.5rem 0;}
.section-head{
  display:flex;justify-content:space-between;align-items:flex-end;gap:2rem;
  margin-bottom:2.75rem;flex-wrap:wrap;
}
.section-head p{max-width:46ch;color:var(--ink-60);margin:0;}
.bg-dark{background:var(--navy-950);color:var(--cream);}
.bg-dark .eyebrow{color:var(--gold-400);}
.bg-dark .eyebrow::before{background:var(--gold-400);}
.bg-dark .section-head p{color:rgba(251,246,238,.65);}
.bg-cream-200{background:var(--cream-200);}

/* ---------- product grid ---------- */
.grid{display:grid;gap:1.75rem;}
.grid-3{grid-template-columns:repeat(3,1fr);}
.grid-4{grid-template-columns:repeat(4,1fr);}
.grid-2{grid-template-columns:repeat(2,1fr);}

.card{
  background:var(--white);
  border:1px solid rgba(20,23,31,.08);
  border-radius:var(--radius);
  overflow:hidden;
  display:flex;flex-direction:column;
  transition:box-shadow .2s ease, transform .2s ease;
}
.card:hover{box-shadow:0 18px 36px -22px rgba(10,20,40,.35);transform:translateY(-3px);}
.card-media{
  aspect-ratio:4/5;
  background:var(--sunrise-gradient);
  position:relative;
  display:flex;align-items:center;justify-content:center;
  color:rgba(251,246,238,.55);
  font-family:var(--font-mono);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;
}
.card-media img{width:100%;height:100%;object-fit:cover;}
.card-tag{
  position:absolute;top:.85rem;left:.85rem;
  background:var(--navy-950);color:var(--cream);
  font-family:var(--font-mono);font-size:.65rem;letter-spacing:.08em;text-transform:uppercase;
  padding:.35em .7em;border-radius:99px;
}
.card-body{padding:1.25rem 1.35rem 1.5rem;display:flex;flex-direction:column;gap:.6rem;flex:1;}
.card-body h3{margin:0;font-size:1.02rem;}
.card-desc{color:var(--ink-60);font-size:.9rem;margin:0;}
.card-foot{display:flex;align-items:center;justify-content:space-between;margin-top:auto;padding-top:.5rem;}
.price{font-family:var(--font-mono);font-size:1rem;}
.card-foot .btn{padding:.7em 1.1em;font-size:.72rem;}

.filter-row{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:2.5rem;}
.filter-row button{
  font-family:var(--font-mono);font-size:.74rem;letter-spacing:.05em;text-transform:uppercase;
  padding:.55em 1.1em;border:1px solid rgba(20,23,31,.2);border-radius:99px;background:transparent;color:var(--ink);
}
.filter-row button.active{background:var(--ink);color:var(--cream);border-color:var(--ink);}

/* ---------- feature split ---------- */
.split{display:grid;grid-template-columns:1fr 1fr;gap:3.5rem;align-items:center;}
.split-media{
  aspect-ratio:1/1;background:var(--sunrise-gradient);border-radius:var(--radius);
  position:relative;overflow:hidden;
}
.split-media img{width:100%;height:100%;object-fit:cover;}

/* ---------- stats strip ---------- */
.stats{display:flex;gap:3rem;flex-wrap:wrap;border-top:1px solid rgba(251,246,238,.15);padding-top:2rem;margin-top:2rem;}
.stat b{display:block;font-family:var(--font-display);font-size:2.2rem;color:var(--gold-400);}
.stat span{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;opacity:.7;}

/* ---------- book section ---------- */
.book-hero{
  display:grid;grid-template-columns:.85fr 1.15fr;gap:4rem;align-items:center;
}
.book-cover{
  aspect-ratio:3/4;
  background:linear-gradient(155deg,var(--navy-950) 0%, var(--navy-700) 45%, var(--orange-500) 100%);
  border-radius:2px;
  display:flex;flex-direction:column;justify-content:space-between;
  padding:2rem;
  color:var(--cream);
  box-shadow:0 30px 60px -25px rgba(10,20,40,.5), 12px 12px 0 var(--gold-400);
}
.book-cover .imprint{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;opacity:.75;}
.book-cover h3{font-size:clamp(1.6rem,3vw,2.4rem);margin:0;}
.progress{margin-top:1.5rem;}
.progress-bar{height:8px;border-radius:99px;background:rgba(20,23,31,.1);overflow:hidden;}
.progress-bar span{display:block;height:100%;background:var(--sunrise-gradient-h);}
.progress-label{display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:.72rem;margin-top:.5rem;color:var(--ink-60);}

.notify-form{display:flex;gap:.75rem;margin-top:1.75rem;flex-wrap:wrap;}
.notify-form input{
  flex:1;min-width:220px;
  padding:.9em 1.1em;border:1px solid rgba(20,23,31,.25);border-radius:var(--radius);
  background:var(--white);
}

/* ---------- checkout ---------- */
.checkout-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:3rem;align-items:start;}
.pay-tabs{display:flex;gap:.6rem;margin-bottom:1.75rem;flex-wrap:wrap;}
.pay-tab{
  flex:1;min-width:150px;
  border:1px solid rgba(20,23,31,.2);border-radius:var(--radius);
  padding:1em 1.1em;background:var(--white);text-align:left;
}
.pay-tab.active{border-color:var(--orange-500);box-shadow:0 0 0 1px var(--orange-500) inset;}
.pay-tab strong{display:block;font-size:.9rem;}
.pay-tab span{font-family:var(--font-mono);font-size:.7rem;color:var(--ink-60);}
.pay-panel{
  border:1px solid rgba(20,23,31,.12);border-radius:var(--radius);padding:2rem;background:var(--white);
  display:none;
}
.pay-panel.active{display:block;}
.field{margin-bottom:1.1rem;}
.field label{display:block;font-family:var(--font-mono);font-size:.72rem;letter-spacing:.05em;text-transform:uppercase;margin-bottom:.45em;color:var(--ink-60);}
.field input,.field select,.field textarea{
  width:100%;padding:.85em 1em;border:1px solid rgba(20,23,31,.22);border-radius:var(--radius);background:var(--cream);
}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem;}
.etransfer-box{
  background:var(--cream-200);border-left:3px solid var(--orange-500);
  padding:1.4rem 1.5rem;border-radius:var(--radius);font-size:.92rem;
}
.etransfer-box code{
  font-family:var(--font-mono);background:var(--white);padding:.15em .5em;border-radius:3px;
  border:1px solid rgba(20,23,31,.15);
}
.order-summary{
  background:var(--navy-950);color:var(--cream);border-radius:var(--radius);padding:2rem;
  position:sticky;top:100px;
}
.order-summary h3{color:var(--cream);}
.order-line{display:flex;justify-content:space-between;padding:.6rem 0;border-bottom:1px solid rgba(251,246,238,.12);font-size:.9rem;}
.order-total{display:flex;justify-content:space-between;padding-top:1rem;font-family:var(--font-mono);font-size:1.1rem;}
.badge-row{display:flex;gap:.8rem;margin-top:1.5rem;flex-wrap:wrap;}
.badge{
  font-family:var(--font-mono);font-size:.66rem;letter-spacing:.05em;text-transform:uppercase;
  border:1px solid rgba(251,246,238,.3);padding:.4em .7em;border-radius:99px;opacity:.8;
}

/* ---------- portfolio ---------- */
.masonry{column-count:3;column-gap:1.5rem;}
.masonry-item{
  break-inside:avoid;margin-bottom:1.5rem;border-radius:var(--radius);overflow:hidden;position:relative;
  background:var(--sunrise-gradient);
}
.masonry-item img{width:100%;display:block;}
.masonry-cap{
  position:absolute;left:0;right:0;bottom:0;padding:1rem 1.1rem;
  background:linear-gradient(0deg, rgba(10,20,40,.85), transparent);
  color:#fff;opacity:0;transition:opacity .2s ease;
}
.masonry-item:hover .masonry-cap{opacity:1;}
.masonry-cap b{display:block;font-family:var(--font-body);font-size:.9rem;}
.masonry-cap span{font-family:var(--font-mono);font-size:.68rem;opacity:.75;}

.commission-cta{
  background:var(--navy-950);color:var(--cream);border-radius:var(--radius);
  padding:3.5rem var(--edge);text-align:center;
}

/* ---------- footer ---------- */
.site-footer{background:var(--navy-950);color:rgba(251,246,238,.75);padding:4rem 0 2rem;}
.footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:2.5rem;margin-bottom:3rem;}
.footer-grid h4{color:var(--cream);font-family:var(--font-mono);font-size:.75rem;letter-spacing:.08em;text-transform:uppercase;margin-bottom:1.1em;}
.footer-grid li{margin-bottom:.6em;font-size:.9rem;}
.footer-grid a:hover{color:var(--gold-400);}
.footer-logo{font-family:var(--font-display);font-size:1.4rem;color:var(--cream);text-transform:uppercase;margin-bottom:.6em;}
.footer-bottom{
  display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem;
  border-top:1px solid rgba(251,246,238,.12);padding-top:1.5rem;
  font-family:var(--font-mono);font-size:.72rem;letter-spacing:.04em;opacity:.6;
}
.pay-icons{display:flex;gap:.6rem;flex-wrap:wrap;}
.pay-icons span{border:1px solid rgba(251,246,238,.25);border-radius:4px;padding:.3em .55em;font-family:var(--font-mono);font-size:.65rem;}

/* ---------- cart drawer ---------- */
.cart-overlay{
  position:fixed;inset:0;background:rgba(10,20,40,.5);z-index:200;opacity:0;pointer-events:none;transition:opacity .25s ease;
}
.cart-overlay.open{opacity:1;pointer-events:auto;}
.cart-drawer{
  position:fixed;top:0;right:0;height:100%;width:min(420px,92vw);
  background:var(--cream);z-index:201;
  transform:translateX(100%);transition:transform .3s ease;
  display:flex;flex-direction:column;box-shadow:-20px 0 40px rgba(10,20,40,.2);
}
.cart-drawer.open{transform:translateX(0);}
.cart-head{display:flex;justify-content:space-between;align-items:center;padding:1.5rem;border-bottom:1px solid rgba(20,23,31,.1);}
.cart-items{flex:1;overflow-y:auto;padding:1.25rem 1.5rem;}
.cart-item{display:flex;gap:.9rem;padding:1rem 0;border-bottom:1px solid rgba(20,23,31,.08);}
.cart-item .thumb{width:64px;height:76px;border-radius:2px;background:var(--sunrise-gradient);flex-shrink:0;}
.cart-item .info{flex:1;font-size:.88rem;}
.cart-item .info b{display:block;}
.cart-item .rm{font-family:var(--font-mono);font-size:.7rem;color:var(--orange-600);background:none;border:none;padding:0;margin-top:.3em;}
.cart-empty{color:var(--ink-60);font-size:.9rem;padding:2rem 0;text-align:center;}
.cart-foot{padding:1.5rem;border-top:1px solid rgba(20,23,31,.1);}
.cart-foot .order-line{border:none;font-family:var(--font-mono);}

/* ---------- misc ---------- */
.mobile-only{display:none;}

/* ==========================================================================
   RESPONSIVE
   ========================================================================== */
@media (max-width:980px){
  .grid-4{grid-template-columns:repeat(2,1fr);}
  .grid-3{grid-template-columns:repeat(2,1fr);}
  .split,.book-hero{grid-template-columns:1fr;gap:2.5rem;}
  .checkout-grid{grid-template-columns:1fr;}
  .order-summary{position:static;}
  .footer-grid{grid-template-columns:1fr 1fr;}
  .masonry{column-count:2;}
}

@media (max-width:720px){
  .nav-links{
    position:fixed;inset:78px 0 0 0;background:var(--cream);
    flex-direction:column;align-items:flex-start;gap:0;
    padding:1.5rem var(--edge);
    transform:translateY(-8px);opacity:0;pointer-events:none;
    transition:opacity .2s ease, transform .2s ease;
    height:calc(100vh - 78px);
  }
  .nav-links.open{opacity:1;pointer-events:auto;transform:translateY(0);}
  .nav-links a{padding:.9em 0;width:100%;border-bottom:1px solid rgba(20,23,31,.08);font-size:.85rem;}
  .nav-toggle{display:block;}
  .nav-actions .btn-ghost{display:none;}
  .mobile-only{display:inline-flex;}

  .grid-4,.grid-3,.grid-2{grid-template-columns:1fr 1fr;}
  .hero{padding:4.5rem var(--edge) 3.5rem;}
  .hero-cta{flex-direction:column;align-items:stretch;}
  .hero-meta{gap:1.5rem;}
  section{padding:3.75rem 0;}
  .section-head{flex-direction:column;align-items:flex-start;}
  .masonry{column-count:1;}
  .field-row{grid-template-columns:1fr;}
  .footer-grid{grid-template-columns:1fr 1fr;gap:2rem 1.5rem;}
}

@media (max-width:480px){
  .grid-4,.grid-3,.grid-2{grid-template-columns:1fr;}
  .footer-grid{grid-template-columns:1fr;}
  .pay-tabs{flex-direction:column;}
  h1{font-size:2.4rem;}
}
