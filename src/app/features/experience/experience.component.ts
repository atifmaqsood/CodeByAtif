import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../ui/components/section-title.component';
import { ExperienceTimelineComponent } from '../../ui/components/experience-timeline.component';
import { AnimatedBackgroundComponent } from '../../ui/svg/animated-background.component';
import { EXPERIENCES } from '../../data/content/experiences.data';

@Component({
  selector: 'app-experience',
  imports: [
    CommonModule,
    SectionTitleComponent,
    ExperienceTimelineComponent,
    AnimatedBackgroundComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
  yearsOfExperience = 3;
  companies = EXPERIENCES.length;
  projects = 50;
}
