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
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
