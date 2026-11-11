// Smooth scrolling for hash links (modern browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* Simple mobile‑nav toggle (optional) */
const navList = document.getElementById('nav-list');
if (navList) {
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = 'Menu';
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.setAttribute('aria-controls', 'nav-list');
  toggleBtn.style.display = 'none'; // Show via CSS media query later

  document.getElementById('site-header').insertBefore(toggleBtn, navList);

  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!expanded));
    navList.style.display = expanded ? 'none' : 'flex';
  });
}

