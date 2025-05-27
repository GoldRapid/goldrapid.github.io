const translations = {
  en: {
    title: "Welcome to GoldRapid",
    desc: "Your trusted partner for rapid, innovative solutions.",
    flag: "🇬🇧",
    label: "EN",
    altFlag: "🇵🇱",
    altLabel: "PL",
    skillsTitle: "Our Expertise",
    aboutTitle: "About Us",
    aboutDesc: "We are committed to delivering top-notch solutions.",
    sections: ["Tools", "Software Build & Deploy", "IOT Firmware Build & Deploy"]
  },
  pl: {
    title: "Witamy w GoldRapid",
    desc: "Twój zaufany partner w szybkim i innowacyjnym rozwoju.",
    flag: "🇵🇱",
    label: "PL",
    altFlag: "🇬🇧",
    altLabel: "EN",
    skillsTitle: "Nasza Ekspertyza",
    aboutTitle: "O Nas",
    aboutDesc: "Jesteśmy zobowiązani do dostarczania rozwiązań najwyższej jakości.",
    sections: ["Narzędzia", "Budowanie oprogramowania i wdrażanie", "Budowanie oprogramowania układowego i wdrażanie"]
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

// Language data modules
const languageModules = {
  en: () => import('./lang/en.js'),
  pl: () => import('./lang/pl.js')
};

let currentLang = null;

// Skill icons (SVG/PNG from reputable sources, e.g. Simple Icons CDN)
const skillIcons = {
  devops: 'img/azuredevops.svg',
  github: 'img/githubactions.svg',
  gitlab: 'img/gitlab.svg',
  azuredevops: 'img/azuredevops.svg',
  jira: 'img/jira.svg',
  terraform: 'img/terraform.svg',
  bicep: 'img/bicep.svg',
  powershell: 'img/powershell.svg',
  bash: 'img/bash.svg',
  windows: 'img/windows.svg',
  linux: 'img/linux.svg',
  macos: 'img/macos.svg',
  android: 'img/android.svg',
  ios: 'img/ios.svg',
  visionos: 'img/visionos.svg',
  arduino: 'img/arduino.svg',
  raspberrypi: 'img/raspberrypi.svg',
  embedded: 'img/embeddedc.svg',
  bitbucket: 'img/bitbucket.svg',
  jenkins: 'img/jenkins.svg',
  proget: 'img/proget.svg',
  postman: 'img/postman.svg',
  powerbi: 'img/powerbi.svg',
  confluence: 'img/confluence.svg',
  teams: 'img/teams.svg',
  slack: 'img/slack.svg',
  discord: 'img/discord.svg',
  vs: 'img/visualstudio.svg',
  vscode: 'img/vscode.svg',
  rider: 'img/rider.svg',
  datagrip: 'img/datagrip.svg',
  dotpeek: 'img/dotpeek.svg',
  svn: 'img/svn.svg',
  nuget: 'img/nuget.svg',
  npm: 'img/npm.svg',
  php: 'img/php.svg',
  js: 'img/javascript.svg',
  html: 'img/html5.svg',
  css: 'img/css3.svg',
  sass: 'img/sass.svg',
  zend: 'img/zend.svg',
  phalcon: 'img/phalcon.svg',
  composer: 'img/composer.svg',
  photoshop: 'img/photoshop.svg',
  ubuntu: 'img/ubuntu.svg',
  debian: 'img/debian.svg',
  oracle: 'img/oracle.svg',
  mssql: 'img/mssql.svg',
  wordpress: 'img/wordpress.svg',
  trello: 'img/trello.svg',
  flarum: 'img/flarum.svg',
  spaceengineers: 'img/spaceengineers.png',
  minecraft: 'img/minecraft.svg',
  rust: 'img/rust.svg',
  stationeers: 'img/stationeers.png',
  farming: 'img/farming.png',
  gitkraken: 'img/gitkraken.svg',
  sourcetree: 'img/sourcetree.svg',
};

const skillSections = [
  {
    titleKey: 'Tools',
    tiles: [
      { icon: skillIcons.github, labelKey: 'GitHub Actions' },
      { icon: skillIcons.gitlab, labelKey: 'GitLab CI/CD' },
      { icon: skillIcons.azuredevops, labelKey: 'Azure DevOps & Pipelines' },
      { icon: skillIcons.jira, labelKey: 'Jira & Agile' },
      { icon: skillIcons.jenkins, labelKey: 'Jenkins' },
      { icon: skillIcons.proget, labelKey: 'ProGet' },
      { icon: skillIcons.postman, labelKey: 'Postman' },
      { icon: skillIcons.powerbi, labelKey: 'Power BI' },
      { icon: skillIcons.confluence, labelKey: 'Confluence' },
      { icon: skillIcons.teams, labelKey: 'Microsoft Teams' },
      { icon: skillIcons.slack, labelKey: 'Slack' },
      { icon: skillIcons.discord, labelKey: 'Discord' },
      { icon: skillIcons.vs, labelKey: 'Visual Studio' },
      { icon: skillIcons.vscode, labelKey: 'VS Code' },
      { icon: skillIcons.rider, labelKey: 'Rider' },
      { icon: skillIcons.datagrip, labelKey: 'DataGrip' },
      { icon: skillIcons.dotpeek, labelKey: 'DotPeek' },
      { icon: skillIcons.svn, labelKey: 'SVN' },
      { icon: skillIcons.nuget, labelKey: 'NuGet' },
      { icon: skillIcons.npm, labelKey: 'NPM' },
      { icon: skillIcons.trello, labelKey: 'Trello' },
      { icon: skillIcons.flarum, labelKey: 'Flarum' },
      { icon: skillIcons.bitbucket, labelKey: 'BitBucket' },
      { icon: skillIcons.gitkraken, labelKey: 'GitKraken' },
      { icon: skillIcons.sourcetree, labelKey: 'SourceTree' },
    ]
  },
  {
    titleKey: 'Software Build & Deploy',
    tiles: [
      { icon: skillIcons.devops, labelKey: 'DevOps Engineering: CI/CD, SDLC, automation, cloud & on-premises integration' },
      { icon: skillIcons.terraform, labelKey: 'Terraform' },
      { icon: skillIcons.bicep, labelKey: 'Bicep & ARM' },
      { icon: skillIcons.powershell, labelKey: 'PowerShell' },
      { icon: skillIcons.bash, labelKey: 'Bash' },
      { icon: skillIcons.windows, labelKey: 'Windows' },
      { icon: skillIcons.linux, labelKey: 'Linux' },
      { icon: skillIcons.macos, labelKey: 'MacOS' },
      { icon: skillIcons.android, labelKey: 'Android' },
      { icon: skillIcons.ios, labelKey: 'iOS' },
      { icon: skillIcons.visionos, labelKey: 'Vision OS' },
      { icon: skillIcons.php, labelKey: 'PHP' },
      { icon: skillIcons.js, labelKey: 'JavaScript' },
      { icon: skillIcons.html, labelKey: 'HTML5' },
      { icon: skillIcons.css, labelKey: 'CSS3' },
      { icon: skillIcons.sass, labelKey: 'SASS' },
      { icon: skillIcons.zend, labelKey: 'Zend Framework' },
      { icon: skillIcons.phalcon, labelKey: 'Phalcon' },
      { icon: skillIcons.composer, labelKey: 'Composer' },
      { icon: skillIcons.photoshop, labelKey: 'Photoshop' },
      { icon: skillIcons.ubuntu, labelKey: 'Ubuntu' },
      { icon: skillIcons.debian, labelKey: 'Debian' },
      { icon: skillIcons.oracle, labelKey: 'Oracle' },
      { icon: skillIcons.mssql, labelKey: 'MS SQL Server' },
      { icon: skillIcons.wordpress, labelKey: 'WordPress' },
    ]
  },
  {
    titleKey: 'IOT Firmware Build & Deploy',
    tiles: [
      { icon: skillIcons.esp32, labelKey: 'ESP32' },
      { icon: skillIcons.stm32, labelKey: 'STM32' },
      { icon: skillIcons.nrf, labelKey: 'Nordic nRF' },
      { icon: skillIcons.arduino, labelKey: 'Arduino' },
      { icon: skillIcons.raspberrypi, labelKey: 'Raspberry Pi' },
      { icon: skillIcons.embedded, labelKey: 'Embedded & IoT pipelines' },
    ]
  },
  {
    titleKey: 'Game/Community Projects',
    tiles: [
      { icon: skillIcons.spaceengineers, labelKey: 'Space Engineers' },
      { icon: skillIcons.minecraft, labelKey: 'Minecraft' },
      { icon: skillIcons.rust, labelKey: 'Rust' },
      { icon: skillIcons.stationeers, labelKey: 'Stationeers' },
      { icon: skillIcons.farming, labelKey: 'Farming Simulator' },
    ]
  }
];

async function setLang(lang) {
  if (currentLang === lang) return;
  currentLang = lang;
  // Dynamically import only the selected language
  const langData = (await languageModules[lang]()).default;
  document.getElementById('mainTitle').textContent = langData.title;
  document.getElementById('mainDesc').textContent = langData.desc;
  document.getElementById('skillsTitle').textContent = langData.skillsTitle;
  // Render skill sections
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = '';
  skillSections.forEach((section, idx) => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'skills-section';
    const sectionTitle = document.createElement('h3');
    sectionTitle.className = 'skills-section-title';
    sectionTitle.textContent = langData.sections && langData.sections[idx] ? langData.sections[idx] : section.titleKey;
    sectionDiv.appendChild(sectionTitle);
    const sectionGrid = document.createElement('div');
    sectionGrid.className = 'skills-grid-inner';
    section.tiles.forEach((tile, i) => {
      const tileDiv = document.createElement('div');
      tileDiv.className = 'skill-tile';
      const img = document.createElement('img');
      img.src = tile.icon;
      img.alt = '';
      const label = document.createElement('div');
      label.className = 'skill-label';
      // Use langData.skills if available, else fallback to labelKey
      label.textContent = langData.skills && langData.skills.length > 0 ? (langData.skills.find(s => s.includes(tile.labelKey.split(':')[0])) || tile.labelKey) : tile.labelKey;
      tileDiv.appendChild(img);
      tileDiv.appendChild(label);
      sectionGrid.appendChild(tileDiv);
    });
    sectionDiv.appendChild(sectionGrid);
    grid.appendChild(sectionDiv);
  });
  document.getElementById('aboutTitle').textContent = langData.aboutTitle;
  document.getElementById('aboutDesc').textContent = langData.aboutDesc;
  // Update language switch button
  document.getElementById('langFlag').src = langData.altFlagSrc;
  document.getElementById('langFlag').alt = langData.altLabel;
  document.getElementById('langLabel').textContent = langData.altLabel;
  localStorage.setItem('lang', lang);
  document.body.setAttribute('data-lang', lang);
}

function detectLang() {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const nav = navigator.language || navigator.userLanguage;
  if (nav.startsWith('pl')) return 'pl';
  return 'en';
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

document.addEventListener('DOMContentLoaded', async () => {
  // Language
  let lang = detectLang();
  await setLang(lang);
  document.getElementById('langBtn').onclick = async () => {
    lang = lang === 'pl' ? 'en' : 'pl';
    await setLang(lang);
  };

  // Theme
  let theme = detectTheme();
  setTheme(theme);
  document.getElementById('themeBtn').onclick = () => {
    theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(theme);
  };
});
