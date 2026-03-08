import { Project } from '../models/portfolio.model';

export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'C&C – Middleware Integration Platform',
        description: 'Bridge third-party financial and payroll systems (Bill.com, Gusto) with internal SaaS applications using NestJS',
        longDescription: 'Developed a middleware integration platform using NestJS to bridge third-party financial and payroll systems with internal SaaS applications. Implemented webhook listeners and API integrations for platforms including Bill.com and Gusto Payroll. Built services to process, transform, and forward event-driven data to the internal SaaS platform Focal. Ensured reliable data delivery by implementing error handling, event validation, and asynchronous processing workflows.',
        technologies: ['NestJS', 'Node.js', 'REST APIs', 'Webhooks', 'TypeScript', 'Asynchronous Processing'],
        tags: ['Middleware', 'Integrations', 'Fintech'],
        featured: true
    },
    {
        id: '2',
        title: 'O3 Ozone – MES System',
        description: 'Migration of independent Angular applications into a unified Micro-Frontend architecture',
        longDescription: 'Led the migration of three independent Angular applications into a unified Micro-Frontend architecture, improving modularity and maintainability. Designed and implemented module federation-based architecture to enable scalable enterprise deployment. Collaborated with cross-functional teams in Agile sprint cycles, contributing to feature development, bug fixing, and code reviews. Improved application performance and code reusability by implementing shared libraries and modular components.',
        technologies: ['Angular', 'Micro-Frontends', 'Webpack Module Federation', 'TypeScript', 'RxJS', 'Agile'],
        tags: ['Architecture', 'Enterprise', 'Scalability'],
        featured: true
    },
    {
        id: '3',
        title: 'Smart Solutions – OPC Middleware System',
        description: 'Desktop middleware application using ElectronJS to process and manage industrial OPC tag data',
        longDescription: 'Developed a desktop middleware application using ElectronJS to process and manage industrial OPC tag data. Implemented algorithms to optimize and calculate OPC tag values for individual machines in manufacturing environments. Designed data pipelines to store machine data in PostgreSQL, SQL Server, and SQLite buffer databases. Improved system reliability by implementing buffer-based data persistence and fault-tolerant data synchronization.',
        technologies: ['ElectronJS', 'Node.js', 'PostgreSQL', 'SQL Server', 'SQLite', 'MQTT', 'Algorithms'],
        tags: ['Desktop', 'Industrial IoT', 'Middleware'],
        featured: true
    },
    {
        id: '4',
        title: 'Zappiex Security Management System',
        description: 'Core UI modules and business functionality for a security management platform using Angular',
        longDescription: 'Developed core UI modules and business functionality for a security management platform using Angular. Participated in Agile sprint development, delivering features and resolving production issues. Implemented dynamic dashboards, data tables, and access control components. Collaborated with backend teams to integrate REST APIs and authentication workflows.',
        technologies: ['Angular', 'TypeScript', 'Angular Material', 'REST APIs', 'Role-based Access Control'],
        tags: ['Security', 'Dashboard', 'UI/UX'],
        featured: true
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
