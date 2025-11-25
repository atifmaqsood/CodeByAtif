import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-section-title',
    imports: [CommonModule],
    template: `
    <div class="section-title" [class.center]="centered">
      <h2 class="title" [class.gradient-text]="gradient">
        {{ title }}
      </h2>
      <p class="subtitle" *ngIf="subtitle">
        {{ subtitle }}
      </p>
      <div class="divider" *ngIf="showDivider"></div>
    </div>
  `,
    styles: [`
    .section-title {
      margin-bottom: var(--spacing-xl);
      
      &.center {
        text-align: center;
        
        .divider {
          margin: var(--spacing-md) auto 0;
        }
      }
    }
    
    .title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      margin-bottom: var(--spacing-sm);
      animation: fadeInUp 0.6s ease-out;
    }
    
    .subtitle {
      font-size: clamp(1rem, 2vw, 1.25rem);
      color: var(--text-secondary);
      max-width: 700px;
      animation: fadeInUp 0.8s ease-out;
    }
    
    .divider {
      width: 80px;
      height: 4px;
      background: var(--gradient-primary);
      border-radius: 2px;
      margin-top: var(--spacing-md);
      animation: slideInLeft 0.8s ease-out;
    }
  `]
})
export class SectionTitleComponent {
    @Input() title: string = '';
    @Input() subtitle: string = '';
    @Input() centered: boolean = false;
    @Input() gradient: boolean = false;
    @Input() showDivider: boolean = true;
}
