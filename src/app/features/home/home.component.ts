import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AnimatedBackgroundComponent } from '../../ui/svg/animated-background.component';
import { ProjectCardComponent } from '../../ui/components/project-card.component';
import { PERSONAL_INFO } from '../../data/content/personal-info.data';
import { PROJECTS } from '../../data/content/projects.data';

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
}
