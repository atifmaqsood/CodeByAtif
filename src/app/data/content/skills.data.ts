import { Skill } from '../models/portfolio.model';

export const SKILLS: Skill[] = [
    // Frontend
    { name: 'Angular (v12-20)', category: 'frontend', level: 'expert' },
    { name: 'TypeScript', category: 'frontend', level: 'expert' },
    { name: 'JavaScript', category: 'frontend', level: 'expert' },
    { name: 'React.js', category: 'frontend', level: 'advanced' },
    { name: 'Next.js', category: 'frontend', level: 'advanced' },
    { name: 'Vue.js', category: 'frontend', level: 'advanced' },
    { name: 'RxJS', category: 'frontend', level: 'expert' },
    { name: 'Angular Material', category: 'frontend', level: 'expert' },
    { name: 'PrimeNG', category: 'frontend', level: 'advanced' },
    { name: 'SCSS/Sass', category: 'frontend', level: 'expert' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'advanced' },
    { name: 'HTML5/CSS3', category: 'frontend', level: 'expert' },
    { name: 'Responsive Design', category: 'frontend', level: 'expert' },
    { name: 'Micro Frontends', category: 'frontend', level: 'expert' },
    { name: 'Module Federation', category: 'frontend', level: 'expert' },

    // Backend
    { name: 'Node.js', category: 'backend', level: 'expert' },
    { name: 'Express.js', category: 'backend', level: 'expert' },
    { name: 'Nest.js', category: 'backend', level: 'advanced' },
    { name: 'RESTful APIs', category: 'backend', level: 'expert' },
    { name: 'GraphQL', category: 'backend', level: 'intermediate' },
    { name: 'JWT Authentication', category: 'backend', level: 'expert' },
    { name: 'Prisma ORM', category: 'backend', level: 'advanced' },

    // Database
    { name: 'MongoDB', category: 'database', level: 'expert' },
    { name: 'MySQL', category: 'database', level: 'advanced' },
    { name: 'SQL Server', category: 'database', level: 'advanced' },
    { name: 'PostgreSQL', category: 'database', level: 'intermediate' },

    // Tools & Others
    { name: 'Git/GitHub', category: 'tools', level: 'expert' },
    { name: 'Webpack', category: 'tools', level: 'advanced' },
    { name: 'npm/yarn', category: 'tools', level: 'expert' },
    { name: 'VS Code', category: 'tools', level: 'expert' },
    { name: 'Docker', category: 'tools', level: 'intermediate' },
    { name: 'WordPress', category: 'tools', level: 'advanced' },
    { name: 'Agile/Scrum', category: 'other', level: 'advanced' },
    { name: 'UI/UX Design', category: 'other', level: 'advanced' },
    { name: 'Performance Optimization', category: 'other', level: 'expert' },
];
