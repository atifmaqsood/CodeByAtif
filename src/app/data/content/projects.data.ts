import { Project } from '../models/portfolio.model';

export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'Micro Frontend Architecture',
        description: 'Advanced micro frontend architecture using Angular 19-20 with Module Federation',
        longDescription: 'Built a sophisticated micro frontend system with o3-core-app as the host and o3-lean-app, ui-builder-app as remotes. Implemented cross-origin authentication using BroadcastChannel API and custom Express-based dev server with live reload capabilities.',
        technologies: ['Angular 19', 'Angular 20', 'Webpack Module Federation', 'TypeScript', 'RxJS', 'Express.js'],
        tags: ['Micro Frontends', 'Architecture', 'Authentication'],
        featured: true
    },
    {
        id: '2',
        title: 'BOM Hierarchical Processing',
        description: 'SQL-based Bill of Materials management system with recursive processing',
        longDescription: 'Designed and implemented a comprehensive BOM management system using recursive CTEs for ProductionPlanBOM processing. Developed stored procedures for automated BOM hierarchy processing and integrated with Angular frontend for real-time updates.',
        technologies: ['SQL Server', 'Node.js', 'Angular', 'TypeScript', 'Stored Procedures'],
        tags: ['Database', 'Backend', 'ERP'],
        featured: true
    },
    {
        id: '3',
        title: 'Angular Material Theme Migration',
        description: 'Large-scale Angular migration from v13 to v19 with complete theme overhaul',
        longDescription: 'Successfully migrated a large enterprise application from Angular 13 to Angular 19, including complete SCSS theme rework, component compatibility updates, and responsive redesign. Improved performance and modernized UI patterns.',
        technologies: ['Angular 13-19', 'Angular Material', 'SCSS', 'TypeScript', 'RxJS'],
        tags: ['Migration', 'Theming', 'UI/UX'],
        featured: true
    },
    {
        id: '4',
        title: 'ShopNova E-commerce',
        description: 'Modern e-commerce platform built with Vue.js and responsive design',
        longDescription: 'Developed a full-featured e-commerce platform with product listings, dynamic categories, shopping cart, and payment gateway integration planning. Focused on responsive UI and smooth user experience.',
        technologies: ['Vue.js', 'Vuex', 'Vue Router', 'JavaScript', 'CSS3'],
        tags: ['E-commerce', 'Frontend', 'Vue'],
        featured: false
    },
    {
        id: '5',
        title: 'ERP Integrations Suite',
        description: 'Third-party API integrations for enterprise resource planning',
        longDescription: 'Built comprehensive ERP integrations including Bill.com APIs, OCR invoice ingestion, COA traceability, workflow engine design, and financial connectors. Handled complex data transformations and real-time sync.',
        technologies: ['Node.js', 'Express', 'APIs', 'OCR', 'MongoDB', 'TypeScript'],
        tags: ['ERP', 'Integration', 'Backend'],
        featured: true
    },
    {
        id: '6',
        title: 'MERN & MEAN Stack Applications',
        description: 'Full-stack applications using MongoDB, Express, React/Angular, and Node.js',
        longDescription: 'Developed multiple full-stack applications using MERN and MEAN stacks. Implemented JWT authentication, Prisma ORM, modular API architecture, and real-time features using WebSockets.',
        technologies: ['MongoDB', 'Express', 'React', 'Angular', 'Node.js', 'Prisma', 'JWT'],
        tags: ['Full Stack', 'MERN', 'MEAN'],
        featured: false
    },
    {
        id: '7',
        title: 'WordPress Custom Development',
        description: 'Custom WordPress themes, plugins, and automation workflows',
        longDescription: 'Created custom WordPress themes and plugins with advanced functionality. Implemented automation flows, custom post types, and headless WordPress solutions.',
        technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'WooCommerce'],
        tags: ['WordPress', 'CMS', 'PHP'],
        featured: false
    }
];
