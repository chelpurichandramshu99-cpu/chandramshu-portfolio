/**
 * Portfolio content customized for Chandramshu Chelpuri.
 * Details are based on the supplied resume and information provided by Chandramshu.
 * Project descriptions do not claim unreported metrics or completed deployment.
 */
export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Chandramshu Chelpuri',
  displayName: 'Chandramshu Chelpuri',
  firstName: 'CHANDRAMSHU',
  seriesTag: 'THE SERIES',
  originalLabel: 'A CHANDRAMSHU ORIGINAL',
  role: 'Computer Science & Engineering Student',
  tagline: ['Full-Stack Development', 'AI for Accessibility', 'Problem Solving'],
  intro:
    'A Computer Science and Engineering student at RGUKT Basar who enjoys building practical web applications and exploring AI-powered solutions. Interested in full-stack development, accessible technology, and creating tools that make digital experiences more useful and inclusive.',
  location: 'Telangana, India',
  email: 'chelpurichandramshu99@gmail.com',
  phone: '+91-7013661762',
  links: {
    linkedin: 'https://www.linkedin.com/in/chandramshu-chelpuri-740a2b426',
    github: 'https://github.com/chelpurichandramshu99-cpu',
  },
  resumePdf: '/assets/Chandramshu_Chelpuri_Resume.pdf',
  portrait: {
    src: '/assets/my-photo.jpg',
    srcSet: '/assets/my-photo.jpg 420w, /assets/my-photo.jpg 720w, /assets/my-photo.jpg 1100w',
    alt: 'Chandramshu Chelpuri profile placeholder',
  },
  interests: ['Full-Stack Development', 'AI & Accessibility', 'Computer Vision', 'Cloud Deployment'],
};

export const education = [
  {
    school: 'RGUKT Basar',
    place: 'Basar, Telangana',
    degree: 'B.Tech — Computer Science and Engineering',
    period: '2024 – 2028',
    score: 'CGPA 8.81/10.0',
  },
  {
    school: 'RGUKT Basar',
    place: 'Basar, Telangana',
    degree: 'Pre-University Course (PUC)',
    period: '2022 – 2024',
    score: 'GPA 9.83/10.0',
  },
  {
    school: 'TSMS Elagandal',
    place: 'Telangana',
    degree: '10th Standard',
    period: '2021 – 2022',
    score: 'GPA 9.8/10.0',
  },
];

export const experience: {
  company: string; role: string; place: string; period: string; points: string[];
}[] = [];

export type Metric = { value: string; label: string };
export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'drishti-ai',
    title: 'Drishti AI',
    year: '2026',
    genre: 'AI • Accessibility • Hackathon',
    logline: 'A voice-first, multilingual accessibility assistant created for Megathon X at IIIT Hyderabad.',
    stack: ['Speech Recognition', 'OCR', 'Translation', 'AI Reasoning'],
    build: [
      'Designed around helping people with visual, motor, or age-related accessibility challenges interact with digital content through speech.',
      'Users can upload documents or restaurant menus, ask questions in their preferred language, and receive spoken, easy-to-understand responses.',
    ],
    features: [
      'Voice-first interaction',
      'Multilingual support',
      'Document and restaurant-menu uploads',
      'OCR and translation',
      'AI-powered question answering with spoken responses',
    ],
    metrics: [],
    palette: { ...ocean, accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'dms-sih',
    title: 'Document Management System (DMS) – SIH',
    year: '2026',
    genre: 'Full-Stack • Document Management • SIH',
    logline: 'A centralized platform concept for securely storing, organizing, searching, and retrieving documents.',
    stack: ['Document Uploads', 'Access Control', 'Cloud Deployment', 'AWS S3 (planned)'],
    build: [
      'The project aims to make document handling easier through a centralized digital platform with document uploads, access control, organization, search, and retrieval.',
      'Current work includes preparing the project for online deployment and evaluating cloud services such as AWS S3. Deployment and additional features are still in progress.',
    ],
    features: [
      'Centralized document storage',
      'Document uploads and organization',
      'Access-control concepts',
      'Search and retrieval',
      'Cloud deployment preparation',
    ],
    metrics: [],
    palette: { ...violet, accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'smart-campus',
    title: 'Smart Campus Complaint Management System',
    year: '2025',
    genre: 'Full-Stack • MERN',
    logline: 'A web-based system to register, assign, track, and manage campus complaints and maintenance requests.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
    build: [
      'Developed a web-based system for registering, assigning, tracking, and managing campus complaints and maintenance requests.',
      'Implemented authentication and REST APIs to support complaint handling and status tracking.',
    ],
    features: [
      'Complaint and maintenance-request registration',
      'Assignment and tracking',
      'Status updates',
      'Authentication',
      'REST API integration',
    ],
    metrics: [],
    palette: { ...crimson, accent: '#ff3d5a' },
    motif: 'tenants',
  },
  {
    id: 'gesture-car-game',
    title: 'Hand Gesture Controlled Car Game',
    year: '2025',
    genre: 'Python • OpenCV • Computer Vision',
    logline: 'An interactive car racing game controlled through real-time hand gestures.',
    stack: ['Python', 'OpenCV', 'Hand Tracking', 'Collision Detection'],
    build: [
      'Developed an interactive car racing game where the vehicle is controlled using real-time hand gestures.',
      'Implemented hand tracking, vehicle movement, obstacle avoidance, and collision detection.',
    ],
    features: [
      'Real-time hand tracking',
      'Gesture-based vehicle movement',
      'Obstacle avoidance',
      'Collision detection',
    ],
    metrics: [],
    palette: { ...jade, accent: '#46e3a8' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string; title: string; org: string; detail: string; laurel: string; link?: string;
};
export const achievements: Achievement[] = [
  {
    id: 'sih-internal-winner',
    title: 'Winner',
    org: 'SIH 2026 Internal Hackathon',
    detail: 'Won the internal hackathon with the Document Management System (DMS) project.',
    laurel: 'Hackathon Winner',
  },
  {
    id: 'megathon-iiith',
    title: 'Participant',
    org: 'Megathon X · IIIT Hyderabad · 2026',
    detail: 'Participated with Drishti AI, a voice-first, multilingual accessibility assistant.',
    laurel: 'Hackathon Participant',
  },
  {
    id: 'class-representative',
    title: 'Class Representative',
    org: 'RGUKT Basar',
    detail: 'Served as a Class Representative (CR).',
    laurel: 'Leadership',
  },
];

export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Programming foundations',
    skills: [
      { name: 'Java', mono: 'Ja' }, { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' }, { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'web',
    title: 'Web & Frameworks',
    subtitle: 'Building web applications',
    skills: [
      { name: 'React.js', mono: 'Re' }, { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' }, { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'MERN Stack', mono: 'Me' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Storing and retrieving data',
    skills: [{ name: 'MongoDB', mono: 'Mg' }, { name: 'MySQL', mono: 'My' }],
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    subtitle: 'Development workflow',
    skills: [
      { name: 'OpenCV', mono: 'Cv' }, { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' }, { name: 'Linux', mono: 'Li' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Java: ['Programming Languages'],
  Python: ['Hand Gesture Controlled Car Game', 'Programming Languages'],
  C: ['Programming Languages'],
  JavaScript: ['Web & Frameworks'],
  'React.js': ['Smart Campus Complaint Management System'],
  'Node.js': ['Smart Campus Complaint Management System'],
  'Express.js': ['Smart Campus Complaint Management System'],
  'Tailwind CSS': ['Web & Frameworks'],
  'MERN Stack': ['Smart Campus Complaint Management System'],
  MongoDB: ['Smart Campus Complaint Management System'],
  MySQL: ['Databases'],
  OpenCV: ['Hand Gesture Controlled Car Game'],
  Git: ['Tools & Technologies'],
  GitHub: ['Tools & Technologies'],
  Linux: ['Tools & Technologies'],
};

export type Episode = {
  code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette;
};
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2021 – 2024',
    synopsis: 'School and pre-university studies at TSMS Elagandal and RGUKT Basar.',
    episodes: [
      { code: 'S01 E01', title: 'School Years', description: 'Completed 10th Standard with a GPA of 9.8/10.0.', tags: ['10th Standard', 'GPA 9.8'], runtime: '2021 – 2022', palette: amber },
      { code: 'S01 E02', title: 'Pre-University', description: 'Completed PUC at RGUKT Basar with a GPA of 9.83/10.0.', tags: ['PUC', 'GPA 9.83'], runtime: '2022 – 2024', palette: violet },
    ],
  },
  {
    number: 2,
    title: 'Computer Science',
    period: '2024 – 2028',
    synopsis: 'B.Tech in Computer Science and Engineering at RGUKT Basar, building foundations in software and systems.',
    episodes: [
      { code: 'S02 E01', title: 'The Engineer', description: 'B.Tech in Computer Science and Engineering with a CGPA of 8.81/10.0.', tags: ['B.Tech', 'CSE', 'CGPA 8.81'], runtime: '2024 – 2028', palette: ocean },
      { code: 'S02 E02', title: 'Learning by Building', description: 'Built projects spanning web applications, document management, accessibility, and computer vision.', tags: ['Full-Stack', 'AI', 'OpenCV'], runtime: 'Project journey', palette: jade },
    ],
  },
  {
    number: 3,
    title: 'Hackathon Stories',
    period: '2026',
    synopsis: 'Collaborative problem-solving through hackathon projects and prototypes.',
    episodes: [
      { code: 'S03 E01', title: 'Drishti AI', description: 'Participated in Megathon X at IIIT Hyderabad with a voice-first multilingual accessibility assistant.', tags: ['Megathon X', 'Accessibility', 'AI'], runtime: '2026', palette: ocean },
      { code: 'S03 E02', title: 'DMS – SIH', description: 'Winner of the SIH 2026 Internal Hackathon with a Document Management System project.', tags: ['SIH 2026', 'Winner', 'DMS'], runtime: '2026', palette: violet },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Current degree', title: 'B.Tech CSE', detail: 'RGUKT Basar · 2024–2028', palette: ocean },
  { label: 'Hackathon project', title: 'Drishti AI', detail: 'Multilingual accessibility assistant', palette: jade },
  { label: 'Hackathon win', title: 'SIH 2026 Internal', detail: 'Winner · Document Management System', palette: violet },
  { label: 'Full-stack project', title: 'Smart Campus', detail: 'MERN Stack · Complaint Management', palette: crimson },
  { label: 'Computer vision', title: 'Gesture-Controlled Game', detail: 'Python · OpenCV', palette: amber },
  { label: 'Focus area', title: 'Accessible Technology', detail: 'Making digital experiences more inclusive', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'B.Tech · CSE', lines: ['RGUKT Basar, Telangana', '2024 – 2028'], chips: ['CGPA 8.81/10.0'] },
  { kicker: 'Skills', title: 'Build with code.', lines: ['Java · Python · C · JavaScript', 'React.js · Node.js · Express.js · MERN Stack', 'MongoDB · MySQL · OpenCV · Git · Linux'], chips: ['Java', 'Python', 'React.js', 'MERN', 'OpenCV'] },
  { kicker: 'Projects', title: 'Projects with purpose', lines: ['Drishti AI — voice-first multilingual accessibility', 'DMS – SIH — centralized document management', 'Smart Campus — complaint tracking with MERN', 'Hand Gesture Car Game — Python and OpenCV'] },
  { kicker: 'Achievements', title: 'Hackathon moments', lines: ['Winner — SIH 2026 Internal Hackathon', 'Participant — Megathon X at IIIT Hyderabad, 2026', 'Class Representative — RGUKT Basar'] },
  { kicker: 'Current mission', title: 'Building what matters', lines: ['Full-stack development · AI accessibility · Computer vision'] },
];

export type ProfileId = 'chandramshu' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'chandramshu', name: 'Chandramshu', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Education, projects & achievements first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects, stack & GitHub first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Creative', blurb: 'The story arc & highlights first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Projects • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights from my journey', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Highlights`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
