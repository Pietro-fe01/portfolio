import cvFile from '../assets/pietrofecarotta-cv-2026.pdf';
import logoMark from '../assets/loghi/logo.png';
import dcComicsCover from '../assets/project-img/dc-comics.jpg';
import discordCover from '../assets/project-img/discord.png';
import dropboxCover from '../assets/project-img/dropbox.png';
import boolflixCover from '../assets/project-img/netflix.png';
import spotifyCover from '../assets/project-img/spotify-web.png';
import boolzappCover from '../assets/project-img/whatsapp-web2.png';

export const profile = {
  name: 'Pietro Fecarotta',
  role: 'Full Stack Web Developer',
  location: 'Palermo, Sicilia',
  email: 'pietrofecarotta2001@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pietro-fecarotta-77851822b/',
  github: 'https://github.com/Pietro-fe01',
  summary:
    'Sviluppo interfacce e prodotti digitali con taglio full stack, tra Laravel, Vue, NativeScript ed Electron.',
  intro:
    'Negli ultimi 3 anni ho lavorato su backoffice, survey platform, app verticali e utility desktop, con attenzione a UX, code quality e delivery.',
  cvFile,
  logoMark,
};

export const heroMetrics = [
  {
    value: '3+',
    label: 'anni di esperienza',
  },
  {
    value: 'Web / Mobile / Desktop',
    label: 'product contexts',
  },
  {
    value: 'Laravel / NativeScript / Electron',
    label: 'core stack',
  },
];

export const heroBadges = [
  'Laravel',
  'Vue.js',
  'NativeScript',
  'Electron',
  'Tailwind CSS',
  'Livewire',
  'jQuery',
  'MySQL',
  'Linux / Apache',
  'Git',
];

export const dailyFocus = [
  'multi-role backoffice',
  'survey platform e reporting',
  'NativeScript app con camera, push e webview',
  'Electron tools per workflow specifici',
  'deploy e maintenance su Linux / Apache',
];

export const careerTimeline = [
  {
    year: '2022',
    title: 'Formazione full stack e basi solide',
    text:
      'Con Boolean ho consolidato frontend, JavaScript, Vue, PHP e Laravel, passando dagli esercizi ai primi flussi end-to-end.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vue', 'PHP', 'Laravel'],
  },
  {
    year: '2023',
    title: 'Ingresso su progetti reali',
    text:
      'Il lavoro si è spostato su dashboard, ruoli, auth, CRUD articolati, allegati e reporting con logiche operative reali.',
    tags: ['gestionali', 'CRUD', 'report', 'autenticazione', 'MySQL'],
  },
  {
    year: '2024',
    title: 'Estensione verso mobile e desktop',
    text:
      'Oltre al web ho iniziato a lavorare su app NativeScript ed Electron, tra camera, notifiche, geolocalizzazione e workflow dedicati.',
    tags: ['NativeScript', 'Electron', 'camera', 'push', 'device integration'],
  },
  {
    year: 'Oggi',
    title: 'UX-minded full stack profile',
    text:
      'Oggi porto insieme UI, backend, mobile, desktop e delivery tecnica, con un approccio concreto e orientato al prodotto.',
    tags: ['UX/UI', 'Laravel', 'NativeScript', 'Electron', 'Linux / Apache'],
  },
];

export const realWorkAreas = [
  {
    title: 'Gestionali e backoffice',
    text:
      'Utenti, ruoli, permessi, anagrafiche, allegati, ore lavorate e reporting.',
  },
  {
    title: 'Customer journey e survey',
    text:
      'Survey, codici, email flow, dashboard e lettura dei dati.',
  },
  {
    title: 'App mobile con NativeScript',
    text:
      'App Android e iOS con camera, webview, push, geolocation e permessi.',
  },
  {
    title: 'Utility desktop con Electron',
    text:
      'Tool desktop per workflow locali, device flow e integrazioni dedicate.',
  },
  {
    title: 'Frontend curato e leggibile',
    text:
      'UI pulita, responsive e pensata per aiutare davvero chi la usa.',
  },
  {
    title: 'Deploy, server e terminale',
    text:
      'Linux, Ubuntu, Apache, MySQL, Git, debugging e messa online.',
  },
];

export const dailyTasks = [
  'autenticazione, ruoli e permessi',
  'CRUD complessi e pannelli amministrativi',
  'ore lavorate, report e PDF',
  'survey, codici e invii email',
  'upload immagini e documenti',
  'chat e messaggi interni',
  'app mobile con webview, push e camera',
  'debugging e deploy su server Linux',
];

export const workingStyle = [
  {
    title: 'Design clarity',
    text:
      'Cerco interfacce chiare e codice leggibile, senza rumore inutile.',
  },
  {
    title: 'Operational UX',
    text:
      'Una UI valida deve migliorare il flusso, non solo apparire bene.',
  },
  {
    title: 'Cross-functional mindset',
    text:
      'Lavoro bene quando frontend, backend e delivery si parlano davvero.',
  },
  {
    title: 'End-to-end ownership',
    text:
      'Mi interessa seguire build, stabilità, manutenzione e rilascio.',
  },
];

export const stackGroups = [
  {
    name: 'Frontend',
    icon: 'fa-solid fa-bezier-curve',
    items: [
      'HTML',
      'CSS',
      'Sass',
      'JavaScript',
      'Vue.js',
      'jQuery',
      'Tailwind CSS',
      'Bootstrap',
      'Vite',
    ],
  },
  {
    name: 'Backend',
    icon: 'fa-solid fa-server',
    items: [
      'PHP',
      'Laravel',
      'Livewire',
      'Node.js',
      'MySQL',
      'phpMyAdmin',
      'REST / API integration',
      'auth & ruoli',
      'report / PDF',
    ],
  },
  {
    name: 'Mobile & Desktop',
    icon: 'fa-solid fa-mobile-screen-button',
    items: ['NativeScript', 'Electron', 'Camera', 'Push notifications', 'Geolocation', 'WebView'],
  },
  {
    name: 'Infra & Workflow',
    icon: 'fa-solid fa-terminal',
    items: ['Apache', 'Ubuntu', 'Linux server CLI', 'Git', 'Debugging', 'Build & deploy mindset'],
  },
];

export const caseStudies = [
  {
    code: 'OPS-01',
    title: 'Project Cantieri',
    subtitle: 'Operational backoffice',
    scope: 'Laravel / private product',
    visibility: 'Private',
    accent: '#c8a25a',
    overview:
      'Backoffice multi-ruolo per cantieri, risorse, documenti, ore lavorate, preventivi e messaggistica interna.',
    highlights: [
      'users & permissions',
      'cantieri, mezzi e risorse',
      'preventivi e pagamenti',
      'messaggi interni',
      'report e PDF',
    ],
    stack: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery', 'reportistica'],
  },
  {
    code: 'TRI-02',
    title: 'Trichology',
    subtitle: 'Vertical product ecosystem',
    scope: 'Laravel / private product',
    visibility: 'Private',
    accent: '#b98a4c',
    overview:
      'Piattaforma verticale con customer area, analisi con immagini, storico, survey e touchpoint tra web, mobile e desktop.',
    highlights: [
      'customer management',
      'analisi con immagini e note',
      'survey e certificazioni',
      'marketing segmentato',
      'endpoint per NativeScript ed Electron',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'media management', 'API interne'],
  },
  {
    code: 'MOB-03',
    title: 'NativeScript App Flow',
    subtitle: 'Cross-platform app flow',
    scope: 'NativeScript / private work',
    visibility: 'Private',
    accent: '#d8bc84',
    overview:
      'App verticali collegate al web con camera, push, webview, geolocalizzazione e gestione dei permessi.',
    highlights: [
      'Android e iOS',
      'camera e image picker',
      'Firebase messaging',
      'geolocalizzazione e permessi',
      'integrazione con sistemi web esistenti',
    ],
    stack: ['NativeScript', 'Firebase', 'WebView', 'Android / iOS'],
  },
  {
    code: 'CXP-04',
    title: 'Customer Experience',
    subtitle: 'Survey & reporting platform',
    scope: 'Laravel / private product',
    visibility: 'Private',
    accent: '#9d7940',
    overview:
      'Piattaforma orientata a survey, codici, report e flussi amministrativi con ruoli differenziati.',
    highlights: [
      'self assessment survey',
      'report e lettura risultati',
      'creazione codici e account',
      'invio survey via email',
    ],
    stack: ['Laravel', 'MySQL', 'Bootstrap', 'reporting'],
  },
  {
    code: 'DSK-05',
    title: 'Electron Utilities',
    subtitle: 'Desktop workflow tools',
    scope: 'Electron / private work',
    visibility: 'Private',
    accent: '#7f6031',
    overview:
      'Utility Electron per microcamera, integrazioni locali, servizi dedicati e flussi fuori dal browser.',
    highlights: [
      'microcamera desktop',
      'integrazione hardware',
      'distribution e update flow',
      'bridge con API e servizi web',
    ],
    stack: ['Electron', 'Node.js', 'Axios', 'device integration'],
  },
  {
    code: 'BLN-06',
    title: 'Base formativa Boolean',
    subtitle: 'Training phase, solid foundations',
    scope: 'Training / public archive',
    visibility: 'Archive',
    accent: '#b6a27d',
    overview:
      'La fase in cui ho costruito metodo, ritmo e basi tecniche prima del lavoro su prodotti reali.',
    highlights: [
      'HTML e CSS responsive',
      'JavaScript e Vue',
      'PHP e Laravel',
      'primi flussi end-to-end',
    ],
    stack: ['Boolean', 'Vue', 'Laravel', 'MySQL'],
  },
];

export const publicProjects = [
  {
    title: 'DC Comics',
    category: 'Vue.js',
    summary: 'Clone frontend con componenti, card dinamiche e struttura editoriale ispirata al sito DC.',
    image: dcComicsCover,
    repoHref: 'https://github.com/Pietro-fe01/vite-comics',
  },
  {
    title: 'Discord',
    category: 'HTML/CSS',
    summary: 'Landing page responsive con hero illustrata, CTA ben leggibili e ritmo visivo forte.',
    image: discordCover,
    repoHref: 'https://github.com/Pietro-fe01/htmlcss-discord',
    liveHref: 'https://pietro-fe01.github.io/htmlcss-discord/',
  },
  {
    title: 'Dropbox',
    category: 'HTML/CSS',
    summary: 'Pagina marketing con forte gerarchia tipografica e layout a blocchi ben costruito.',
    image: dropboxCover,
    repoHref: 'https://github.com/Pietro-fe01/htmlcss-dropbox',
    liveHref: 'https://pietro-fe01.github.io/htmlcss-dropbox/',
  },
  {
    title: 'Boolflix',
    category: 'Vue.js',
    summary: 'Interfaccia ispirata a Netflix con ricerca, catalogo film e rendering dinamico via API.',
    image: boolflixCover,
    repoHref: 'https://github.com/Pietro-fe01/vite-boolflix',
  },
  {
    title: 'Spotify Web',
    category: 'HTML/CSS',
    summary: 'Replica responsive con sidebar, player area e una UI dark molto riconoscibile.',
    image: spotifyCover,
    repoHref: 'https://github.com/Pietro-fe01/html-css-spotifyweb',
    liveHref: 'https://pietro-fe01.github.io/html-css-spotifyweb/',
  },
  {
    title: 'Boolzapp',
    category: 'Vue.js',
    summary: 'Chat app ispirata a WhatsApp con ricerca contatti, messaggi e stato gestito in Vue.',
    image: boolzappCover,
    repoHref: 'https://github.com/Pietro-fe01/vue-boolzapp',
    liveHref: 'https://pietro-fe01.github.io/vue-boolzapp/',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: 'fa-brands fa-linkedin-in',
  },
  {
    label: 'GitHub',
    href: profile.github,
    icon: 'fa-brands fa-github',
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: 'fa-solid fa-envelope',
  },
];
