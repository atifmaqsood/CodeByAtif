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
        { name: 'TypeScript', icon: 'code', level: 90 },
        { name: 'Node.js', icon: 'dns', level: 85 },
        { name: 'React', icon: 'web', level: 80 }
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
}
