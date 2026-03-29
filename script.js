/* ==========================================
   SCRIPT.JS – Interactions & Animations
   ========================================== */

// ─── Navbar scroll behavior ─────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── Hamburger menu ─────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ─── Scroll-reveal observer ─────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = parseInt(el.dataset.delay || 0);
      setTimeout(() => el.classList.add('visible'), delay);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── Animated number counter ────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num[data-target]').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObserver.observe(heroStats);

// ─── Floating particles ──────────────────────
const particleContainer = document.getElementById('bgParticles');

function createParticle() {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 4 + 2;
  const x    = Math.random() * window.innerWidth;
  const dur  = Math.random() * 8 + 6;
  const delay= Math.random() * 6;
  p.style.cssText = `
    width:${size}px;
    height:${size}px;
    left:${x}px;
    bottom:${Math.random() * 40}%;
    animation-duration:${dur}s;
    animation-delay:${delay}s;
    opacity:0;
  `;
  particleContainer.appendChild(p);
  setTimeout(() => p.remove(), (dur + delay + 1) * 1000);
}

// Spawn particles periodically
setInterval(createParticle, 600);
for (let i = 0; i < 12; i++) createParticle();

// ─── Active nav link highlight on scroll ────
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link:not(.nav-cta)');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkEls.forEach(l => l.classList.remove('active-link'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active-link');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ─── Skill card stagger animation ───────────
document.querySelectorAll('.skill-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 40}ms`;
});

// ─── Smooth active nav style ────────────────
const style = document.createElement('style');
style.textContent = `.nav-link.active-link { color: var(--accent-light) !important; }
.nav-link.active-link::after { width: 100% !important; }`;
document.head.appendChild(style);

// ─── Timeline dot fill on scroll ────────────
document.querySelectorAll('.timeline-item').forEach(item => {
  const dot = item.querySelector('.timeline-dot');
  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      dot.style.borderColor = 'var(--accent)';
      obs.unobserve(entry.target);
    }
  }, { threshold: 0.6 });
  obs.observe(item);
});
