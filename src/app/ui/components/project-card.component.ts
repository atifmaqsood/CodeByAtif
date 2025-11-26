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
    <div class="project-card-container">
      <!-- Animated background circles -->
      <div class="bg-circle circle-1"></div>
      <div class="bg-circle circle-2"></div>
      <div class="bg-circle circle-3"></div>
      
      <mat-card class="project-card" [class.featured]="project.featured">
        <div class="card-shine"></div>
        
        <div class="card-header" *ngIf="project.featured">
          <mat-icon>star</mat-icon>
          <span>Featured Project</span>
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
            <span class="tech-label">Stack:</span>
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
            Live Demo
          </button>
          <button mat-stroked-button *ngIf="project.githubUrl">
            <mat-icon>code</mat-icon>
            Source Code
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    /* Container for each card with background elements */
    .project-card-container {
      position: relative;
      height: 100%;
      min-height: 500px;
    }
    
    /* Animated glowing circles behind cards */
    .bg-circle {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      animation: floatAround 12s ease-in-out infinite;
    }
    
    .circle-1 {
      width: 280px;
      height: 280px;
      background: radial-gradient(circle at center, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0.1) 40%, transparent 70%);
      top: -80px;
      left: -80px;
      filter: blur(40px);
      animation-delay: 0s;
    }
    
    .circle-2 {
      width: 220px;
      height: 220px;
      background: radial-gradient(circle at center, rgba(236, 72, 153, 0.4) 0%, rgba(236, 72, 153, 0.1) 40%, transparent 70%);
      bottom: -60px;
      right: -60px;
      filter: blur(35px);
      animation-delay: 2s;
    }
    
    .circle-3 {
      width: 180px;
      height: 180px;
      background: radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%);
      top: 50%;
      right: -40px;
      filter: blur(30px);
      animation-delay: 4s;
    }
    
    @keyframes floatAround {
      0%, 100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.6;
      }
      33% {
        transform: translate(20px, -20px) scale(1.1);
        opacity: 0.8;
      }
      66% {
        transform: translate(-15px, 15px) scale(0.9);
        opacity: 0.7;
      }
    }
    
    /* Modern glassmorphic card */
    .project-card {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      border-radius: 24px;
      overflow: hidden;
      
      /* Enhanced glassmorphism */
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.05) 100%
      );
      backdrop-filter: blur(30px) saturate(200%);
      -webkit-backdrop-filter: blur(30px) saturate(200%);
      
      border: 1.5px solid rgba(255, 255, 255, 0.18);
      box-shadow: 
        0 8px 32px 0 rgba(0, 0, 0, 0.4),
        0 2px 8px 0 rgba(0, 0, 0, 0.2),
        inset 0 1px 2px 0 rgba(255, 255, 255, 0.2),
        inset 0 -1px 2px 0 rgba(0, 0, 0, 0.1);
        
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      
      /* Shine effect on top */
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100px;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.15) 0%,
          transparent 100%
        );
        border-radius: 24px 24px 0 0;
        pointer-events: none;
        z-index: 1;
      }
      
      &:hover {
        transform: translateY(-16px) scale(1.02);
        border-color: rgba(99, 102, 241, 0.5);
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.15) 0%,
          rgba(255, 255, 255, 0.08) 100%
        );
        box-shadow: 
          0 24px 64px 0 rgba(99, 102, 241, 0.4),
          0 8px 24px 0 rgba(99, 102, 241, 0.2),
          0 0 0 1px rgba(99, 102, 241, 0.3),
          inset 0 1px 2px 0 rgba(255, 255, 255, 0.3),
          inset 0 -1px 2px 0 rgba(0, 0, 0, 0.1);
          
        .card-shine {
          opacity: 1;
          transform: translateX(100%) skewX(-15deg);
        }
        
        &.featured {
          box-shadow: 
            0 28px 72px 0 rgba(99, 102, 241, 0.6),
            0 12px 32px 0 rgba(236, 72, 153, 0.3),
            0 0 0 2px rgba(99, 102, 241, 0.4),
            inset 0 1px 2px 0 rgba(255, 255, 255, 0.3);
        }
      }
      
      &.featured {
        background: linear-gradient(
          135deg,
          rgba(99, 102, 241, 0.15) 0%,
          rgba(236, 72, 153, 0.08) 50%,
          rgba(139, 92, 246, 0.12) 100%
        );
        border: 2px solid rgba(99, 102, 241, 0.6);
        box-shadow: 
          0 12px 48px 0 rgba(99, 102, 241, 0.35),
          0 4px 16px 0 rgba(99, 102, 241, 0.2),
          0 0 0 1px rgba(99, 102, 241, 0.3),
          inset 0 1px 2px 0 rgba(255, 255, 255, 0.25);
      }
    }
    
    /* Animated shine overlay */
    .card-shine {
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.2) 50%,
        transparent 100%
      );
      transform: skewX(-15deg);
      transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
      opacity: 0;
      z-index: 2;
      pointer-events: none;
    }
    
    /* Featured badge */
    .card-header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.65rem;
      padding: 0.85rem 1.5rem;
      background: linear-gradient(135deg, 
        rgba(99, 102, 241, 0.95) 0%, 
        rgba(139, 92, 246, 0.95) 100%
      );
      color: white;
      font-size: 0.875rem;
      font-weight: 800;
      letter-spacing: 1px;
      text-transform: uppercase;
      box-shadow: 
        0 4px 16px rgba(99, 102, 241, 0.4),
        inset 0 1px 1px rgba(255, 255, 255, 0.3);
      z-index: 2;
      
      mat-icon {
        font-size: 1.4rem;
        width: 1.4rem;
        height: 1.4rem;
        animation: starPulse 2s ease-in-out infinite;
      }
    }
    
    @keyframes starPulse {
      0%, 100% {
        transform: scale(1) rotate(0deg);
        filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.8));
      }
      50% {
        transform: scale(1.15) rotate(180deg);
        filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
      }
    }
    
    mat-card-header {
      position: relative;
      padding: 2rem 2rem 1rem;
      z-index: 2;
    }
    
    mat-card-title {
      font-size: 2rem;
      font-weight: 900;
      margin-bottom: 0;
      color: #ffffff;
      text-shadow: 
        0 2px 8px rgba(0, 0, 0, 0.4),
        0 0 20px rgba(99, 102, 241, 0.3);
      letter-spacing: -0.5px;
      line-height: 1.2;
      
      @media (max-width: 768px) {
        font-size: 1.65rem;
      }
    }
    
    mat-card-content {
      flex: 1;
      padding: 0 2rem 1.5rem;
      position: relative;
      z-index: 2;
      
      .description {
        color: rgba(255, 255, 255, 0.92);
        margin-bottom: 1.75rem;
        line-height: 1.75;
        font-size: 1rem;
        font-weight: 400;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        
        @media (max-width: 768px) {
          font-size: 0.95rem;
        }
      }
      
      .tags {
        margin-bottom: 1.75rem;
        
        mat-chip {
          background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.3) 0%,
            rgba(139, 92, 246, 0.25) 100%
          );
          color: rgba(255, 255, 255, 0.98);
          border: 1.5px solid rgba(99, 102, 241, 0.5);
          font-weight: 700;
          font-size: 0.85rem;
          backdrop-filter: blur(10px);
          box-shadow: 
            0 2px 8px rgba(99, 102, 241, 0.25),
            inset 0 1px 1px rgba(255, 255, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          
          &:hover {
            background: linear-gradient(
              135deg,
              rgba(99, 102, 241, 0.45) 0%,
              rgba(139, 92, 246, 0.4) 100%
            );
            border-color: rgba(99, 102, 241, 0.7);
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
          }
        }
      }
      
      .technologies {
        .tech-label {
          display: block;
          font-size: 0.95rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
        
        .tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        
        .tech-chip {
          font-size: 0.8rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.3) 0%,
            rgba(236, 72, 153, 0.2) 100%
          );
          border: 1.5px solid rgba(139, 92, 246, 0.5);
          border-radius: 20px;
          color: rgba(220, 200, 255, 1);
          font-weight: 700;
          backdrop-filter: blur(10px);
          box-shadow: 
            0 2px 8px rgba(139, 92, 246, 0.25),
            inset 0 1px 1px rgba(255, 255, 255, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
          
          &:hover {
            background: linear-gradient(
              135deg,
              rgba(139, 92, 246, 0.45) 0%,
              rgba(236, 72, 153, 0.35) 100%
            );
            border-color: rgba(139, 92, 246, 0.7);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
          }
          
          @media (max-width: 768px) {
            font-size: 0.75rem;
            padding: 0.4rem 0.85rem;
          }
        }
      }
    }
    
    mat-card-actions {
      padding: 1.5rem 2rem 2rem;
      display: flex;
      gap: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.05) 0%,
        rgba(0, 0, 0, 0.15) 100%
      );
      position: relative;
      z-index: 2;
      
      button {
        flex: 1;
        font-weight: 700;
        font-size: 0.95rem;
        padding: 0.85rem 1.5rem;
        border-radius: 12px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        
        mat-icon {
          margin-right: 0.5rem;
        }
        
        &[mat-raised-button] {
          box-shadow: 
            0 4px 12px rgba(99, 102, 241, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.2);
            
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(99, 102, 241, 0.5);
          }
        }
        
        &[mat-stroked-button] {
          border-width: 2px;
          border-color: rgba(255, 255, 255, 0.4);
          color: rgba(255, 255, 255, 0.95);
          background: rgba(255, 255, 255, 0.05);
          
          &:hover {
            border-color: var(--primary);
            background: rgba(99, 102, 241, 0.15);
            color: #fff;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
          }
        }
      }
      
      @media (max-width: 576px) {
        flex-direction: column;
        
        button {
          width: 100%;
        }
      }
    }
  `]
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
