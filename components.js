/* ═══════════════════════════════════════════════════════
   SHARED COMPONENTS — injected on every page
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── detect active page ── */
  const path = location.pathname.split('/').pop() || 'index.html';

  /* ── NAV HTML ── */
  const NAV_HTML = `
  <div id="preloader">
    <div class="pre-inner">
      <div class="pre-logo-wrap">
        <svg viewBox="0 0 80 60" class="pre-truck" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="18" width="52" height="30" rx="4" fill="#C9A227"/>
          <rect x="52" y="24" width="24" height="24" rx="3" fill="#C9A227"/>
          <rect x="54" y="26" width="18" height="12" rx="2" fill="#0a1628"/>
          <circle cx="16" cy="50" r="7" fill="#0a1628" stroke="#C9A227" stroke-width="2.5"/>
          <circle cx="62" cy="50" r="7" fill="#0a1628" stroke="#C9A227" stroke-width="2.5"/>
          <circle cx="16" cy="50" r="3" fill="#C9A227"/>
          <circle cx="62" cy="50" r="3" fill="#C9A227"/>
          <line x1="2" y1="38" x2="54" y2="38" stroke="#0a1628" stroke-width="1.5"/>
        </svg>
        <div class="pre-road"><div class="pre-road-line"></div></div>
      </div>
      <p class="pre-text">آفاق المحيط للنقليات</p>
    </div>
  </div>

  <nav id="navbar">
    <div class="nav-container">
      <a href="index.html" class="nav-logo">
        <div class="logo-mark">
          <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="21" stroke="#C9A227" stroke-width="1.5"/>
            <path d="M6 28 L22 12 L38 28" stroke="#C9A227" stroke-width="2" stroke-linecap="round"/>
            <path d="M12 28 L22 18 L32 28" fill="#C9A227" opacity="0.3"/>
            <circle cx="22" cy="32" r="3" fill="#C9A227"/>
          </svg>
        </div>
        <div class="logo-text">
          <span class="logo-ar">آفاق المحيط</span>
          <span class="logo-en">AFAQ AL-MUHIT</span>
        </div>
      </a>

      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>

      <ul class="nav-links" id="navLinks">
        <li><a href="index.html"    data-page="index.html">الرئيسية</a></li>
        <li><a href="about.html"    data-page="about.html">من نحن</a></li>
        <li><a href="services.html" data-page="services.html">خدماتنا</a></li>
        <li><a href="fleet.html"    data-page="fleet.html">الأسطول</a></li>
        <li><a href="clients.html"  data-page="clients.html">عملاؤنا</a></li>
        <li><a href="coverage.html" data-page="coverage.html">نطاق العمل</a></li>
        <li><a href="contact.html"  class="nav-cta" data-page="contact.html">تواصل معنا</a></li>
        <li><button class="lang-btn" id="langBtn">EN</button></li>
      </ul>
    </div>
  </nav>`;

  /* ── FOOTER HTML ── */
  const FOOTER_HTML = `
  <a href="https://wa.me/966582407206" class="whatsapp-float" target="_blank" aria-label="WhatsApp">
    <i class="ph ph-whatsapp-logo"></i>
    <span>تواصل واتساب</span>
  </a>
  <button id="backTop" class="back-top" aria-label="Back to top">
    <i class="ph ph-arrow-up"></i>
  </button>

  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <div class="logo-mark">
                <svg viewBox="0 0 44 44" fill="none">
                  <circle cx="22" cy="22" r="21" stroke="#C9A227" stroke-width="1.5"/>
                  <path d="M6 28 L22 12 L38 28" stroke="#C9A227" stroke-width="2" stroke-linecap="round"/>
                  <path d="M12 28 L22 18 L32 28" fill="#C9A227" opacity="0.3"/>
                  <circle cx="22" cy="32" r="3" fill="#C9A227"/>
                </svg>
              </div>
              <div>
                <span class="logo-ar">آفاق المحيط للنقليات</span>
                <span class="logo-en">AFAQ AL-MUHIT TRANSPORTATION EST.</span>
              </div>
            </div>
            <p class="footer-desc">منذ 2010، نربط المملكة العربية السعودية بخدمات نقل موثوقة وآمنة واحترافية.</p>
            <div class="footer-cr-info">
              <span>س.ت: 2056005833</span>
              <span>الرقم الوطني: 7007981553</span>
            </div>
          </div>
          <div class="footer-links">
            <h5>روابط سريعة</h5>
            <ul>
              <li><a href="index.html">الرئيسية</a></li>
              <li><a href="about.html">من نحن</a></li>
              <li><a href="services.html">خدماتنا</a></li>
              <li><a href="fleet.html">الأسطول</a></li>
              <li><a href="clients.html">عملاؤنا</a></li>
              <li><a href="contact.html">تواصل معنا</a></li>
            </ul>
          </div>
          <div class="footer-contact">
            <h5>تواصل معنا</h5>
            <div class="fc-item"><i class="ph ph-phone"></i><a href="tel:+966582407206" dir="ltr">+966 58 240 7206</a></div>
            <div class="fc-item"><i class="ph ph-whatsapp-logo"></i><a href="https://wa.me/966582407206" target="_blank">واتساب مباشر</a></div>
            <div class="fc-item"><i class="ph ph-map-pin"></i><span>الرياض — العزيزية، المملكة العربية السعودية</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>© 2025 مؤسسة آفاق المحيط للنقليات — جميع الحقوق محفوظة</p>
        <p class="fb-en">Afaq Al-Muhit Transportation Est. — All Rights Reserved</p>
      </div>
    </div>
  </footer>`;

  /* ── inject ── */
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  /* ── mark active nav link ── */
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.getAttribute('data-page') === path) a.classList.add('active-nav');
  });

  /* ── PRELOADER ── */
  window.addEventListener('load', () => {
    const pre = document.getElementById('preloader');
    if (!pre) return;
    setTimeout(() => {
      pre.classList.add('hidden');
      setTimeout(() => pre.remove(), 700);
      if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 });
      }
    }, 900);
  });

  /* ── NAVBAR SCROLL ── */
  const navbar  = document.getElementById('navbar');
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 60);
    backTop?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── MOBILE NAV ── */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle?.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  /* ── SMOOTH SCROLL (same-page anchors) ── */
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    const top = t.getBoundingClientRect().top + window.scrollY - (navbar?.offsetHeight || 80) - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });

  /* ── LANG TOGGLE ── */
  const langBtn = document.getElementById('langBtn');
  let isAR = true;
  langBtn?.addEventListener('click', () => {
    isAR = !isAR;
    document.documentElement.setAttribute('lang', isAR ? 'ar' : 'en');
    document.documentElement.setAttribute('dir', isAR ? 'rtl' : 'ltr');
    document.body.classList.toggle('lang-en', !isAR);
    langBtn.textContent = isAR ? 'EN' : 'عر';
  });

  /* ── TICKER PAUSE ── */
  document.addEventListener('mouseenter', e => {
    if (e.target.closest('.ticker-track')) e.target.closest('.ticker-track').style.animationPlayState = 'paused';
  }, true);
  document.addEventListener('mouseleave', e => {
    if (e.target.closest('.ticker-track')) e.target.closest('.ticker-track').style.animationPlayState = 'running';
  }, true);

})();
