import { Component } from '@angular/core';
// Rebuild trigger
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SectionTitleComponent } from '../../ui/components/section-title.component';
import { SkillChipComponent } from '../../ui/components/skill-chip.component';
import { ExperienceTimelineComponent } from '../../ui/components/experience-timeline.component';
import { PERSONAL_INFO } from '../../data/content/personal-info.data';
import { SKILLS } from '../../data/content/skills.data';
import { EXPERIENCES } from '../../data/content/experiences.data';
import { AnimatedBackgroundComponent } from '../../ui/svg/animated-background.component';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    SectionTitleComponent,
    SkillChipComponent,
    ExperienceTimelineComponent,
    AnimatedBackgroundComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  personalInfo = PERSONAL_INFO;
  skills = SKILLS;
  experiences = EXPERIENCES;

  bioParagraphs = this.personalInfo.bio.split('\n\n');

  skillCategories = [
    { id: 'frontend', title: 'Frontend Development' },
    { id: 'backend', title: 'Backend Development' },
    { id: 'database', title: 'Database & Data Management' },
    { id: 'tools', title: 'Tools & Technologies' },
    { id: 'other', title: 'Other Skills' }
  ];

  getSkillsByCategory(category: string) {
    return this.skills.filter(skill => skill.category === category);
  }
}
