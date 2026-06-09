// ============================================================
// Presto Pizza — interactions
// ============================================================

(() => {
  'use strict';

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

  /* -------------------- Today's hours highlight -------------------- */
  const HOURS = {
    0: '11:30 — 20:00', // Sun
    1: '10:30 — 21:00',
    2: '10:30 — 21:00',
    3: '15:00 — 21:00',
    4: '10:30 — 21:00',
    5: '10:30 — 22:00',
    6: '11:00 — 22:00',
  };

  const today = new Date().getDay();
  const todayEl = document.getElementById('todayHours');
  if (todayEl) todayEl.textContent = HOURS[today];

  document.querySelectorAll('.hours tr').forEach(row => {
    if (Number(row.dataset.day) === today) row.classList.add('is-today');
  });

  // Open / closed badge in hero corner
  const isOpenNow = () => {
    const now = new Date();
    const m = now.getHours() * 60 + now.getMinutes();
    const ranges = {
      0: [11 * 60 + 30, 20 * 60],
      1: [10 * 60 + 30, 21 * 60],
      2: [10 * 60 + 30, 21 * 60],
      3: [15 * 60, 21 * 60],
      4: [10 * 60 + 30, 21 * 60],
      5: [10 * 60 + 30, 22 * 60],
      6: [11 * 60, 22 * 60],
    }[today];
    return m >= ranges[0] && m < ranges[1];
  };
  const corner = document.querySelector('.hero__corner span');
  if (corner) corner.textContent = isOpenNow() ? 'Avoinna nyt' : 'Suljettu nyt';

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
