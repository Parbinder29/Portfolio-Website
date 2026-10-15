export const links = {
  email: 'parbinders593@gmail.com',
  phone: '+91-8899626090',
  github: 'https://github.com/Parbinder29',
  linkedin: 'https://linkedin.com/in/parbinder-singh-323792357',
  leetcode: 'https://leetcode.com/Parbinder2005',
}

export type ProjectKey = 'atmsf' | 'irrigation' | 'garbage'

export const projects: {
  key: ProjectKey
  kanji: string
  field: string
  title: string
  full: string
  hook: string
  stat: { value: string; label: string }
  tags: string[]
  href: string
  cta: string
}[] = [
  {
    key: 'atmsf',
    kanji: '眼',
    field: 'Computer Vision · Autonomous Perception',
    title: 'ATMSF',
    full: 'Adaptive Fault-Tolerant Multi-Sensor Fusion',
    hook:
      'Fuses RGB, thermal and LiDAR depth for self-driving perception. A per-sensor fault detector scores how reliable each sensor is right now, so a blinded camera is down-weighted instead of corrupting the scene.',
    stat: { value: '89.1%', label: 'mAP@0.5 on KAIST, vs 70.0% RGB-only' },
    tags: ['PyTorch', 'ResNet-50 + FPN', 'Cross-attention', 'FCOS', 'DeepLabV3+'],
    href: 'https://github.com/Parbinder29/ATMSF',
    cta: 'View on GitHub',
  },
  {
    key: 'irrigation',
    kanji: '水',
    field: 'IoT · Agriculture',
    title: 'Smart Irrigation',
    full: 'Sensor-based Automated Irrigation System',
    hook:
      'Reads soil moisture and weather in real time and waters the crop only when the field actually needs it. Built with team ShivShakti, and granted a design patent.',
    stat: { value: 'Patent', label: 'Design No. 450458-001 (2025)' },
    tags: ['ESP32', 'Arduino', 'Soil-moisture sensing', 'Automation'],
    href: 'https://drive.google.com/file/d/169--X2yI3_mfc1qauxKwpEYGwO-fSO93/view?usp=sharing',
    cta: 'Open project file',
  },
  {
    key: 'garbage',
    kanji: '環',
    field: 'Deep Learning · Sustainability',
    title: 'Garbage Classification',
    full: 'EfficientNetV2-B2 Waste Sorter',
    hook:
      'Transfer learning on EfficientNetV2-B2 sorts waste photos into six classes, with class weighting for an uneven dataset and a Gradio app to try it live.',
    stat: { value: '91.4%', label: 'test accuracy · 6 classes · 2,527 images' },
    tags: ['TensorFlow · Keras', 'EfficientNetV2', 'scikit-learn', 'Gradio'],
    href: 'https://github.com/Parbinder29/CNN-E2B2-Model',
    cta: 'View on GitHub',
  },
]

export const experience = [
  {
    org: 'UVIN Group',
    role: 'Web Developer Intern',
    kind: 'Internship',
    desc:
      'Frontend development for a growing startup: built new pages, improved existing features and smoothed out the user experience. Also built UVfIN, the group’s internal finance dashboard, with Next.js and Supabase.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    href: 'https://drive.google.com/file/d/18W3ZLyUwHn-VTx_mHZYTYQJIUQB-heQL/view?usp=sharing',
  },
  {
    org: 'IIT Jammu',
    role: 'Short-Term Course · Digital Forensics',
    kind: 'Certification',
    desc:
      'Certified short-term course on digital forensics at the Indian Institute of Technology Jammu: how digital evidence is found, preserved and examined.',
    tags: ['Digital forensics', 'Cyber security'],
    href: 'https://drive.google.com/file/d/1elO2fmdYQGhsZj36UUk6nLIf0pw8hoaf/view?usp=sharing',
  },
]

export const honours: {
  seal: string
  year: string
  title: string
  desc: string
  href?: string
}[] = [
  {
    seal: '勝',
    year: '2025',
    title: 'Hacktack25 · 1st Place',
    desc: 'Won first place among 50+ teams.',
    href: 'https://drive.google.com/file/d/1PnvazmJvFsNYeaJHy2bPnnYCLF__6kt9/view?usp=sharing',
  },
  {
    seal: '創',
    year: '2025',
    title: 'Innovate25 · Winner',
    desc: 'Won the innovation challenge with a technology-driven solution.',
    href: 'https://drive.google.com/file/d/1VV2mVPcBB5FlAZgZ5h8ZYskGIMwiRzDD/view?usp=sharing',
  },
  {
    seal: '特',
    year: '2025',
    title: 'Design Patent 450458-001',
    desc: 'Granted for the sensor-based Smart Irrigation Device, with team ShivShakti.',
  },
  {
    seal: '隊',
    year: '2023 – 26',
    title: 'NCC ‘C’ Certificate · JUO',
    desc: 'Junior Under Officer leading 50+ cadets at Central University of Jammu.',
    href: 'https://drive.google.com/file/d/13tS8vaO2S8mdmWBdLxiaEt7YC1uzOuck/view?usp=sharing',
  },
  {
    seal: '陣',
    year: '2025',
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
