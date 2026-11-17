// Speaking page — interactions
(function () {
  'use strict';

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('primary-nav');

  function setNavOpen(open) {
    if (!navToggle || !nav) return;
    navToggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      setNavOpen(!isOpen);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        setNavOpen(false);
      }
    });
  }
})();
