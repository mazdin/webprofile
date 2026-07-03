/* ==========================================================
   SCRIPT.JS — i18n toggle, nav, reveal, counters
   ========================================================== */

/* ─── Translation dictionary (EN / ID) ───────────────────── */
const I18N = {
  en: {
    'nav.about': 'About', 'nav.approach': 'Approach', 'nav.skills': 'Skills',
    'nav.work': 'Work', 'nav.certs': 'Certs', 'nav.contact': 'Contact',

    'hero.badge': 'Available for opportunities',
    'hero.title': 'Senior Quality Assurance Engineer',
    'hero.tagline': 'Ensuring flawless software releases at enterprise scale — 5+ years turning requirements into reliable, well-tested products.',
    'hero.cta.work': 'View work',
    'hero.cta.cv': 'Download CV',
    'hero.cta.contact': 'Get in touch',
    'stat.years': 'Years of experience',
    'stat.defect': 'Defect reduction',
    'stat.regression': 'Faster regression',
    'stat.cases': 'Test cases / release',

    'about.title': 'Professional summary',
    'about.lead': 'Senior Quality Assurance Engineer with <strong>5+ years of experience</strong> in enterprise-level web and mobile application testing.',
    'about.p1': 'Specialized in manual and automation testing using <strong>Playwright (TypeScript)</strong>, API validation, performance testing, and database verification using <strong>MySQL</strong>. Proven track record in improving release stability, reducing production defects by up to <strong>30%</strong>, and accelerating regression cycles by approximately <strong>40%</strong> through automation initiatives.',
    'about.p2': 'Strong leadership experience mentoring QA teams and acting as quality gatekeeper in corporate release environments.',
    'about.focus': 'Automation · API · Performance · Data',
    'hl.defect': 'Defect reduction via regression coverage',
    'hl.regression': 'Faster regression through automation',
    'hl.cases': 'Test cases designed per release',
    'hl.mentored': 'Junior QA engineers mentored',

    'approach.title': 'How I work',
    'approach.sub': 'A structured quality process across the Software Testing Life Cycle — from requirement to release.',
    'approach.1.t': 'Analyze',
    'approach.1.d': 'Requirement & risk analysis from PRDs — defining scope, priorities, and acceptance criteria before a single test is written.',
    'approach.2.t': 'Design',
    'approach.2.d': 'Test planning & strategy — 150+ structured test cases per release covering functional, regression, smoke, and UAT scenarios.',
    'approach.3.t': 'Execute',
    'approach.3.d': 'Manual + Playwright (TypeScript) automation with Page Object Model, plus API (Postman), performance (JMeter), and MySQL data validation.',
    'approach.4.t': 'Gatekeep',
    'approach.4.d': 'Defect tracking in JIRA with clear repro steps, release validation, and acting as the final quality gate before production.',

    'skills.title': 'Core competencies',
    'skill.planning': 'Test Planning & Strategy',
    'skill.manual': 'Manual Testing',
    'skill.webmobile': 'Web & Mobile Testing',
    'skill.automation': 'Automation Testing',
    'skill.api': 'API Testing',
    'skill.perf': 'Performance Testing',
    'skill.db': 'Database Testing',
    'skill.defect': 'Defect Management',
    'skill.release': 'Release Validation & Gatekeeping',
    'skill.collab': 'Cross-functional Collaboration',
    'skill.risk': 'Risk Assessment',
    'skill.req': 'Requirement Analysis',
    'tools.label': 'stack --list',

    'work.title': 'Professional experience',
    'work.present': 'Present',
    'work.1.role': 'Senior Quality Assurance Engineer',
    'work.1.b1': 'Led end-to-end test planning including scope definition, risk assessment, timeline estimation, and release validation',
    'work.1.b2': 'Reduced production defects by <strong>~30%</strong> through improved regression coverage and structured test case review',
    'work.1.b3': 'Developed and maintained an end-to-end automation framework using <strong>Playwright (TypeScript)</strong> with a Page Object Model architecture and Git version control, reducing regression testing time by <strong>~40%</strong>',
    'work.1.b4': 'Conducted API and performance testing using <strong>Postman</strong> and <strong>JMeter</strong> to ensure system scalability and reliability',
    'work.1.b5': 'Performed backend data validation using MySQL queries through MySQL Workbench to verify transaction integrity and data consistency',
    'work.1.b6': 'Mentored 2 junior QA engineers in test design, defect reporting standards, and automation best practices',
    'work.1.b7': 'Acted as quality gatekeeper during corporate release cycles, ensuring stable deployment to production',
    'work.2.role': 'Quality Assurance Engineer',
    'work.2.b1': 'Designed and executed <strong>150+ test cases</strong> per release cycle based on Product Requirement Documents (PRD)',
    'work.2.b2': 'Performed manual testing for web and mobile applications including functional, regression, and smoke testing',
    'work.2.b3': 'Validated backend database records using MySQL queries via MySQL Workbench to ensure consistency between UI and database data',
    'work.2.b4': 'Identified and tracked defects using <strong>JIRA</strong>, ensuring clear reproduction steps and impact analysis',
    'work.2.b5': 'Conducted API testing using <strong>Postman</strong> and supported User Acceptance Testing (UAT) activities',
    'work.2.b6': 'Collaborated with developers and product owners to validate bug fixes and improve feature quality',
    'work.3.role': 'Software Tester',
    'work.3.b1': 'Executed end-to-end system simulation testing on the <strong>SPSE v4.5</strong> application, from package creation to completion',
    'work.3.b2': 'Validated system functionality using structured UAT checklists aligned with business requirements',
    'work.3.b3': 'Reported defects with detailed reproduction steps and supporting evidence',
    'work.3.b4': 'Provided feature enhancement recommendations based on testing findings',
    'work.4.role': 'IT Support Technician',
    'work.4.b1': 'Supported users with Microsoft Office applications and local network setup',
    'work.4.b2': 'Performed OS installation, configuration, and data backup/restore procedures',
    'work.4.b3': 'Provided IT support for hardware, software, and network issues in office environments',

    'certs.title': 'Certifications',
    'certs.issuer': 'Digital Talent Scholarship (Kominfo)',
    'edu.degree': 'Bachelor of Computer Technology',

    'contact.title': 'Get in touch',
    'contact.sub': "Open to QA engineering opportunities. Let's talk quality.",
    'footer.tag': 'exit 0 // built for quality',
  },

  id: {
    'nav.about': 'Tentang', 'nav.approach': 'Proses', 'nav.skills': 'Keahlian',
    'nav.work': 'Pengalaman', 'nav.certs': 'Sertifikasi', 'nav.contact': 'Kontak',

    'hero.badge': 'Terbuka untuk peluang',
    'hero.title': 'Senior Quality Assurance Engineer',
    'hero.tagline': 'Memastikan rilis perangkat lunak bebas cacat pada skala enterprise — 5+ tahun mengubah requirement menjadi produk andal yang teruji.',
    'hero.cta.work': 'Lihat pengalaman',
    'hero.cta.cv': 'Unduh CV',
    'hero.cta.contact': 'Hubungi saya',
    'stat.years': 'Tahun pengalaman',
    'stat.defect': 'Pengurangan defect',
    'stat.regression': 'Regresi lebih cepat',
    'stat.cases': 'Test case / rilis',

    'about.title': 'Ringkasan profesional',
    'about.lead': 'Senior Quality Assurance Engineer dengan <strong>pengalaman 5+ tahun</strong> dalam pengujian aplikasi web dan mobile tingkat enterprise.',
    'about.p1': 'Spesialisasi pada pengujian manual dan otomatis menggunakan <strong>Playwright (TypeScript)</strong>, validasi API, performance testing, dan verifikasi database menggunakan <strong>MySQL</strong>. Terbukti meningkatkan stabilitas rilis, menurunkan defect produksi hingga <strong>30%</strong>, dan mempercepat siklus regresi sekitar <strong>40%</strong> melalui inisiatif otomasi.',
    'about.p2': 'Berpengalaman memimpin dan membina tim QA serta berperan sebagai quality gatekeeper dalam lingkungan rilis korporat.',
    'about.focus': 'Otomasi · API · Performa · Data',
    'hl.defect': 'Pengurangan defect via cakupan regresi',
    'hl.regression': 'Regresi lebih cepat lewat otomasi',
    'hl.cases': 'Test case dirancang per rilis',
    'hl.mentored': 'QA junior yang dibina',

    'approach.title': 'Cara saya bekerja',
    'approach.sub': 'Proses kualitas terstruktur di seluruh Software Testing Life Cycle — dari requirement hingga rilis.',
    'approach.1.t': 'Analisis',
    'approach.1.d': 'Analisis requirement & risiko dari PRD — menentukan scope, prioritas, dan kriteria penerimaan sebelum test pertama ditulis.',
    'approach.2.t': 'Desain',
    'approach.2.d': 'Perencanaan & strategi test — 150+ test case terstruktur per rilis mencakup skenario functional, regression, smoke, dan UAT.',
    'approach.3.t': 'Eksekusi',
    'approach.3.d': 'Manual + otomasi Playwright (TypeScript) dengan Page Object Model, ditambah API (Postman), performa (JMeter), dan validasi data MySQL.',
    'approach.4.t': 'Gatekeeping',
    'approach.4.d': 'Pelacakan defect di JIRA dengan langkah reproduksi jelas, validasi rilis, dan menjadi gerbang kualitas akhir sebelum produksi.',

    'skills.title': 'Kompetensi inti',
    'skill.planning': 'Perencanaan & Strategi Test',
    'skill.manual': 'Pengujian Manual',
    'skill.webmobile': 'Pengujian Web & Mobile',
    'skill.automation': 'Pengujian Otomatis',
    'skill.api': 'Pengujian API',
    'skill.perf': 'Performance Testing',
    'skill.db': 'Pengujian Database',
    'skill.defect': 'Manajemen Defect',
    'skill.release': 'Validasi Rilis & Gatekeeping',
    'skill.collab': 'Kolaborasi Lintas Fungsi',
    'skill.risk': 'Penilaian Risiko',
    'skill.req': 'Analisis Requirement',
    'tools.label': 'stack --list',

    'work.title': 'Pengalaman profesional',
    'work.present': 'Sekarang',
    'work.1.role': 'Senior Quality Assurance Engineer',
    'work.1.b1': 'Memimpin perencanaan test end-to-end meliputi definisi scope, penilaian risiko, estimasi timeline, dan validasi rilis',
    'work.1.b2': 'Menurunkan defect produksi sekitar <strong>~30%</strong> melalui peningkatan cakupan regresi dan review test case terstruktur',
    'work.1.b3': 'Membangun dan memelihara framework otomasi end-to-end menggunakan <strong>Playwright (TypeScript)</strong> dengan arsitektur Page Object Model dan version control Git, mengurangi waktu regression testing sekitar <strong>~40%</strong>',
    'work.1.b4': 'Melakukan pengujian API dan performa menggunakan <strong>Postman</strong> dan <strong>JMeter</strong> untuk memastikan skalabilitas dan keandalan sistem',
    'work.1.b5': 'Melakukan validasi data backend menggunakan query MySQL melalui MySQL Workbench untuk memverifikasi integritas transaksi dan konsistensi data',
    'work.1.b6': 'Membina 2 QA engineer junior dalam desain test, standar pelaporan defect, dan best practice otomasi',
    'work.1.b7': 'Berperan sebagai quality gatekeeper selama siklus rilis korporat, memastikan deployment stabil ke produksi',
    'work.2.role': 'Quality Assurance Engineer',
    'work.2.b1': 'Merancang dan mengeksekusi <strong>150+ test case</strong> per siklus rilis berdasarkan Product Requirement Documents (PRD)',
    'work.2.b2': 'Melakukan pengujian manual untuk aplikasi web dan mobile termasuk functional, regression, dan smoke testing',
    'work.2.b3': 'Memvalidasi data database backend menggunakan query MySQL via MySQL Workbench untuk memastikan konsistensi antara UI dan data database',
    'work.2.b4': 'Mengidentifikasi dan melacak defect menggunakan <strong>JIRA</strong>, memastikan langkah reproduksi jelas dan analisis dampak',
    'work.2.b5': 'Melakukan pengujian API menggunakan <strong>Postman</strong> dan mendukung aktivitas User Acceptance Testing (UAT)',
    'work.2.b6': 'Berkolaborasi dengan developer dan product owner untuk memvalidasi perbaikan bug dan meningkatkan kualitas fitur',
    'work.3.role': 'Software Tester',
    'work.3.b1': 'Mengeksekusi pengujian simulasi sistem end-to-end pada aplikasi <strong>SPSE v4.5</strong>, dari pembuatan paket hingga penyelesaian',
    'work.3.b2': 'Memvalidasi fungsionalitas sistem menggunakan checklist UAT terstruktur yang selaras dengan kebutuhan bisnis',
    'work.3.b3': 'Melaporkan defect dengan langkah reproduksi detail dan bukti pendukung',
    'work.3.b4': 'Memberikan rekomendasi peningkatan fitur berdasarkan temuan pengujian',
    'work.4.role': 'Teknisi IT Support',
    'work.4.b1': 'Mendukung pengguna dengan aplikasi Microsoft Office dan setup jaringan lokal',
    'work.4.b2': 'Melakukan instalasi OS, konfigurasi, dan prosedur backup/restore data',
    'work.4.b3': 'Memberikan dukungan IT untuk masalah hardware, software, dan jaringan di lingkungan kantor',

    'certs.title': 'Sertifikasi',
    'certs.issuer': 'Digital Talent Scholarship (Kominfo)',
    'edu.degree': 'Sarjana Teknologi Komputer',

    'contact.title': 'Hubungi saya',
    'contact.sub': 'Terbuka untuk peluang QA engineering. Mari bicara soal kualitas.',
    'footer.tag': 'exit 0 // dibuat untuk kualitas',
  },
};

/* ─── Apply language ──────────────────────────────────────── */
function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = dict[el.getAttribute('data-i18n')];
    if (val != null) el.innerHTML = val;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-opt').forEach(o => {
    o.classList.toggle('active', o.dataset.lang === lang);
  });
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

let currentLang = 'en';
try { currentLang = localStorage.getItem('lang') || 'en'; } catch (e) {}
applyLang(currentLang);

const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'id' : 'en';
  applyLang(currentLang);
});

/* ─── Navbar scroll state ─────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ─── Hamburger menu ──────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
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

/* ─── Scroll reveal ───────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─── Animated counters ───────────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num[data-target]').forEach(animateCounter);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) statObserver.observe(heroStats);

/* ─── Active nav link on scroll ───────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkEls.forEach(l => l.classList.remove('active-link'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active-link');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => sectionObserver.observe(s));
