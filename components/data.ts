export const links = {
  email: 'parbinders593@gmail.com',
  phone: '+91-8899626090',
  github: 'https://github.com/Parbinder29',
  linkedin: 'https://linkedin.com/in/parbinder-singh-323792357',
  leetcode: 'https://leetcode.com/Parbinder2005',
  resume: 'https://drive.google.com/file/d/10zfZ_hZHlmiUTLAr9c3oJft-RIZsOCTR/view?usp=sharing',
}

export type ProjectKey = 'atmsf' | 'irrigation' | 'garbage'

export const projects: {
  key: ProjectKey
  title: string
  full: string
  category: string
  metric: string
  sticker?: string
  desc: string
  tags: string[]
  href: string
  cta: string
}[] = [
  {
    key: 'atmsf',
    title: 'ATMSF',
    full: 'Adaptive Fault-Tolerant Multi-Sensor Fusion',
    category: 'Computer Vision — B.Tech Project',
    metric: '89.1% mAP@0.5 on KAIST',
    sticker: 'Self-driving perception',
    desc:
      'Fuses RGB, thermal and LiDAR depth. A per-sensor fault detector scores how reliable each sensor is right now, so a blinded camera gets down-weighted instead of corrupting the scene. Beats RGB-only by 19 points.',
    tags: ['PyTorch', 'ResNet-50 + FPN', 'Cross-attention', 'FCOS', 'DeepLabV3+'],
    href: 'https://github.com/Parbinder29/ATMSF',
    cta: 'GitHub',
  },
  {
    key: 'irrigation',
    title: 'Smart Irrigation',
    full: 'Sensor-based Automated Irrigation System',
    category: 'IoT — Design Patent 2025',
    metric: 'Patent No. 450458-001',
    sticker: 'Patented',
    desc:
      'Reads soil moisture and weather in real time and waters the crop only when the field actually needs it. Built with team ShivShakti.',
    tags: ['ESP32', 'Arduino', 'Soil-moisture sensing', 'Automation'],
    href: 'https://drive.google.com/file/d/169--X2yI3_mfc1qauxKwpEYGwO-fSO93/view?usp=sharing',
    cta: 'Project file',
  },
  {
    key: 'garbage',
    title: 'Garbage Classification',
    full: 'EfficientNetV2-B2 Waste Sorter',
    category: 'Deep Learning — Edunet Internship 2025',
    metric: '91.4% test accuracy',
    desc:
      'Transfer learning on EfficientNetV2-B2 sorts waste photos into six classes, with class weighting for an uneven dataset and a Gradio app to try it live.',
    tags: ['TensorFlow · Keras', 'EfficientNetV2', 'scikit-learn', 'Gradio'],
    href: 'https://github.com/Parbinder29/CNN-E2B2-Model',
    cta: 'GitHub',
  },
]

export const experience = [
  {
    org: 'UVIN Group',
    role: 'Web Developer Intern',
    desc:
      'Frontend for a growing startup: built new pages, improved existing features and smoothed out the user experience. Also built UVfIN, the group’s internal finance dashboard, with Next.js and Supabase.',
    href: 'https://drive.google.com/file/d/18W3ZLyUwHn-VTx_mHZYTYQJIUQB-heQL/view?usp=sharing',
  },
  {
    org: 'Edunet Foundation',
    role: 'AI & Data Analytics Intern · Jun – Jul 2025',
    desc:
      'Four-week virtual internship on Artificial Intelligence and Data Analytics with a focus on green skills, under the Skills4Future program by AICTE, Shell India and Edunet Foundation. My Garbage Classification model was built during this program.',
    href: 'https://drive.google.com/file/d/1HC-wEyQpcfhQtGN0uQs35GJNr5UWf7vy/view?usp=sharing',
  },
  {
    org: 'IIT Jammu',
    role: 'Short-Term Course · Digital Forensics',
    desc:
      'Certified short-term course on digital forensics at the Indian Institute of Technology Jammu: how digital evidence is found, preserved and examined.',
    href: 'https://drive.google.com/file/d/1elO2fmdYQGhsZj36UUk6nLIf0pw8hoaf/view?usp=sharing',
  },
]

export const honours: { tag: string; title: string; desc: string; href?: string; cta?: string }[] = [
  {
    tag: '1st place · 2025',
    title: 'Hacktack25',
    desc: 'Won first place among 50+ teams.',
    href: 'https://drive.google.com/file/d/1PnvazmJvFsNYeaJHy2bPnnYCLF__6kt9/view?usp=sharing',
  },
  {
    tag: 'Winner · 2025',
    title: 'Innovate25',
    desc: 'Won the innovation challenge with a technology-driven solution.',
    href: 'https://drive.google.com/file/d/1VV2mVPcBB5FlAZgZ5h8ZYskGIMwiRzDD/view?usp=sharing',
  },
  {
    tag: 'Patent · 2025',
    title: 'Design Patent 450458-001',
    desc: 'Granted for the sensor-based Smart Irrigation Device, with team ShivShakti.',
    href: 'https://drive.google.com/file/d/169--X2yI3_mfc1qauxKwpEYGwO-fSO93/view?usp=sharing',
    cta: 'View patent',
  },
  {
    tag: 'NCC · 2023 – 26',
    title: '‘C’ Certificate · JUO',
    desc: 'Junior Under Officer leading 50+ cadets at Central University of Jammu.',
    href: 'https://drive.google.com/file/d/13tS8vaO2S8mdmWBdLxiaEt7YC1uzOuck/view?usp=sharing',
  },
  {
    tag: 'NCC · 2025',
    title: 'All India Thal Sainik Camp',
    desc: 'One of the most demanding NCC camps in the country, held at DG NCC, Delhi.',
    href: 'https://drive.google.com/file/d/1HIB1UG1BguefQ6peO3DYqk67bnA22OdO/view?usp=sharing',
  },
]

/* `used` ties a skill to the projects it was used in, which drives the skill filter. */
export const skillGroups: { name: string; skills: { name: string; used?: ProjectKey[] }[] }[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'Python', used: ['atmsf', 'garbage'] },
      { name: 'C', used: ['irrigation'] },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'SQL' },
    ],
  },
  {
    name: 'AI & Computer Vision',
    skills: [
      { name: 'PyTorch', used: ['atmsf'] },
      { name: 'TensorFlow · Keras', used: ['garbage'] },
      { name: 'OpenCV', used: ['atmsf'] },
      { name: 'Transfer learning', used: ['atmsf', 'garbage'] },
      { name: 'Multi-sensor fusion', used: ['atmsf'] },
      { name: 'Object detection', used: ['atmsf'] },
      { name: 'Segmentation', used: ['atmsf'] },
      { name: 'timm · Albumentations', used: ['atmsf'] },
      { name: 'scikit-learn', used: ['garbage'] },
    ],
  },
  {
    name: 'Data',
    skills: [
      { name: 'NumPy', used: ['atmsf', 'garbage'] },
      { name: 'Pandas', used: ['garbage'] },
      { name: 'Matplotlib · Seaborn', used: ['atmsf', 'garbage'] },
      { name: 'TensorBoard', used: ['atmsf'] },
      { name: 'Jupyter', used: ['atmsf', 'garbage'] },
    ],
  },
  {
    name: 'Web',
    skills: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'Tailwind CSS' },
      { name: 'Supabase' },
      { name: 'PostgreSQL' },
      { name: 'HTML · CSS' },
    ],
  },
  {
    name: 'IoT & Embedded',
    skills: [
      { name: 'Arduino', used: ['irrigation'] },
      { name: 'ESP32 · ESP8266', used: ['irrigation'] },
      { name: 'Raspberry Pi' },
      { name: 'Sensor integration', used: ['irrigation'] },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git · GitHub', used: ['atmsf', 'irrigation', 'garbage'] },
      { name: 'Gradio', used: ['garbage'] },
      { name: 'Docker' },
      { name: 'Vercel' },
      { name: 'VS Code' },
    ],
  },
]
