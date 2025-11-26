import { Experience } from '../models/portfolio.model';

export const EXPERIENCES: Experience[] = [
    {
        id: '1',
        company: 'NKU Technologies',
        position: 'Full Stack Developer',
        location: 'Lahore, Punjab, Pakistan',
        startDate: '2024-11',
        endDate: 'Present',
        description: 'Working on enterprise-level applications using Angular, React, and Node.js, integrating Prisma ORM, and implementing micro front-end solutions for modular scalability.',
        responsibilities: [
            'Architected and implemented micro-frontend architecture',
            'Integrated Prisma ORM for efficient database management',
            'Developed scalable web applications using Angular, React, and Node.js',
            'Mentored junior developers and conducted code reviews'
        ],
        technologies: ['Angular', 'React', 'Node.js', 'Prisma ORM', 'Micro Frontends', 'TypeScript']
    },
    {
        id: '2',
        company: 'esoftbay',
        position: 'Angular Developer',
        location: 'Lahore, Punjab, Pakistan',
        startDate: '2024-06',
        endDate: '2024-11',
        description: 'Specialized in Angular development for client projects.',
        responsibilities: [
            'Developed and maintained Angular applications',
            'Implemented responsive UI designs',
            'Collaborated with cross-functional teams'
        ],
        technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS']
    },
    {
        id: '3',
        company: 'Codeteck',
        position: 'Angular Developer',
        location: 'Lahore, Punjab, Pakistan',
        startDate: '2023-05',
        endDate: '2024-06',
        description: 'Angular development and UI implementation.',
        responsibilities: [
            'Built responsive web interfaces',
            'Integrated RESTful APIs',
            'Optimized application performance'
        ],
        technologies: ['Angular', 'TypeScript', 'Angular Material']
    },
    {
        id: '4',
        company: 'Contour Software',
        position: 'Trainee Software Engineer',
        location: 'Lahore, Punjab, Pakistan',
        startDate: '2022-12',
        endDate: '2023-03',
        description: 'Trainee role focusing on software engineering fundamentals.',
        responsibilities: [
            'Assisted in development tasks',
            'Learned and applied software engineering best practices',
            'Participated in team meetings and training sessions'
        ],
        technologies: ['JavaScript', 'HTML', 'CSS']
    },
    {
        id: '5',
        company: 'eFAIDA (Pvt.) Limited',
        position: 'Frontend Developer',
        location: 'Okara',
        startDate: '2022-06',
        endDate: '2022-11',
        description: 'Delivered responsive web interfaces using Bootstrap.',
        responsibilities: [
            'Developed responsive web interfaces using Bootstrap',
            'Contributed to end-to-end project execution',
            'Ensured cross-browser compatibility'
        ],
        technologies: ['Bootstrap', 'HTML', 'CSS', 'JavaScript']
    }
];
