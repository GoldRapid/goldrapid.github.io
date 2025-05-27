const translations = {
  en: {
    title: "Welcome to GoldRapid",
    desc: "Your trusted partner for rapid, innovative solutions.",
    flag: "🇬🇧",
    label: "EN",
    altFlag: "🇵🇱",
    altLabel: "PL"
  },
  pl: {
    title: "Witamy w GoldRapid",
    desc: "Twój zaufany partner w szybkim i innowacyjnym rozwoju.",
    flag: "🇵🇱",
    label: "PL",
    altFlag: "🇬🇧",
    altLabel: "EN"
  }
};

const flagSrc = {
  en: {
    alt: "EN",
    src: "img/flag-us.svg",
    label: "EN",
    altSrc: "img/flag-pl.svg",
    altLabel: "PL"
  },
  pl: {
    alt: "PL",
    src: "img/flag-pl.svg",
    label: "PL",
    altSrc: "img/flag-us.svg",
    altLabel: "EN"
  }
};

function setLang(lang) {
  document.getElementById('mainTitle').textContent = translations[lang].title;
  document.getElementById('mainDesc').textContent = translations[lang].desc;
  // Show opposite language on button with SVG flag
  document.getElementById('langFlag').src = flagSrc[lang].altSrc;
  document.getElementById('langFlag').alt = flagSrc[lang].altLabel;
  document.getElementById('langLabel').textContent = flagSrc[lang].altLabel;
  localStorage.setItem('lang', lang);
  document.body.setAttribute('data-lang', lang);
}

function detectLang() {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const nav = navigator.language || navigator.userLanguage;
  return nav.startsWith('pl') ? 'pl' : 'en';
}

function setTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  document.getElementById('themeBtn').textContent = theme === 'dark' ? '☀️' : '🌙';
}

function detectTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

document.addEventListener('DOMContentLoaded', () => {
  // Language
  let lang = detectLang();
  setLang(lang);
  document.getElementById('langBtn').onclick = () => {
    lang = lang === 'pl' ? 'en' : 'pl';
    setLang(lang);
  };

  // Theme
  let theme = detectTheme();
  setTheme(theme);
  document.getElementById('themeBtn').onclick = () => {
    theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(theme);
  };
});
