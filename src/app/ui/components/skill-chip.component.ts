import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-skill-chip',
    imports: [CommonModule],
    template: `
    <div class="skill-chip" [class]="'level-' + level">
      <span class="skill-name">{{ name }}</span>
      <div class="skill-level-indicator">
        <div class="level-fill" [style.width.%]="getLevelPercentage()"></div>
      </div>
    </div>
  `,
    styles: [`
    .skill-chip {
      display: inline-flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: var(--spacing-sm) var(--spacing-md);
      background: var(--bg-secondary);
      border-radius: var(--radius-md);
      border: 2px solid transparent;
      transition: all var(--transition-base);
      cursor: pointer;
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
        border-color: var(--primary-400);
      }
      
      &.level-expert {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1));
        border-color: rgba(16, 185, 129, 0.3);
      }
      
      &.level-advanced {
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(79, 70, 229, 0.1));
        border-color: rgba(99, 102, 241, 0.3);
      }
      
      &.level-intermediate {
        background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.1));
        border-color: rgba(245, 158, 11, 0.3);
      }
    }
    
    .skill-name {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--text-primary);
      white-space: nowrap;
    }
    
    .skill-level-indicator {
      width: 100%;
      height: 4px;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      overflow: hidden;
      
      .level-fill {
        height: 100%;
        background: var(--gradient-primary);
        border-radius: 2px;
        transition: width var(--transition-slow);
      }
    }
    
    .level-expert .level-fill {
      background: linear-gradient(90deg, #10b981, #059669);
    }
    
    .level-advanced .level-fill {
      background: linear-gradient(90deg, #6366f1, #4f46e5);
    }
    
    .level-intermediate .level-fill {
      background: linear-gradient(90deg, #f59e0b, #d97706);
    }
    
    .level-beginner .level-fill {
      background: linear-gradient(90deg, #94a3b8, #64748b);
    }
  `]
})
export class SkillChipComponent {
    @Input() name: string = '';
    @Input() level: 'beginner' | 'intermediate' | 'advanced' | 'expert' = 'intermediate';

    getLevelPercentage(): number {
        const levels = {
            beginner: 25,
            intermediate: 50,
            advanced: 75,
            expert: 100
        };
        return levels[this.level];
    }
}
