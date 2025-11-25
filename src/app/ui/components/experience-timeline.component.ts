import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Experience } from '../../data/models/portfolio.model';

@Component({
  selector: 'app-experience-timeline',
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  template: `
    <div class="timeline">
      <div class="timeline-item" *ngFor="let exp of experiences; let i = index" 
           [class.animate-in]="true"
           [style.animation-delay.ms]="i * 100">
        <div class="timeline-marker">
          <div class="marker-dot"></div>
          <div class="marker-line" *ngIf="i < experiences.length - 1"></div>
        </div>
        
        <div class="timeline-content">
          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>
                <div class="header-content">
                  <div class="company-info">
                    <h3>{{ exp.position }}</h3>
                    <p class="company">{{ exp.company }}</p>
                  </div>
                  <div class="date-badge">
                    {{ exp.startDate }} - {{ exp.endDate }}
                  </div>
                </div>
              </mat-panel-title>
            </mat-expansion-panel-header>
            
            <div class="panel-content">
              <p class="location">
                <mat-icon>location_on</mat-icon>
                {{ exp.location }}
              </p>
              
              <p class="description">{{ exp.description }}</p>
              
              <div class="responsibilities">
                <h4>Key Responsibilities:</h4>
                <ul>
                  <li *ngFor="let resp of exp.responsibilities">{{ resp }}</li>
                </ul>
              </div>
              
              <div class="technologies">
                <h4>Technologies Used:</h4>
                <div class="tech-list">
                  <span class="tech-badge" *ngFor="let tech of exp.technologies">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </mat-expansion-panel>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .timeline {
      position: relative;
      padding: var(--spacing-md) 0;
    }
    
    .timeline-item {
      display: flex;
      gap: var(--spacing-lg);
      margin-bottom: var(--spacing-lg);
      opacity: 0;
      
      &.animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    .timeline-marker {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      
      .marker-dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--gradient-primary);
        border: 4px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
        z-index: 1;
      }
      
      .marker-line {
        width: 2px;
        flex: 1;
        background: linear-gradient(to bottom, rgba(99, 102, 241, 0.5), transparent);
        margin-top: 8px;
      }
    }
    
    .timeline-content {
      flex: 1;
      
      ::ng-deep mat-expansion-panel {
        border-radius: var(--radius-lg);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        transition: all var(--transition-base);
        
        &:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
        }

        &.mat-expanded {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(99, 102, 241, 0.4);
        }
      }
      
      ::ng-deep .mat-expansion-panel-header {
        padding: 1.5rem;
        
        &:hover {
          background: transparent !important;
        }
      }

      ::ng-deep .mat-expansion-panel-body {
        padding: 0 1.5rem 1.5rem;
      }
    }
    
    .header-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: var(--spacing-md);
      flex-wrap: wrap;
    }
    
    .company-info {
      h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: white;
        margin-bottom: 0.25rem;
      }
      
      .company {
        font-size: 1rem;
        color: var(--primary-light);
        font-weight: 600;
        margin: 0;
      }
    }
    
    .date-badge {
      padding: 0.5rem 1rem;
      background: rgba(99, 102, 241, 0.15);
      border: 1px solid rgba(99, 102, 241, 0.3);
      border-radius: var(--radius-sm);
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--primary-light);
      white-space: nowrap;
    }
    
    .panel-content {
      padding: var(--spacing-md);
      
      .location {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-secondary);
        margin-bottom: var(--spacing-md);
        
        mat-icon {
          font-size: 1.25rem;
          width: 1.25rem;
          height: 1.25rem;
          color: var(--primary-light);
        }
      }
      
      .description {
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: var(--spacing-md);
        line-height: 1.6;
      }
      
      .responsibilities {
        margin-bottom: var(--spacing-md);
        
        h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: var(--spacing-sm);
          color: white;
        }
        
        ul {
          list-style: none;
          padding-left: 0;
          
          li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.5rem;
            color: rgba(255, 255, 255, 0.8);
            
            &::before {
              content: '→';
              position: absolute;
              left: 0;
              color: var(--primary-light);
              font-weight: 600;
            }
          }
        }
      }
      
      .technologies {
        h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: var(--spacing-sm);
          color: white;
        }
        
        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tech-badge {
          padding: 0.25rem 0.75rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(217, 70, 239, 0.15));
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--primary-light);
        }
      }
    }
    
    @media (max-width: 768px) {
      .timeline-item {
        gap: var(--spacing-md);
      }
      
      .header-content {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .date-badge {
        align-self: flex-start;
      }
    }
  `]
})
export class ExperienceTimelineComponent {
  @Input() experiences: Experience[] = [];
}
