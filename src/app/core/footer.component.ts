import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MatIconModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="gradient-text">Atif Maqsood</h3>
            <p>{{ personalInfo.role }}</p>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Connect</h4>
            <div class="social-links">
              <a [href]="personalInfo.linkedin" target="_blank" rel="noopener" class="social-link">
                <mat-icon>link</mat-icon>
                LinkedIn
              </a>
              <a [href]="'mailto:' + personalInfo.email" class="social-link">
                <mat-icon>email</mat-icon>
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Atif Maqsood. All rights reserved.</p>
          <p class="tech-stack">Built with Angular {{ angularVersion }} & Angular Material</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      color: white;
      padding: var(--spacing-2xl) 0 var(--spacing-lg);
      margin-top: var(--spacing-2xl);
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-xl);
    }
    
    .footer-section {
      h3 {
        font-size: 1.5rem;
        margin-bottom: var(--spacing-sm);
      }
      
      h4 {
        font-size: 1.125rem;
        margin-bottom: var(--spacing-md);
        color: rgba(255, 255, 255, 0.9);
      }
      
      p {
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 0.5rem;
      }
      
      ul {
        list-style: none;
        padding: 0;
        
        li {
          margin-bottom: 0.5rem;
          
          a {
            color: rgba(255, 255, 255, 0.7);
            transition: color var(--transition-fast);
            
            &:hover {
              color: var(--primary-300);
            }
          }
        }
      }
    }
    
    .social-links {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm);
    }
    
    .social-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: rgba(255, 255, 255, 0.7);
      transition: all var(--transition-fast);
      
      mat-icon {
        font-size: 1.25rem;
        width: 1.25rem;
        height: 1.25rem;
      }
      
      &:hover {
        color: var(--primary-300);
        transform: translateX(5px);
      }
    }
    
    .footer-bottom {
      padding-top: var(--spacing-lg);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
      
      p {
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
      }
      
      .tech-stack {
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
      }
    }
  `]
})
export class FooterComponent {
  personalInfo = {
    name: 'Atif Maqsood',
    role: 'Full Stack Developer | Angular Specialist | MEAN & MERN | Micro Frontends Architect',
    location: 'Lahore, Pakistan',
    email: 'atifmaqsood024@gmail.com',
    linkedin: 'https://linkedin.com/in/atif-maqsood-788002228',
    bio: ''
  };
  currentYear = new Date().getFullYear();
  angularVersion = '20';
}
