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
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
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
