import { Skill } from '../models/portfolio.model';

export const SKILLS: Skill[] = [
    // Frontend
    { name: 'Angular (v12-20)', category: 'frontend', level: 'expert' },
    { name: 'TypeScript', category: 'frontend', level: 'expert' },
    { name: 'JavaScript', category: 'frontend', level: 'expert' },
    { name: 'React.js', category: 'frontend', level: 'advanced' },
    { name: 'Next.js', category: 'frontend', level: 'advanced' },
    { name: 'RxJS', category: 'frontend', level: 'expert' },
    { name: 'Angular Material', category: 'frontend', level: 'expert' },
    { name: 'PrimeNG', category: 'frontend', level: 'advanced' },
    { name: 'Bootstrap', category: 'frontend', level: 'expert' },
    { name: 'SCSS/Sass', category: 'frontend', level: 'expert' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'advanced' },
    { name: 'Micro Frontends', category: 'frontend', level: 'expert' },
    { name: 'Module Federation', category: 'frontend', level: 'expert' },

    // Backend & Desktop
    { name: 'Node.js', category: 'backend', level: 'expert' },
    { name: 'Nest.js', category: 'backend', level: 'expert' },
    { name: 'Express.js', category: 'backend', level: 'expert' },
    { name: 'Electron.js', category: 'backend', level: 'advanced' },
    { name: 'MQTT', category: 'backend', level: 'advanced' },
    { name: 'RESTful APIs', category: 'backend', level: 'expert' },
    { name: 'Prisma ORM', category: 'backend', level: 'advanced' },
    { name: 'MEAN & MERN Stack', category: 'backend', level: 'expert' },

    // Database
    { name: 'MongoDB', category: 'database', level: 'expert' },
    { name: 'MySQL', category: 'database', level: 'advanced' },
    { name: 'SQL Server', category: 'database', level: 'advanced' },
    { name: 'PostgreSQL', category: 'database', level: 'intermediate' },
    { name: 'SQLite', category: 'database', level: 'intermediate' },

    // Modern Workflows & AI Tools
    { name: 'Vibe Coding / Agentic Coding', category: 'tools', level: 'expert' },
    { name: 'GitHub Copilot / Cursor AI / Antigravity', category: 'tools', level: 'expert' },
    { name: 'Git/GitHub/GitLab/Bitbucket', category: 'tools', level: 'expert' },
    { name: 'Docker', category: 'tools', level: 'intermediate' },
    { name: 'Azure / Jira / Clickup', category: 'tools', level: 'advanced' },
    { name: 'Agile / Scrum', category: 'other', level: 'expert' },
    { name: 'Performance Optimization', category: 'other', level: 'expert' },
];
