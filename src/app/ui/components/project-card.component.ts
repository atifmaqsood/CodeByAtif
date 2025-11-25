import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../data/models/portfolio.model';

@Component({
    selector: 'app-project-card',
    imports: [CommonModule, MatCardModule, MatChipsModule, MatButtonModule, MatIconModule],
    template: `
    <mat-card class="project-card" [class.featured]="project.featured">
      <div class="card-header" *ngIf="project.featured">
        <mat-icon>star</mat-icon>
        <span>Featured</span>
      </div>
      
      <mat-card-header>
        <mat-card-title>{{ project.title }}</mat-card-title>
      </mat-card-header>
      
      <mat-card-content>
        <p class="description">{{ project.description }}</p>
        
        <div class="tags">
          <mat-chip-set>
            <mat-chip *ngFor="let tag of project.tags">
              {{ tag }}
            </mat-chip>
          </mat-chip-set>
        </div>
        
        <div class="technologies">
          <span class="tech-label">Technologies:</span>
          <div class="tech-chips">
            <span class="tech-chip" *ngFor="let tech of project.technologies">
              {{ tech }}
            </span>
          </div>
        </div>
      </mat-card-content>
      
      <mat-card-actions>
        <button mat-raised-button color="primary" *ngIf="project.demoUrl">
          <mat-icon>visibility</mat-icon>
          View Demo
        </button>
        <button mat-button *ngIf="project.githubUrl">
          <mat-icon>code</mat-icon>
          GitHub
        </button>
      </mat-card-actions>
    </mat-card>
  `,
    styles: [`
    .project-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all var(--transition-base);
      border-radius: var(--radius-lg);
      overflow: hidden;
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-2xl);
        
        &.featured {
          box-shadow: var(--shadow-glow);
        }
      }
      
      &.featured {
        border: 2px solid var(--primary-400);
      }
    }
    
    .card-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: var(--spacing-sm);
      background: var(--gradient-primary);
      color: white;
      font-size: 0.875rem;
      font-weight: 600;
      
      mat-icon {
        font-size: 1.25rem;
        width: 1.25rem;
        height: 1.25rem;
      }
    }
    
    mat-card-header {
      padding: var(--spacing-md);
      padding-bottom: var(--spacing-sm);
    }
    
    mat-card-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0;
    }
    
    mat-card-content {
      flex: 1;
      padding: 0 var(--spacing-md);
      
      .description {
        color: var(--text-secondary);
        margin-bottom: var(--spacing-md);
        line-height: 1.6;
      }
      
      .tags {
        margin-bottom: var(--spacing-md);
        
        mat-chip {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
      }
      
      .technologies {
        .tech-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }
        
        .tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tech-chip {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(217, 70, 239, 0.1));
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 1rem;
          color: var(--primary-700);
          font-weight: 500;
        }
      }
    }
    
    mat-card-actions {
      padding: var(--spacing-md);
      display: flex;
      gap: var(--spacing-sm);
      
      button {
        mat-icon {
          margin-right: 0.25rem;
        }
      }
    }
  `]
})
export class ProjectCardComponent {
    @Input() project!: Project;
}
