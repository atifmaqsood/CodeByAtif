import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../ui/components/section-title.component';
import { ExperienceTimelineComponent } from '../../ui/components/experience-timeline.component';
import { EXPERIENCES } from '../../data/content/experiences.data';

@Component({
    selector: 'app-experience',
    imports: [
        CommonModule,
        SectionTitleComponent,
        ExperienceTimelineComponent
    ],
    template: `
    <div class="experience-page">
      <section class="section">
        <div class="container">
          <app-section-title 
            title="Professional Experience"
            subtitle="My career journey and achievements"
            [centered]="true"
            [gradient]="true">
          </app-section-title>
          
          <div class="experience-stats fade-in-up">
            <div class="stat-card">
              <div class="stat-number gradient-text">{{ yearsOfExperience }}+</div>
              <div class="stat-label">Years of Experience</div>
            </div>
            <div class="stat-card">
              <div class="stat-number gradient-text">{{ companies }}</div>
              <div class="stat-label">Companies</div>
            </div>
            <div class="stat-card">
              <div class="stat-number gradient-text">{{ projects }}+</div>
              <div class="stat-label">Projects Completed</div>
            </div>
          </div>
          
          <app-experience-timeline [experiences]="experiences"></app-experience-timeline>
        </div>
      </section>
    </div>
  `,
    styles: [`
    .experience-page {
      padding-top: 80px;
      min-height: 100vh;
      background: var(--bg-primary);
    }
    
    .section {
      padding: var(--spacing-2xl) 0;
    }
    
    .experience-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--spacing-lg);
      margin-bottom: var(--spacing-2xl);
      
      .stat-card {
        text-align: center;
        padding: var(--spacing-xl);
        background: var(--bg-secondary);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        transition: all var(--transition-base);
        
        &:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }
        
        .stat-number {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          font-family: 'Poppins', sans-serif;
          margin-bottom: var(--spacing-sm);
        }
        
        .stat-label {
          font-size: 1rem;
          color: var(--text-secondary);
          font-weight: 600;
        }
      }
    }
    
    @media (max-width: 768px) {
      .experience-stats {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ExperienceComponent {
    experiences = EXPERIENCES;
    yearsOfExperience = 3;
    companies = EXPERIENCES.length;
    projects = 50;
}
