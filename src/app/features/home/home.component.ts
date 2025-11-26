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
        { name: 'Vue.js', icon: 'view_quilt', level: 80 },
        { name: 'Node.js', icon: 'dns', level: 85 }
    ];

    services = [
        {
            icon: 'web',
            title: 'Web Development',
            description: 'Building responsive and scalable web applications using modern frameworks like Angular and React.'
        },
        {
            icon: 'storage',
            title: 'Backend Development',
            description: 'Creating robust APIs and server-side logic with Node.js, Express, and database management.'
        },
        {
            icon: 'architecture',
            title: 'System Architecture',
            description: 'Designing micro frontends and scalable architectures using Module Federation and best practices.'
        },
        {
            icon: 'speed',
            title: 'Performance Optimization',
            description: 'Optimizing application performance, bundle size, and improving user experience.'
        }
    ];

    experiences = [
        {
            company: 'NKU Technologies',
            role: 'Full Stack Developer',
            period: 'Nov 2024 - Present',
            logo: 'business',
            description: 'Working on enterprise-level applications using Angular, React, and Node.js, integrating Prisma ORM, and implementing micro front-end solutions.',
            achievements: [
                'Architected micro-frontend solutions',
                'Integrated Prisma ORM for database management',
                'Developed scalable enterprise applications'
            ],
            technologies: ['Angular', 'React', 'Node.js', 'Prisma ORM']
        },
        {
            company: 'esoftbay',
            role: 'Angular Developer',
            period: 'Jun 2024 - Nov 2024',
            logo: 'code',
            description: 'Specialized in Angular development, delivering high-quality client projects.',
            achievements: [
                'Developed robust Angular applications',
                'Implemented responsive UI designs',
                'Optimized frontend performance'
            ],
            technologies: ['Angular', 'TypeScript', 'RxJS']
        },
        {
            company: 'Codeteck',
            role: 'Angular Developer',
            period: 'May 2023 - Jun 2024',
            logo: 'developer_mode',
            description: 'Focused on Angular development and UI/UX implementation for various web applications.',
            achievements: [
                'Built responsive web interfaces',
                'Integrated RESTful APIs',
                'Collaborated with design teams'
            ],
            technologies: ['Angular', 'Angular Material', 'TypeScript']
        }
    ];
}
