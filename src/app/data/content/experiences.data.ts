import { Experience } from '../models/portfolio.model';

export const EXPERIENCES: Experience[] = [
    {
        id: '1',
        company: 'NKU Technologies',
        position: 'Full Stack Developer',
        location: 'Lahore, Punjab, Pakistan',
        startDate: '2024-11',
        endDate: 'Present',
        description: 'Developing and maintaining enterprise-scale SaaS applications using Angular, React, Node.js, and NestJS in a micro-frontend architecture.',
        responsibilities: [
            'Designed and implemented micro-frontend architecture to consolidate multiple Angular applications into a scalable modular system',
            'Built middleware integrations using NestJS to connect third-party services such as Bill.com and Gusto Payroll using webhooks and REST APIs',
            'Developed a desktop middleware solution using ElectronJS to process industrial OPC tag data and synchronize machine telemetry to MQTT, PostgreSQL, SQL Server, and SQLite databases',
            'Optimized application performance by implementing modular components, reusable services, and efficient state management',
            'Participated in Agile/Scrum sprint planning, code reviews, and feature delivery, ensuring timely completion of development tasks',
            'Collaborated with cross-functional teams including backend engineers, QA teams, and product managers to deliver high-quality enterprise solutions',
            'Leveraged AI-assisted development and modern vibe coding workflows to accelerate feature implementation and improve productivity'
        ],
        technologies: ['Angular', 'React', 'Node.js', 'NestJS', 'ElectronJS', 'MQTT', 'Micro Frontends', 'PostgreSQL', 'SQL Server', 'SQLite', 'Prisma ORM', 'TypeScript', 'Agile/Scrum']
    },
    {
        id: '2',
        company: 'eSoftbay',
        position: 'Angular Developer',
        location: 'Lahore, Punjab, Pakistan',
        startDate: '2024-06',
        endDate: '2024-11',
        description: 'Migrated legacy ASP.NET WebForms modules into a modern Angular-based application for a hospital management system.',
        responsibilities: [
            'Developed modular Angular components, services, and reusable UI modules to improve maintainability and scalability',
            'Integrated backend REST APIs for patient management, appointment scheduling, and hospital administration workflows',
            'Implemented responsive UI/UX using Angular Material, Bootstrap, and SCSS to enhance usability across devices',
            'Optimized front-end performance through code refactoring, lazy loading modules, and component reusability',
            'Worked closely with backend teams to ensure seamless API communication and data consistency'
        ],
        technologies: ['Angular', 'Angular Material', 'Bootstrap', 'SCSS', 'TypeScript', 'RxJS', 'REST APIs']
    },
    {
        id: '3',
        company: 'Codeteck',
        position: 'Angular Developer',
        location: 'Lahore, Punjab, Pakistan',
        startDate: '2023-05',
        endDate: '2024-06',
        description: 'Contributed to the development of Zappiex Security Management System using Angular.',
        responsibilities: [
            'Designed and implemented interactive dashboards, data tables, and UI components for security monitoring and management',
            'Implemented business logic and user workflows aligned with security management requirements and system operations',
            'Integrated REST APIs and authentication mechanisms to support role-based system access',
            'Collaborated with Agile teams during sprint planning, daily standups, and feature delivery cycles',
            'Improved UI performance and code maintainability through component modularization and TypeScript best practices'
        ],
        technologies: ['Angular', 'TypeScript', 'Angular Material', 'REST APIs', 'Agile/Scrum']
    },
];
