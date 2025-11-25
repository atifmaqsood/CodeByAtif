import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
    template: `
    <header class="header" [class.scrolled]="isScrolled">
      <mat-toolbar class="toolbar">
        <div class="container toolbar-content">
          <a routerLink="/" class="logo">
            <span class="logo-text gradient-text">Atif Maqsood</span>
          </a>
          
          <nav class="nav-links" [class.mobile-open]="mobileMenuOpen">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" 
               mat-button (click)="closeMobileMenu()">
              Home
            </a>
            <a routerLink="/about" routerLinkActive="active" mat-button (click)="closeMobileMenu()">
              About
            </a>
            <a routerLink="/projects" routerLinkActive="active" mat-button (click)="closeMobileMenu()">
              Projects
            </a>
            <a routerLink="/experience" routerLinkActive="active" mat-button (click)="closeMobileMenu()">
              Experience
            </a>
            <a routerLink="/contact" routerLinkActive="active" mat-button (click)="closeMobileMenu()">
              Contact
            </a>
          </nav>
          
          <button mat-icon-button class="mobile-menu-btn" (click)="toggleMobileMenu()">
            <mat-icon>{{ mobileMenuOpen ? 'close' : 'menu' }}</mat-icon>
          </button>
        </div>
      </mat-toolbar>
    </header>
  `,
    styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      transition: all var(--transition-base);
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      
      &.scrolled {
        box-shadow: var(--shadow-md);
        background: rgba(255, 255, 255, 0.95);
      }
    }
    
    .toolbar {
      background: transparent;
      padding: 0.5rem 0;
    }
    
    .toolbar-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--spacing-lg);
    }
    
    .logo {
      text-decoration: none;
      
      .logo-text {
        font-size: 1.5rem;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
      }
    }
    
    .nav-links {
      display: flex;
      gap: var(--spacing-sm);
      
      a {
        color: var(--text-primary);
        font-weight: 500;
        transition: all var(--transition-fast);
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--gradient-primary);
          transition: width var(--transition-base);
        }
        
        &:hover::after,
        &.active::after {
          width: 80%;
        }
        
        &.active {
          color: var(--primary-600);
        }
      }
    }
    
    .mobile-menu-btn {
      display: none;
    }
    
    @media (max-width: 768px) {
      .nav-links {
        position: fixed;
        top: 64px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
        padding: var(--spacing-lg);
        box-shadow: var(--shadow-lg);
        transform: translateY(-100%);
        opacity: 0;
        pointer-events: none;
        transition: all var(--transition-base);
        
        &.mobile-open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }
        
        a {
          width: 100%;
          justify-content: flex-start;
          font-size: 1.125rem;
        }
      }
      
      .mobile-menu-btn {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
    isScrolled = false;
    mobileMenuOpen = false;

    constructor() {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                this.isScrolled = window.scrollY > 50;
            });
        }
    }

    toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }

    closeMobileMenu() {
        this.mobileMenuOpen = false;
    }
}
