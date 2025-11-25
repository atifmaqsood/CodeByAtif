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
    template: `
    <app-animated-background></app-animated-background>
    
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero-section section">
        <div class="container">
          <div class="hero-content fade-in-up">
            <p class="hero-greeting">Hi, I'm</p>
            <h1 class="hero-title">
              <span class="gradient-text">{{ personalInfo.name }}</span>
            </h1>
            <h2 class="hero-subtitle">{{ personalInfo.role }}</h2>
            <p class="hero-description">
              Building modern, scalable, and beautiful web applications with cutting-edge technologies.
            </p>
            
            <div class="hero-actions">
              <button mat-raised-button color="primary" routerLink="/projects" class="cta-primary">
                <mat-icon>work</mat-icon>
                View My Work
              </button>
              <button mat-raised-button routerLink="/contact" class="cta-secondary">
                <mat-icon>email</mat-icon>
                Get In Touch
              </button>
            </div>
            
            <div class="scroll-indicator">
              <div class="mouse">
                <div class="wheel"></div>
              </div>
              <p>Scroll to explore</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Featured Projects -->
      <section class="featured-section section">
        <div class="container">
          <div class="section-header">
            <h2>Featured <span class="gradient-text">Projects</span></h2>
            <p>Showcasing some of my best work</p>
          </div>
          
          <div class="projects-grid">
            <app-project-card 
              *ngFor="let project of featuredProjects" 
              [project]="project"
              class="fade-in">
            </app-project-card>
          </div>
          
          <div class="view-all">
            <button mat-raised-button color="primary" routerLink="/projects">
              View All Projects
              <mat-icon>arrow_forward</mat-icon>
            </button>
          </div>
        </div>
      </section>
      
      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content glassmorphism">
            <h2>Let's Work Together</h2>
            <p>Ready to bring your ideas to life? Let's create something amazing!</p>
            <button mat-raised-button color="primary" routerLink="/contact">
              <mat-icon>send</mat-icon>
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
    styles: [`
    .home-page {
      position: relative;
      min-height: 100vh;
    }
    
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 80px;
      position: relative;
    }
    
    .hero-content {
      max-width: 900px;
      
      .hero-greeting {
        font-size: clamp(1.125rem, 2vw, 1.5rem);
        color: var(--primary-600);
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      
      .hero-title {
        font-size: clamp(3rem, 8vw, 5rem);
        font-weight: 800;
        margin-bottom: 1rem;
        line-height: 1.1;
      }
      
      .hero-subtitle {
        font-size: clamp(1.5rem, 3vw, 2rem);
        font-weight: 600;
        color: var(--text-secondary);
        margin-bottom: var(--spacing-lg);
        line-height: 1.3;
      }
      
      .hero-description {
        font-size: clamp(1.125rem, 2vw, 1.25rem);
        color: var(--text-secondary);
        margin-bottom: var(--spacing-xl);
        max-width: 700px;
        line-height: 1.7;
      }
      
      .hero-actions {
        display: flex;
        gap: var(--spacing-md);
        flex-wrap: wrap;
        margin-bottom: var(--spacing-2xl);
        
        button {
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: var(--radius-md);
          
          mat-icon {
            margin-right: 0.5rem;
          }
        }
        
        .cta-primary {
          box-shadow: var(--shadow-lg);
          
          &:hover {
            box-shadow: var(--shadow-xl);
            transform: translateY(-2px);
          }
        }
        
        .cta-secondary {
          background: white;
          border: 2px solid var(--primary-500);
          color: var(--primary-600);
          
          &:hover {
            background: var(--primary-50);
          }
        }
      }
    }
    
    .scroll-indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      margin-top: var(--spacing-2xl);
      animation: float 3s ease-in-out infinite;
      
      .mouse {
        width: 30px;
        height: 50px;
        border: 2px solid var(--primary-400);
        border-radius: 15px;
        position: relative;
        
        .wheel {
          width: 4px;
          height: 10px;
          background: var(--primary-500);
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll 2s ease-in-out infinite;
        }
      }
      
      p {
        font-size: 0.875rem;
        color: var(--text-tertiary);
        margin: 0;
      }
    }
    
    @keyframes scroll {
      0% {
        top: 8px;
        opacity: 1;
      }
      100% {
        top: 24px;
        opacity: 0;
      }
    }
    
    .featured-section {
      padding: var(--spacing-2xl) 0;
      background: var(--bg-secondary);
      
      .section-header {
        text-align: center;
        margin-bottom: var(--spacing-2xl);
        
        h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: var(--spacing-sm);
        }
        
        p {
          font-size: clamp(1rem, 2vw, 1.125rem);
          color: var(--text-secondary);
        }
      }
      
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-xl);
      }
      
      .view-all {
        text-align: center;
        
        button {
          padding: 0.75rem 2rem;
          
          mat-icon {
            margin-left: 0.5rem;
          }
        }
      }
    }
    
    .cta-section {
      padding: var(--spacing-2xl) 0;
      
      .cta-content {
        text-align: center;
        padding: var(--spacing-2xl);
        border-radius: var(--radius-xl);
        
        h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: var(--spacing-md);
        }
        
        p {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
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
      .hero-section {
        min-height: calc(100vh - 80px);
      }
      
      .hero-actions {
        flex-direction: column;
        
        button {
          width: 100%;
        }
      }
      
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {
    personalInfo = PERSONAL_INFO;
    featuredProjects = PROJECTS.filter(p => p.featured);
}
