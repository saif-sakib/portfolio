// All facts on the site come from ../profile/contents.txt (the single source of truth).
// Update contents.txt first, then mirror the change here.

export const person = {
  name: 'Md Saif Ahmed',
  shortName: 'Saif Ahmed',
  headline: 'Software Engineer · Competitive Programmer · Cybersecurity Practitioner',
  location: 'Dhaka, Bangladesh',
  intro:
    'CSE undergraduate at MIST building production software, competing at the ICPC Asia Dhaka Regional, and teaching web security.',
  about: [
    'I am a Computer Science & Engineering student at the Military Institute of Science and Technology (MIST), Dhaka, graduating in 2027. I am the sole developer of Hasnahena, an interest-free cooperative finance platform that has been live with real members since August 2026.',
    'Competitive programming is where I learned to think: I am a Codeforces Specialist with 1700+ problems solved, and my team placed 38th at the ICPC Asia Dhaka Regional 2025. I now lead the MIST Computer Club as President and mentor junior programmers.',
    'On the security side, I play CTFs with my university teams and taught OWASP Top 10 and penetration testing workshops as a Web Security Instructor at the MIST Cyber Security Club.',
  ],
};

export const links = {
  email: 'saifahmedsakib@gmail.com',
  github: 'https://github.com/saif-sakib',
  linkedin: 'https://www.linkedin.com/in/saif-ahmed-8a14651b0',
  codeforces: 'https://codeforces.com/profile/Saif_Ahmed008',
  tryhackme: 'https://tryhackme.com/p/AhmedSakib',
};

export const socials = [
  { label: 'GitHub', handle: 'saif-sakib', href: links.github, icon: 'github' },
  { label: 'LinkedIn', handle: 'Saif Ahmed', href: links.linkedin, icon: 'linkedin' },
  { label: 'Codeforces', handle: 'Saif_Ahmed008', href: links.codeforces, icon: 'chart' },
  { label: 'TryHackMe', handle: 'AhmedSakib', href: links.tryhackme, icon: 'shield' },
] as const;

// PDFs are copied from ../cv/pdf at build time (scripts/sync-cv.mjs).
export const cvs = [
  { label: 'General', file: 'Saif_Ahmed_CV_General.pdf', primary: true },
  { label: 'Backend', file: 'Saif_Ahmed_CV_Backend.pdf' },
  { label: 'Software Engineering', file: 'Saif_Ahmed_CV_Software_Engineering.pdf' },
  { label: 'Cybersecurity', file: 'Saif_Ahmed_CV_Cybersecurity.pdf' },
  { label: 'DevOps', file: 'Saif_Ahmed_CV_DevOps.pdf' },
  { label: 'AI / ML', file: 'Saif_Ahmed_CV_AI_ML.pdf' },
];

export const glance = [
  { value: '38th', label: 'ICPC Asia Dhaka Regional 2025' },
  { value: '1514', label: 'Codeforces max · Specialist' },
  { value: '1700+', label: 'Problems solved' },
  { value: '5th', label: 'Cyber Drill 2025 CTF' },
];

export const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    school: 'Military Institute of Science and Technology (MIST), Dhaka',
    period: '2023 – 2027 (Expected)',
    detail: 'CGPA 3.58 / 4.00 (up to Level-3, Term-2)',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'Govt. M. M. College, Jashore',
    period: '2022',
    detail: 'GPA 5.00 / 5.00',
  },
];

export const featured = {
  name: 'Hasnahena',
  tagline: 'Interest-free cooperative finance platform',
  status: 'Live · Solo developer',
  href: 'https://hasnahenafoundation.com',
  repo: 'https://github.com/saif-sakib/hasnahena',
  summary:
    'Digitises the passbook of Hasnahena Foundation, a community-run interest-free (Qard al-Hasan) cooperative in Jashore, Bangladesh. Live with real members, balances and identity documents since the cutover on 27 August 2026.',
  metrics: [
    { value: 'Aug 2026', label: 'Live with real members' },
    { value: '~180/s', label: 'Postings sustained in load test' },
    { value: '45', label: 'Architecture Decision Records' },
    { value: '< 1 h', label: 'Recovery time objective' },
  ],
  highlights: [
    {
      title: 'Architecture',
      text: 'pnpm monorepo: Next.js 16 web app on Vercel and a Go API on Render that owns every balance-changing write, each in a single transaction with row-level locks; money is whole taka, never floats. PostgreSQL on Neon with Prisma Migrate; fully bilingual English / Bengali.',
    },
    {
      title: 'Security',
      text: 'RBAC on every endpoint, self-hosted JWT with server-side revocation checked by both backends, Cloudflare-aware rate limiting and lockout, append-only audit logs enforced by a database trigger, and per-route Content Security Policies.',
    },
    {
      title: 'Reliability',
      text: 'Daily ledger reconciliation, encrypted daily backups shipped to Cloudflare R2 with a restore drill in CI (RPO 24 h), Prometheus metrics, Sentry and UptimeRobot monitoring.',
    },
    {
      title: 'Testing',
      text: '269 Go tests, including integration tests against real Postgres under -race, Playwright e2e across phone/desktop × English/Bengali, 400k-iteration money arithmetic property tests, and gitleaks secret scanning in CI.',
    },
  ],
  features: [
    'Members, workers and admins with distinct powers',
    'Loans with guarantors, repayments, donations, disputes',
    'Vector PDF statements, receipts and agreements',
    'Support chat over Server-Sent Events',
  ],
  stack: ['Next.js 16', 'TypeScript', 'Go', 'PostgreSQL', 'Prisma', 'Tailwind', 'Cloudflare', 'GitHub Actions', 'Docker'],
};

export type Project = {
  name: string;
  tagline: string;
  kind: 'Team project' | 'Solo' | 'Script' | 'Team · In production';
  description: string;
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    name: 'LocalFix',
    tagline: 'Civic engagement platform',
    kind: 'Team project',
    description:
      'Complaint management system where citizens report civic issues such as roads and waste to authorities. I built the Express API and the Oracle schema (triggers, stored procedures, views, indexes); role-based access control and optimized SQL queries cut data retrieval latency by 40%.',
    stack: ['React', 'Node.js', 'Express', 'Oracle DB', 'JWT', 'Mapbox GL'],
    href: 'https://github.com/saif-sakib/LocalFix',
  },
  {
    name: 'HallBridge',
    tagline: 'Digital hall management system',
    kind: 'Team project',
    description:
      'Seat allocation, billing and notices digitized for 500+ residents, with dedicated dashboards for students, staff and admins, and a smart dining manager with predictive meal planning. I wrote most of the API and data models, including Google OAuth 2.0 sign-in, password reset and the indexes behind the busiest queries.',
    stack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind', 'Supabase', 'GitHub Actions'],
    href: 'https://github.com/Ragib100/HallBridge',
  },
  {
    name: 'QuestBoard',
    tagline: 'Gamified Q&A for STEM students',
    kind: 'Team project',
    description:
      'Post a “quest” with a point bounty; the accepted answer’s author earns the points. I built the whole FastAPI backend: an atomic point ledger, race-safe voting, Codeforces daily challenges, rate-limited LLM hints and 70 pytest tests, deployed on Render.',
    stack: ['Flutter', 'FastAPI', 'Supabase', 'Claude API', 'Sentry', 'pytest'],
    href: 'https://github.com/Ragib100/QuestBoard',
  },
  {
    name: 'MCC Website',
    tagline: 'MIST Computer Club platform',
    kind: 'Team · In production',
    description:
      'The club’s production website with a rich-text editor, in-browser code editor, a Discord bot and containerized services deployed through GitHub Actions. I built the alumni directory (Hono API, migrations and pages) and closed an authorization gap on contest-report endpoints.',
    stack: ['Next.js', 'Bun', 'Hono', 'PostgreSQL', 'Docker', 'discord.js'],
    href: 'https://github.com/istiaqueahmedarik/mcc_website',
  },
  {
    name: 'GyanTori',
    tagline: 'Peer-to-peer book sharing',
    kind: 'Team project',
    description:
      'Desktop virtual library for 500+ students to lend, borrow and catalog books, backed by a MongoDB schema for inventory relationships and transaction history.',
    stack: ['Java', 'JavaFX', 'Maven', 'MongoDB'],
    href: 'https://github.com/saif-sakib/GyanTori',
  },
  {
    name: 'BruteBuddy',
    tagline: 'Automated security testing tool',
    kind: 'Solo',
    description:
      'CLI for fuzzing and brute-force testing of login endpoints: multi-field payloads, custom headers and cookies, automatic re-authentication, and parallel requests for 3× faster runs.',
    stack: ['Python', 'requests', 'ThreadPoolExecutor'],
    href: 'https://github.com/saif-sakib/Brute-Buddy',
  },
  {
    name: 'Rank-Raven',
    tagline: 'Codeforces contest reporter',
    kind: 'Script',
    description:
      'Counts each user’s solves over the last 30 days through the Codeforces API, merges them with student levels and generates a styled multi-page PDF report.',
    stack: ['Python', 'Selenium', 'BeautifulSoup', 'ReportLab'],
    href: 'https://github.com/saif-sakib/Rank-Raven',
  },
  {
    name: 'upsolve_tracker',
    tagline: 'Codeforces upsolve planner',
    kind: 'Script',
    description:
      'Pulls near-miss problems, schedules them over the coming days, times solves and detects AC automatically, with vjudge sync and a dashboard.',
    stack: ['Apps Script', 'Google Sheets', 'Codeforces API', 'clasp'],
    href: 'https://github.com/saif-sakib/upsolve_tracker',
  },
  {
    name: 'Code-Library',
    tagline: 'MIST_EagleForces ICPC notebook',
    kind: 'Script',
    description:
      'Team notebook of code snippets and math notes, with a Python build script that generates the contest PDF.',
    stack: ['C++', 'LaTeX', 'Python', 'Pygments'],
    href: 'https://github.com/saif-sakib/Code-Library',
  },
];

export const cpProfiles = [
  { platform: 'Codeforces', title: 'Specialist', detail: 'Max rating 1514', href: links.codeforces },
  { platform: 'CodeChef', title: '3-Star', detail: 'Max rating 1722' },
  { platform: 'All judges', title: '1700+', detail: 'Codeforces, CodeChef, LeetCode, CSES, AtCoder' },
];

// ICPC Dhaka Regional ranks are "excluding BDOI teams"; official standings in `note`.
export type Result = { contest: string; team: string; rank: string; of?: string; date: string; note?: string; highlight?: boolean };

export const icpc: Result[] = [
  { contest: 'ICPC Asia Dhaka Regional 2025 — Onsite', team: 'MIST_EagleForces', rank: '38th', date: 'Dec 2025', note: 'Excluding BDOI teams · official 39th of 313', highlight: true },
  { contest: 'ICPC Dhaka Regional 2025 — Preliminary', team: 'MIST_EagleForces', rank: '290th', of: '1842', date: 'Nov 2025' },
  { contest: 'ICPC Asia Dhaka Regional 2024 — Onsite', team: 'MIST_ChemistryHaters', rank: '117th', date: 'Dec 2024', note: 'Excluding BDOI teams · official 118th of 310' },
  { contest: 'ICPC Dhaka Regional 2024 — Preliminary', team: 'MIST_ChemistryHaters', rank: '90th', of: '2490', date: 'Nov 2024' },
];

export const iupc: Result[] = [
  { contest: 'NSUCEC Cybernauts IUPC 2026', team: 'MIST_EaglesClaw', rank: '16th', of: '159', date: '2026' },
  { contest: 'IUT 12th ICT Fest IUPC 2026', team: 'MIST_Jackdaw', rank: '46th', of: '111', date: '2026' },
  { contest: 'SUST CSE Carnival IUPC 2026', team: 'MIST_Jackdaw', rank: '44th', of: '137', date: '2026' },
  { contest: 'DUET IUPC 2026', team: 'MIST_Jackdaw', rank: '24th', of: '139', date: '2026' },
  { contest: 'NDUB IUPC 2026', team: 'MIST_EaglesClaw', rank: '32nd', of: '85', date: '2026' },
  { contest: 'CUET IUPC 2025', team: 'MIST_EagleForces', rank: '28th', of: '131', date: '2025' },
  { contest: 'MU CSE Fest IUPC 2025', team: 'MIST_EagleForces', rank: '49th', of: '99', date: '2025' },
  { contest: 'BUP IAUPC 2025 (BUP CSE Tech Carnival)', team: 'MIST_EagleForces', rank: 'Champion', of: '28', date: '2025' },
  { contest: 'Uttara University IUPC 2025', team: 'MIST_EagleForces', rank: '54th', of: '122', date: 'Jun 2025' },
  { contest: 'DUET IUPC 2025', team: 'MIST_ShuRZo', rank: '16th', of: '137', date: '2025' },
  { contest: 'AUST IUPC 2025', team: 'MIST_AlgorithmRejects', rank: '48th', of: '129', date: 'Feb 2025' },
  { contest: 'UIU IUPC 2025', team: 'MIST_AlgorithmRejects', rank: '43rd', of: '161', date: 'Jan 2025' },
  { contest: 'KUET IUPC 2025', team: 'MIST_AlgorithmReject', rank: '89th', of: '161', date: 'Jan 2025', note: 'Official standings' },
];

export const otherCp = 'Meta Hacker Cup 2024 — advanced to Round 2';

export const ctfs = [
  { event: 'Cyber Drill 2025 / WTISD Hackathon', team: 'MIST_Shaheed_Yamin_Forever', rank: '5th', highlight: true },
  { event: 'SMP CTF 2024', team: 'MIST_Shaheed_Yamin_Forever', rank: '13th' },
  { event: 'Bugcrowd USA CTF 2025', team: 'MSYF2.0', rank: '34th', note: 'Global' },
  { event: 'BUET CTF 2024 — Final', team: 'MIST_Hacker_Vab_Skill_r_Ovab', rank: '18th' },
  { event: 'Cyber Raid 2025 — Final', team: 'MIST_Shaheed_Yamin_Forever', rank: '18th' },
  { event: 'BCS ICT Fest CTF 2025', team: 'MIST_Shaheed_Yamin_Forever', rank: '18th' },
  { event: 'DIU Cybercon CTF 2025 — Final', team: 'MSYF2.0', rank: '18th' },
  { event: 'BUP CTF 2025', team: 'MSYF2.0', rank: '18th' },
];

export const training = [
  { value: '70+', label: 'PortSwigger Academy labs across 10+ web security categories' },
  { value: '67+', label: 'PicoCTF challenges solved, plus the OverTheWire Natas series' },
  { value: '29', label: 'TryHackMe rooms completed' },
];

export const certifications = [
  'Hands-on Ethical Hacking and Security Analysis — MIST Cyber Security Club',
  'eShikhon Ethical Hacking Live Course',
];

export type Role = { title: string; org: string; period: string; points: string[]; link?: { label: string; href: string } };

export const experience: Role[] = [
  {
    title: 'President',
    org: 'MIST Computer Club',
    period: 'Jun 2026 – Present',
    points: [
      'Leading club strategy and mentoring 15+ core members to deliver 10+ technical events a year.',
      'Directing ICPC preparation camps and workshops that reach 200+ students.',
    ],
  },
  {
    title: 'Industrial Trainee',
    org: 'JB Connect Ltd (JBC)',
    period: '2026 · 4 weeks',
    points: [
      'Set up the FastAPI backend of the training cohort’s AI content-generation app: router → service → repository layers, env-driven settings, error handlers and a Docker dev setup.',
      'Built the content-generation endpoint behind a mockable AI client, working through feature branches and pull requests, alongside sessions on DevOps, backend and AI/ML.',
    ],
  },
  {
    title: 'Competitive Programming Instructor',
    org: 'MIST Computer Club',
    period: 'May 2024 – Present',
    points: [
      'Mentoring 50+ junior students in algorithms and contest strategy with an 80% retention rate.',
      'Curated 20+ problem sets and mock contests for teams advancing in ICPC preliminaries.',
    ],
  },
  {
    title: 'Executive Director',
    org: 'Mentor Committee',
    period: 'Jun 2025 – Jun 2026',
    points: ['Coordinated security mentoring initiatives and learning tracks.'],
  },
  {
    title: 'Vice President',
    org: 'MIST Computer Club',
    period: 'May 2025 – Jun 2026',
    points: ['Coordinated programming workshops and contest initiatives; supported event operations and training programs for junior members.'],
  },
  {
    title: 'Web Security Instructor',
    org: 'MIST Cyber Security Club',
    period: 'May 2024 – Jun 2026',
    points: ['Ran hands-on OWASP Top 10 workshops with real-world exploitation scenarios; trained 30+ students in penetration testing and secure coding.'],
  },
  {
    title: 'Executive Member',
    org: 'MIST Computer Club',
    period: 'May 2024 – May 2025',
    points: ['Contributed to event logistics and community training activities.'],
  },
];

export const hackathons = ['MIST Intra Hackathon 2025', 'BUP CSE Fest 2026 Hackathon (onsite)'];

export const skills = [
  { group: 'Languages', items: ['C++', 'Go', 'Python', 'TypeScript', 'JavaScript', 'Java', 'Dart', 'SQL', 'Bash'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Radix UI', 'next-intl', 'Flutter', 'JavaFX'] },
  { group: 'Backend', items: ['Go (chi, pgx)', 'Node.js', 'Express', 'FastAPI', 'Bun + Hono', 'REST APIs', 'JWT'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'Oracle Database', 'MySQL', 'Prisma', 'SQLAlchemy', 'Supabase'] },
  { group: 'Cloud & DevOps', items: ['GitHub Actions', 'Docker', 'Vercel', 'Render', 'Neon', 'Cloudflare', 'Sentry', 'UptimeRobot', 'Prometheus', 'Linux'] },
  { group: 'Testing', items: ['Playwright', 'Vitest', 'Go testing', 'pytest', 'ESLint', 'golangci-lint'] },
  { group: 'Security', items: ['OWASP Top 10', 'Penetration testing', 'Burp Suite', 'Wireshark', 'CSP', 'gitleaks', 'RBAC'] },
  { group: 'Core CS', items: ['Data structures', 'Algorithms (graphs, DP, segment trees)', 'OOP', 'System design'] },
];
