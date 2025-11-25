import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { SectionTitleComponent } from '../../ui/components/section-title.component';
import { ProjectCardComponent } from '../../ui/components/project-card.component';
import { PROJECTS } from '../../data/content/projects.data';
import { Project } from '../../data/models/portfolio.model';

@Component({
    selector: 'app-projects',
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        SectionTitleComponent,
        ProjectCardComponent
    ],
    template: `
    <div class="projects-page">
      <section class="section">
        <div class="container">
          <app-section-title 
            title="My Projects"
            subtitle="Explore my work and technical achievements"
            [centered]="true"
            [gradient]="true">
          </app-section-title>
          
          <!-- Filters -->
          <div class="filters">
            <mat-form-field appearance="outline">
              <mat-label>Filter by Tag</mat-label>
              <mat-select [(ngModel)]="selectedTag" (selectionChange)="filterProjects()">
                <mat-option value="all">All Projects</mat-option>
                <mat-option *ngFor="let tag of allTags" [value]="tag">
                  {{ tag }}
                </mat-option>
              </mat-select>
            </mat-form-field>
            
            <mat-form-field appearance="outline">
              <mat-label>Search Projects</mat-label>
              <input matInput [(ngModel)]="searchTerm" (ngModelChange)="filterProjects()" 
                     placeholder="Search by name or technology...">
            </mat-form-field>
          </div>
          
          <!-- Projects Grid -->
          <div class="projects-grid">
            <app-project-card 
              *ngFor="let project of filteredProjects; let i = index" 
              [project]="project"
              class="fade-in"
              [style.animation-delay.ms]="i * 100">
            </app-project-card>
          </div>
          
          <!-- Empty State -->
          <div class="empty-state" *ngIf="filteredProjects.length === 0">
            <p>No projects found matching your criteria.</p>
            <button mat-raised-button color="primary" (click)="clearFilters()">
              Clear Filters
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
    styles: [`
    .projects-page {
      padding-top: 80px;
      min-height: 100vh;
      background: var(--bg-secondary);
    }
    
    .section {
      padding: var(--spacing-2xl) 0;
    }
    
    .filters {
      display: flex;
      gap: var(--spacing-md);
      margin-bottom: var(--spacing-xl);
      flex-wrap: wrap;
      
      mat-form-field {
        flex: 1;
        min-width: 250px;
      }
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: var(--spacing-lg);
    }
    
    .empty-state {
      text-align: center;
      padding: var(--spacing-2xl);
      
      p {
        font-size: 1.125rem;
        color: var(--text-secondary);
        margin-bottom: var(--spacing-lg);
      }
    }
    
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .filters {
        flex-direction: column;
        
        mat-form-field {
          width: 100%;
        }
      }
    }
  `]
})
export class ProjectsComponent {
    projects = PROJECTS;
    filteredProjects = PROJECTS;
    selectedTag = 'all';
    searchTerm = '';

    allTags: string[] = [];

    constructor() {
        this.extractTags();
    }

    extractTags() {
        const tagsSet = new Set<string>();
        this.projects.forEach(project => {
            project.tags.forEach(tag => tagsSet.add(tag));
        });
        this.allTags = Array.from(tagsSet).sort();
    }

    filterProjects() {
        this.filteredProjects = this.projects.filter(project => {
            const matchesTag = this.selectedTag === 'all' || project.tags.includes(this.selectedTag);
            const matchesSearch = this.searchTerm === '' ||
                project.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                project.technologies.some(tech => tech.toLowerCase().includes(this.searchTerm.toLowerCase()));

            return matchesTag && matchesSearch;
        });
    }

    clearFilters() {
        this.selectedTag = 'all';
        this.searchTerm = '';
        this.filterProjects();
    }
}
