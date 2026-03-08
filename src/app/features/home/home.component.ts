import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AnimatedBackgroundComponent } from '../../ui/svg/animated-background.component';
import { ProjectCardComponent } from '../../ui/components/project-card.component';
import { PERSONAL_INFO } from '../../data/content/personal-info.data';
import { PROJECTS } from '../../data/content/projects.data';
import { SKILLS } from '../../data/content/skills.data';

@Component({
    selector: 'app-home',
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        AnimatedBackgroundComponent,
        ProjectCardComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    personalInfo = PERSONAL_INFO;
    featuredProjects = PROJECTS.filter(p => p.featured);

    highlightedSkills = [
        { name: 'Angular', icon: 'apps', level: 95 },
        { name: 'React', icon: 'web', level: 85 },
        { name: 'NestJS', icon: 'dns', level: 88 },
        { name: 'Node.js', icon: 'cloud', level: 88 }
    ];

    services = [
        {
            icon: 'web',
            title: 'Web Development',
            description: 'Building scalable enterprise and SaaS applications using Angular, React, Node.js, and NestJS across MEAN and MERN stacks.'
        },
        {
            icon: 'architecture',
            title: 'Micro-Frontend Architecture',
            description: 'Designing and implementing micro-frontend systems using Webpack Module Federation for modular, scalable enterprise deployment.'
        },
        {
            icon: 'integration_instructions',
            title: 'Middleware & API Integrations',
            description: 'Building middleware systems using NestJS to connect third-party services like Bill.com and Gusto via webhooks and REST APIs.'
        },
        {
            icon: 'smart_toy',
            title: 'AI-Assisted Development',
            description: 'Leveraging modern vibe coding and agentic AI workflows (Cursor, GitHub Copilot, Antigravity) to accelerate delivery and improve code quality.'
        }
    ];

    experiences = [
        {
            company: 'NKU Technologies',
            role: 'Full Stack Developer',
            period: 'Nov 2024 - Present',
            logo: 'business',
            description: 'Developing enterprise-scale SaaS applications using Angular, React, Node.js, and NestJS in a micro-frontend architecture.',
            achievements: [
                'Designed and implemented micro-frontend architecture with module federation',
                'Built NestJS middleware integrations for Bill.com and Gusto Payroll',
                'Developed ElectronJS desktop app for industrial OPC tag data processing'
            ],
            technologies: ['Angular', 'React', 'NestJS', 'ElectronJS', 'MQTT', 'Micro Frontends']
        },
        {
            company: 'eSoftbay',
            role: 'Angular Developer',
            period: 'Jun 2024 - Nov 2024',
            logo: 'code',
            description: 'Migrated legacy ASP.NET WebForms modules into a modern Angular-based hospital management system.',
            achievements: [
                'Migrated hospital management system from ASP.NET WebForms to Angular',
                'Integrated REST APIs for patient management and appointment scheduling',
                'Implemented responsive UI using Angular Material and Bootstrap'
            ],
            technologies: ['Angular', 'TypeScript', 'Angular Material', 'Bootstrap', 'SCSS']
        },
        {
            company: 'Codeteck',
            role: 'Angular Developer',
            period: 'May 2023 - Jun 2024',
            logo: 'developer_mode',
            description: 'Contributed to the Zappiex Security Management System, building interactive dashboards and integrating REST APIs.',
            achievements: [
                'Built interactive security monitoring dashboards and data tables',
                'Integrated REST APIs and role-based authentication',
                'Improved UI performance through component modularization'
            ],
            technologies: ['Angular', 'Angular Material', 'TypeScript', 'REST APIs']
        }
    ];
}
