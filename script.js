// ============================================================
// Presto Pizza — interactions
// ============================================================

(() => {
  'use strict';

  /* -------------------- Translations -------------------- */
  const T = {
    fi: {
      'nav-menu': 'Menu',
      'nav-visit': 'Vieraile',
      'nav-order': 'Tilaa',
      'hero-line1': 'Aitoja',
      'hero-line2': 'italialaisia',
      'hero-line3': 'pizzoja',
      'hero-sub': 'Pizzamme valmistetaan alusta asti käsityönä, aidoista italialaisista raaka-aineista.',
      'hero-cta-order': 'Tilaa tästä',
      'hero-cta-menu': 'Ruokalista',
      'campaign-title': 'Kaikki pizzat',
      'menu-lead': 'Laadukkaat raaka-aineet, hitaasti kohonnut taikina - nämä ovat meille ehdottomia.',
      'cat-starters': 'Alkuruoat',
      'cat-pizzas': 'Pizzat',
      'cat-salads': 'Salaatit',
      'cat-desserts': 'Jälkiruoat',
      'cat-drinks': 'Virvoitusjuomat',
      'badge-hot': 'Tulinen',
      'dish-antipasto-name': 'Antipasto kahdelle',
      'dish-antipasto-desc': 'Focaccia, prosciutto crudo, Napolin salami, bufala mozzarella, parmesaani, rucola, kirsikkatomaatti, oliiviöljy',
      'dish-margherita': 'Tomaattikastike, fior di latte mozzarella, parmesaani, basilika, oliiviöljy',
      'dish-tonno': 'Tomaattikastike, fior di latte mozzarella, tonnikala, punasipuli, oliivi, vihreä pesto',
      'dish-diavola': 'Tomaattikastike, fior di latte mozzarella, picante salami, nduja-makkara',
      'dish-salame': 'Tomaattikastike, fior di latte mozzarella, Napolin salami, rucola, parmesaani',
      'dish-aloha': 'Tomaattikastike, fior di latte mozzarella, palvikinkku, gorgonzola, ananas',
      'dish-pepperoni': 'Tomaattikastike, tupla-fior di latte mozzarella, tupla-pepperoni, oregano',
      'dish-leone': 'Tomaattikastike, fior di latte mozzarella, Napolin salami, palvikinkku, herkkusieni, oregano',
      'dish-diparma': 'Tomaattikastike, fior di latte mozzarella, prosciutto crudo, rucola, kirsikkatomaatti, bufala mozzarella, oliiviöljy, parmesaani',
      'dish-guanciale': 'Tomaattikastike, fior di latte mozzarella, guanciale, jalapeño, ananas',
      'dish-supreme': 'Tomaattikastike, fior di latte mozzarella, palvikinkku, picante-salami, guanciale, oregano',
      'dish-stagioni': 'Tomaattikastike, fior di latte mozzarella, palvikinkku, herkkusieni, oliivi, artisokka',
      'dish-mediterranea': 'Tomaattikastike, kirsikkatomaatti, bufala mozzarella, basilikakastike, oliiviöljy',
      'dish-vegetariana': 'Tomaattikastike, fior di latte mozzarella, munakoiso, paprika, herkkusieni, artisokka, rucola',
      'dish-pollo': 'Tomaattikastike, fior di latte mozzarella, kana, parmesaani, talon majoneesi, rucola',
      'dish-spinata': 'Mascarponekastike, fior di latte mozzarella, gorgonzola, picante-salami, nduja-makkara, parmesaani',
      'dish-formaggi': 'Mascarponekastike, fior di latte mozzarella, gorgonzola, rucola, parmesaani',
      'dish-custom-name': 'Omavalintainen kolmella täytteellä',
      'dish-custom-desc': 'Juusto, tomaattikastike, + 3 omavalintaista täytettä',
      'dish-kids-name': 'Lasten pizza',
      'dish-kids-desc': 'Juusto, tomaattikastike, + 2 omavalintaista täytettä',
      'note-gf': '+ 3,90 € — gluteeniton pohja. Valmistetaan samassa keittiössä; ristikontaminaatio mahdollinen.',
      'note-topping': '+ 2,90 € — lisätäyte.',
      'dish-salad-name': 'Prosciuttosalaatti',
      'dish-salad-desc': 'Salaatti mix, kirsikkatomaatti, oliivi, punasipuli, rucola, parmankinkku, buffalo mozzarella, balsami',
      'dish-tiramisu-name': 'Talon tiramisu',
      'dish-gelato-desc': 'Yksi pallo 6,00 € — kaksi palloa 8,00 €',
      'story-p1': 'Aivan kuten kaikki hyvät asiat elämässä, hyvä pizza vaatii myös aikansa. Hitaasti kylmässä kohonnut taikina ja huolella valitut raaka-aineet - näistä syntyy Presto Pizza.',
      'visit-num': '04 — Vieraile',
      'visit-title1': 'Tule',
      'visit-title2': 'käymään.',
      'visit-address-label': 'Osoite',
      'visit-map': 'Avaa kartalla',
      'visit-hours-label': 'Aukiolo',
      'visit-contact-label': 'Yhteystiedot',
      'day-mon': 'Maanantai',
      'day-tue': 'Tiistai',
      'day-wed': 'Keskiviikko',
      'day-thu': 'Torstai',
      'day-fri': 'Perjantai',
      'day-sat': 'Lauantai',
      'day-sun': 'Sunnuntai',
      'day-0-hours': 'Suljettu',
      'day-1-hours': 'Suljettu',
      'day-2-hours': 'Suljettu',
      'day-3-hours': 'Suljettu',
      'order-kicker': '— Tilaa',
      'order-title1': 'Tilaa',
      'order-title2': 'tästä.',
      'order-btn-label': 'Tilaa',
      'foot-desc': 'Aitoja italialaisia<br/>artesaanipizzoja Espoosta.',
      'foot-h-pages': 'Sivut',
      'foot-h-contact': 'Yhteys',
      'foot-h-follow': 'Tilaa',
      'open-now': 'Avoinna nyt',
      'closed-now': 'Suljettu nyt',
      'closed-today': 'Suljettu tänään',
      'opens-at': 'Avautuu klo',
      'mq-1': 'Aitoja italialaisia raaka-aineita',
      'mq-2': 'Käsityönä alusta asti',
      'mq-3': 'Raikkaat salaatit',
      'mq-4': 'Gluteeniton pohja',
      'mq-5': 'Tilaa Woltista',
    },
    en: {
      'nav-menu': 'Menu',
      'nav-visit': 'Visit',
      'nav-order': 'Order',
      'hero-line1': 'Authentic',
      'hero-line2': 'Italian',
      'hero-line3': 'pizzas',
      'hero-sub': 'Our pizzas are crafted from scratch by hand, using authentic Italian ingredients.',
      'hero-cta-order': 'Order now',
      'hero-cta-menu': 'See menu',
      'campaign-title': 'All pizzas',
      'menu-lead': 'Quality ingredients and slow-risen dough — for us, these are non-negotiable.',
      'cat-starters': 'Starters',
      'cat-pizzas': 'Pizzas',
      'cat-salads': 'Salads',
      'cat-desserts': 'Desserts',
      'cat-drinks': 'Soft drinks',
      'badge-hot': 'Spicy',
      'dish-antipasto-name': 'Antipasto for two',
      'dish-antipasto-desc': 'Focaccia, prosciutto crudo, Neapolitan salami, bufala mozzarella, parmesan, rocket, cherry tomatoes, olive oil',
      'dish-margherita': 'Tomato sauce, fior di latte mozzarella, parmesan, basil, olive oil',
      'dish-tonno': 'Tomato sauce, fior di latte mozzarella, tuna, red onion, olives, green pesto',
      'dish-diavola': 'Tomato sauce, fior di latte mozzarella, spicy salami, nduja sausage',
      'dish-salame': 'Tomato sauce, fior di latte mozzarella, Neapolitan salami, rocket, parmesan',
      'dish-aloha': 'Tomato sauce, fior di latte mozzarella, smoked ham, gorgonzola, pineapple',
      'dish-pepperoni': 'Tomato sauce, double fior di latte mozzarella, double pepperoni, oregano',
      'dish-leone': 'Tomato sauce, fior di latte mozzarella, Neapolitan salami, smoked ham, mushrooms, oregano',
      'dish-diparma': 'Tomato sauce, fior di latte mozzarella, prosciutto crudo, rocket, cherry tomatoes, bufala mozzarella, olive oil, parmesan',
      'dish-guanciale': 'Tomato sauce, fior di latte mozzarella, guanciale, jalapeño, pineapple',
      'dish-supreme': 'Tomato sauce, fior di latte mozzarella, smoked ham, spicy salami, guanciale, oregano',
      'dish-stagioni': 'Tomato sauce, fior di latte mozzarella, smoked ham, mushrooms, olives, artichoke',
      'dish-mediterranea': 'Tomato sauce, cherry tomatoes, bufala mozzarella, basil sauce, olive oil',
      'dish-vegetariana': 'Tomato sauce, fior di latte mozzarella, aubergine, bell pepper, mushrooms, artichoke, rocket',
      'dish-pollo': 'Tomato sauce, fior di latte mozzarella, chicken, parmesan, house mayo, rocket',
      'dish-spinata': 'Mascarpone sauce, fior di latte mozzarella, gorgonzola, spicy salami, nduja sausage, parmesan',
      'dish-formaggi': 'Mascarpone sauce, fior di latte mozzarella, gorgonzola, rocket, parmesan',
      'dish-custom-name': 'Build your own (3 toppings)',
      'dish-custom-desc': 'Cheese, tomato sauce, + 3 toppings of your choice',
      'dish-kids-name': 'Kids pizza',
      'dish-kids-desc': 'Cheese, tomato sauce, + 2 toppings of your choice',
      'note-gf': '+ €3.90 — gluten-free base. Prepared in the same kitchen; cross-contamination possible.',
      'note-topping': '+ €2.90 — extra topping.',
      'dish-salad-name': 'Prosciutto salad',
      'dish-salad-desc': 'Mixed salad, cherry tomatoes, olives, red onion, rocket, Parma ham, buffalo mozzarella, balsamic',
      'dish-tiramisu-name': 'House tiramisu',
      'dish-gelato-desc': 'One scoop €6.00 — two scoops €8.00',
      'story-p1': 'Just like all the good things in life, good pizza takes its time. Slowly cold-risen dough and carefully chosen ingredients — this is what makes a Presto Pizza.',
      'visit-num': '04 — Visit',
      'visit-title1': 'Come',
      'visit-title2': 'visit us.',
      'visit-address-label': 'Address',
      'visit-map': 'Open on map',
      'visit-hours-label': 'Opening hours',
      'visit-contact-label': 'Contact',
      'day-mon': 'Monday',
      'day-tue': 'Tuesday',
      'day-wed': 'Wednesday',
      'day-thu': 'Thursday',
      'day-fri': 'Friday',
      'day-sat': 'Saturday',
      'day-sun': 'Sunday',
      'day-0-hours': 'Closed',
      'day-1-hours': 'Closed',
      'day-2-hours': 'Closed',
      'day-3-hours': 'Closed',
      'order-kicker': '— Order',
      'order-title1': 'Order',
      'order-title2': 'here.',
      'order-btn-label': 'Order via',
      'foot-desc': 'Authentic Italian<br/>artisan pizzas from Espoo.',
      'foot-h-pages': 'Pages',
      'foot-h-contact': 'Contact',
      'foot-h-follow': 'Order',
      'open-now': 'Open now',
      'closed-now': 'Closed',
      'closed-today': 'Closed today',
      'opens-at': 'Opens at',
      'mq-1': 'Authentic Italian ingredients',
      'mq-2': 'Handcrafted from scratch',
      'mq-3': 'Fresh salads',
      'mq-4': 'Gluten-free base available',
      'mq-5': 'Order on Wolt',
    }
  };

  let currentLang = localStorage.getItem('presto-lang') || 'fi';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('presto-lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (T[lang][key] !== undefined) {
        if (T[lang][key].includes('<br')) {
          el.innerHTML = T[lang][key];
        } else {
          el.textContent = T[lang][key];
        }
      }
    });

    // Lang button shows the other language
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'fi' ? 'EN' : 'FI';
  }

  // Language toggle
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLang(currentLang === 'fi' ? 'en' : 'fi');
      updateHeroCorner();
    });
  }

  // Apply saved language on load
  if (currentLang === 'en') applyLang('en');

  /* -------------------- Navigation: scroll state -------------------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* -------------------- Mobile menu -------------------- */
  const burger = document.querySelector('.nav__burger');
  const mobile = document.getElementById('mobile-menu');

  const toggleMenu = (open) => {
    const willOpen = open ?? burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', String(willOpen));
    if (willOpen) {
      mobile.hidden = false;
      requestAnimationFrame(() => mobile.classList.add('is-open'));
      document.body.style.overflow = 'hidden';
    } else {
      mobile.classList.remove('is-open');
      document.body.style.overflow = '';
      setTimeout(() => { mobile.hidden = true; }, 420);
    }
  };

  burger.addEventListener('click', () => toggleMenu());
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
  window.addEventListener('keydown', e => { if (e.key === 'Escape') toggleMenu(false); });

  /* -------------------- Today's hours -------------------- */
  const HOURS = {
    0: null,           // Sun — closed
    1: null,           // Mon — closed
    2: null,           // Tue — closed
    3: null,           // Wed — closed
    4: [15 * 60, 20 * 60],         // Thu 15:00–20:00
    5: [15 * 60, 21 * 60 + 30],    // Fri 15:00–21:30
    6: [15 * 60, 21 * 60 + 30],    // Sat 15:00–21:30
  };

  const HOURS_DISPLAY = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: '15:00 — 20:00',
    5: '15:00 — 21:30',
    6: '15:00 — 21:30',
  };

  const today = new Date().getDay();

  const todayEl = document.getElementById('todayHours');
  if (todayEl) todayEl.textContent = HOURS_DISPLAY[today] || '—';

  document.querySelectorAll('.hours tr').forEach(row => {
    if (Number(row.dataset.day) === today) row.classList.add('is-today');
  });

  function updateHeroCorner() {
    const statusEl = document.getElementById('openStatus');
    if (!statusEl) return;
    const range = HOURS[today];
    if (!range) {
      statusEl.textContent = T[currentLang]['closed-today'];
      return;
    }
    const now = new Date();
    const m = now.getHours() * 60 + now.getMinutes();
    if (m >= range[0] && m < range[1]) {
      statusEl.textContent = T[currentLang]['open-now'];
    } else if (m < range[0]) {
      const h = String(Math.floor(range[0] / 60)).padStart(2, '0');
      const min = String(range[0] % 60).padStart(2, '0');
      statusEl.textContent = T[currentLang]['opens-at'] + ' ' + h + ':' + min;
    } else {
      statusEl.textContent = T[currentLang]['closed-now'];
    }
  }
  updateHeroCorner();

  /* -------------------- Year in footer -------------------- */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* -------------------- Reveal on scroll -------------------- */
  const targets = document.querySelectorAll(
    '.section__head, .menu__group, .story__text, .story__img, .visit__card, .order__inner > *'
  );
  targets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(el => io.observe(el));
  } else {
    targets.forEach(el => el.classList.add('is-in'));
  }

  /* -------------------- Menu category accordion (mobile) -------------------- */
  document.querySelectorAll('.menu__group-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.menu__group');
      const isOpen = group.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });

  /* -------------------- Smooth scroll w/ nav offset -------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

})();
