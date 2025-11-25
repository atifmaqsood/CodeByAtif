import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SectionTitleComponent } from '../../ui/components/section-title.component';
import { SkillChipComponent } from '../../ui/components/skill-chip.component';
import { ExperienceTimelineComponent } from '../../ui/components/experience-timeline.component';
import { PERSONAL_INFO } from '../../data/content/personal-info.data';
import { SKILLS } from '../../data/content/skills.data';
import { EXPERIENCES } from '../../data/content/experiences.data';

@Component({
    selector: 'app-about',
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        SectionTitleComponent,
        SkillChipComponent,
        ExperienceTimelineComponent
    ],
    template: `
    <div class="about-page">
      <!-- About Section -->
      <section class="about-section section">
        <div class="container">
          <app-section-title 
            title="About Me"
            subtitle="Get to know more about my journey and expertise"
            [centered]="true"
            [gradient]="true">
          </app-section-title>
          
          <div class="about-content">
            <div class="bio-text fade-in-up">
              <p *ngFor="let paragraph of bioParagraphs">{{ paragraph }}</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Skills Section -->
      <section class="skills-section section">
        <div class="container">
          <app-section-title 
            title="Skills & Expertise"
            subtitle="Technologies and tools I work with"
            [centered]="true">
          </app-section-title>
          
          <div class="skills-categories">
            <div class="skill-category" *ngFor="let category of skillCategories">
              <h3>{{ category.title }}</h3>
              <div class="skills-grid">
                <app-skill-chip 
                  *ngFor="let skill of getSkillsByCategory(category.id)"
                  [name]="skill.name"
                  [level]="skill.level">
                </app-skill-chip>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Experience Section -->
      <section class="experience-section section">
        <div class="container">
          <app-section-title 
            title="Work Experience"
            subtitle="My professional journey"
            [centered]="true">
          </app-section-title>
          
          <app-experience-timeline [experiences]="experiences"></app-experience-timeline>
        </div>
      </section>
      
      <!-- Download Resume -->
      <section class="resume-section section">
        <div class="container">
          <div class="resume-card glassmorphism">
            <mat-icon class="resume-icon">description</mat-icon>
            <h3>Want to know more?</h3>
            <p>Download my resume to get the complete picture of my skills and experience.</p>
            <button mat-raised-button color="primary">
              <mat-icon>download</mat-icon>
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
    styles: [`
    .about-page {
      padding-top: 80px;
    }
    
    .section {
      padding: var(--spacing-2xl) 0;
    }
    
    .about-section {
      background: var(--bg-primary);
      
      .about-content {
        max-width: 900px;
        margin: 0 auto;
        
        .bio-text {
          p {
            font-size: clamp(1rem, 2vw, 1.125rem);
            line-height: 1.8;
            color: var(--text-secondary);
            margin-bottom: var(--spacing-md);
            text-align: justify;
            
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
    
    .skills-section {
      background: var(--bg-secondary);
      
      .skills-categories {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2xl);
        
        .skill-category {
          h3 {
            font-size: clamp(1.5rem, 3vw, 2rem);
            color: var(--text-primary);
            margin-bottom: var(--spacing-lg);
            text-align: center;
          }
          
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: var(--spacing-md);
          }
        }
      }
    }
    
    .experience-section {
      background: var(--bg-primary);
    }
    
    .resume-section {
      background: var(--bg-secondary);
      
      .resume-card {
        max-width: 700px;
        margin: 0 auto;
        padding: var(--spacing-2xl);
        text-align: center;
        border-radius: var(--radius-xl);
        
        .resume-icon {
          font-size: 4rem;
          width: 4rem;
          height: 4rem;
          color: var(--primary-500);
          margin-bottom: var(--spacing-md);
        }
        
        h3 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: var(--spacing-md);
        }
        
        p {
          font-size: clamp(1rem, 2vw, 1.125rem);
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
          line-height: 1.6;
        }
        
        button {
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          
          mat-icon {
            margin-right: 0.5rem;
          }
        }
      }
    }
    
    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }
    }
  `]
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
