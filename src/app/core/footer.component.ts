import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
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
