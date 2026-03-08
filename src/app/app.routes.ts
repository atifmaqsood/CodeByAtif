import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home | Atif Maqsood' },
    { path: 'about', component: AboutComponent, title: 'About | Atif Maqsood' },
    { path: 'projects', component: ProjectsComponent, title: 'Projects | Atif Maqsood' },
    { path: 'experience', component: ExperienceComponent, title: 'Experience | Atif Maqsood' },
    { path: 'contact', component: ContactComponent, title: 'Contact | Atif Maqsood' },
    {
        path: 'domains/manufacturing',
        loadComponent: () => import('./features/domains/manufacturing/manufacturing.component').then(m => m.ManufacturingComponent),
        title: 'Manufacturing Domain | Atif Maqsood'
    },
    {
        path: 'domains/healthcare',
        loadComponent: () => import('./features/domains/healthcare/healthcare.component').then(m => m.HealthcareComponent),
        title: 'Healthcare Domain | Atif Maqsood'
    },
    {
        path: 'domains/fintech',
        loadComponent: () => import('./features/domains/fintech/fintech.component').then(m => m.FintechComponent),
        title: 'FinTech Domain | Atif Maqsood'
    },
    {
        path: 'domains/finance',
        loadComponent: () => import('./features/domains/finance/finance.component').then(m => m.FinanceComponent),
        title: 'Finance Domain | Atif Maqsood'
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
