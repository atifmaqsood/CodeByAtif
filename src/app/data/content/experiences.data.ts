import { Experience } from '../models/portfolio.model';

export const EXPERIENCES: Experience[] = [
    {
        id: '1',
        company: 'NKU Technologies',
        position: 'Senior Full Stack Developer',
        location: 'Lahore, Pakistan',
        startDate: '2023-01',
        endDate: 'Present',
        description: 'Leading development of micro frontend architecture and enterprise applications',
        responsibilities: [
            'Architected and implemented micro frontend system using Angular 19-20 with Webpack Module Federation',
            'Developed cross-origin authentication system using BroadcastChannel API',
            'Built custom Express-based dev server with live reload capabilities',
            'Led Angular Material theme migration from v13 to v19',
            'Mentored junior developers on best practices and code reviews'
        ],
        technologies: ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'Express', 'Webpack', 'SCSS']
    },
    {
        id: '2',
        company: 'eFAIDA',
        position: 'Full Stack Developer',
        location: 'Lahore, Pakistan',
        startDate: '2022-06',
        endDate: '2023-01',
        description: 'Developed ERP integrations and financial automation systems',
        responsibilities: [
            'Implemented Bill.com API integrations for financial workflows',
            'Built OCR invoice ingestion system with automated data extraction',
            'Designed and developed COA traceability features',
            'Created workflow engine for automated business processes',
            'Developed BOM hierarchical processing using SQL recursive CTEs'
        ],
        technologies: ['Node.js', 'Angular', 'SQL Server', 'APIs', 'OCR', 'MongoDB']
    },
    {
        id: '3',
        company: 'Codeteck',
        position: 'Angular Developer',
        location: 'Lahore, Pakistan',
        startDate: '2021-08',
        endDate: '2022-06',
        description: 'Specialized in Angular frontend development and UI/UX implementation',
        responsibilities: [
            'Developed responsive web applications using Angular and Angular Material',
            'Implemented complex UI components with custom animations',
            'Integrated RESTful APIs and state management solutions',
            'Optimized application performance and bundle sizes',
            'Collaborated with designers to implement pixel-perfect UI'
        ],
        technologies: ['Angular', 'TypeScript', 'Angular Material', 'RxJS', 'SCSS', 'NgRx']
    },
    {
        id: '4',
        company: 'Contour Software',
        position: 'Frontend Developer',
        location: 'Lahore, Pakistan',
        startDate: '2021-01',
        endDate: '2021-08',
        description: 'Built modern web applications using Vue.js and React',
        responsibilities: [
            'Developed ShopNova e-commerce platform using Vue.js',
            'Created reusable component libraries',
            'Implemented responsive designs for mobile and desktop',
            'Integrated payment gateway APIs',
            'Performed cross-browser testing and optimization'
        ],
        technologies: ['Vue.js', 'React', 'JavaScript', 'CSS3', 'Webpack']
    },
    {
        id: '5',
        company: 'esoftbay',
        position: 'WordPress Developer',
        location: 'Lahore, Pakistan',
        startDate: '2020-01',
        endDate: '2021-01',
        description: 'Custom WordPress theme and plugin development',
        responsibilities: [
            'Developed custom WordPress themes from scratch',
            'Created custom plugins for client-specific requirements',
            'Implemented WooCommerce customizations',
            'Optimized site performance and SEO',
            'Provided technical support and maintenance'
        ],
        technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'WooCommerce', 'CSS3']
    }
];
