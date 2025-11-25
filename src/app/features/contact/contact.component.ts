import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SectionTitleComponent } from '../../ui/components/section-title.component';
import { AnimatedBackgroundComponent } from '../../ui/svg/animated-background.component';
import { PERSONAL_INFO } from '../../data/content/personal-info.data';

@Component({
    selector: 'app-contact',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        SectionTitleComponent,
        AnimatedBackgroundComponent
    ],
    template: `
    <app-animated-background></app-animated-background>
    
    <div class="contact-page">
      <section class="section">
        <div class="container">
          <app-section-title 
            title="Get In Touch"
            subtitle="Let's discuss your next project"
            [centered]="true"
            [gradient]="true">
          </app-section-title>
          
          <div class="contact-content">
            <!-- Contact Info -->
            <div class="contact-info fade-in-up">
              <div class="info-card glassmorphism">
                <mat-icon>email</mat-icon>
                <h3>Email</h3>
                <a [href]="'mailto:' + personalInfo.email">{{ personalInfo.email }}</a>
              </div>
              
              <div class="info-card glassmorphism">
                <mat-icon>link</mat-icon>
                <h3>LinkedIn</h3>
                <a [href]="personalInfo.linkedin" target="_blank" rel="noopener">
                  View Profile
                </a>
              </div>
              
              <div class="info-card glassmorphism">
                <mat-icon>location_on</mat-icon>
                <h3>Location</h3>
                <p>{{ personalInfo.location }}</p>
              </div>
            </div>
            
            <!-- Contact Form -->
            <div class="contact-form-wrapper fade-in-up">
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form glassmorphism">
                <h3>Send Me a Message</h3>
                
                <mat-form-field appearance="outline">
                  <mat-label>Your Name</mat-label>
                  <input matInput formControlName="name" placeholder="John Doe">
                  <mat-icon matPrefix>person</mat-icon>
                  <mat-error *ngIf="contactForm.get('name')?.hasError('required')">
                    Name is required
                  </mat-error>
                </mat-form-field>
                
                <mat-form-field appearance="outline">
                  <mat-label>Your Email</mat-label>
                  <input matInput formControlName="email" type="email" placeholder="john@example.com">
                  <mat-icon matPrefix>email</mat-icon>
                  <mat-error *ngIf="contactForm.get('email')?.hasError('required')">
                    Email is required
                  </mat-error>
                  <mat-error *ngIf="contactForm.get('email')?.hasError('email')">
                    Please enter a valid email
                  </mat-error>
                </mat-form-field>
                
                <mat-form-field appearance="outline">
                  <mat-label>Subject</mat-label>
                  <input matInput formControlName="subject" placeholder="Project Inquiry">
                  <mat-icon matPrefix>subject</mat-icon>
                  <mat-error *ngIf="contactForm.get('subject')?.hasError('required')">
                    Subject is required
                  </mat-error>
                </mat-form-field>
                
                <mat-form-field appearance="outline">
                  <mat-label>Message</mat-label>
                  <textarea matInput formControlName="message" rows="6" 
                            placeholder="Tell me about your project..."></textarea>
                  <mat-icon matPrefix>message</mat-icon>
                  <mat-error *ngIf="contactForm.get('message')?.hasError('required')">
                    Message is required
                  </mat-error>
                  <mat-error *ngIf="contactForm.get('message')?.hasError('minlength')">
                    Message must be at least 10 characters
                  </mat-error>
                </mat-form-field>
                
                <button mat-raised-button color="primary" type="submit" 
                        [disabled]="contactForm.invalid || isSubmitting"
                        class="submit-btn">
                  <mat-icon *ngIf="!isSubmitting">send</mat-icon>
                  <mat-icon *ngIf="isSubmitting" class="spin">sync</mat-icon>
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
    styles: [`
    .contact-page {
      padding-top: 80px;
      min-height: 100vh;
      position: relative;
    }
    
    .section {
      padding: var(--spacing-2xl) 0;
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: var(--spacing-2xl);
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
      
      .info-card {
        padding: var(--spacing-lg);
        border-radius: var(--radius-lg);
        text-align: center;
        transition: all var(--transition-base);
        
        &:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }
        
        mat-icon {
          font-size: 3rem;
          width: 3rem;
          height: 3rem;
          color: var(--primary-500);
          margin-bottom: var(--spacing-sm);
        }
        
        h3 {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-sm);
          color: var(--text-primary);
        }
        
        a {
          color: var(--primary-600);
          font-weight: 600;
          
          &:hover {
            text-decoration: underline;
          }
        }
        
        p {
          color: var(--text-secondary);
          margin: 0;
        }
      }
    }
    
    .contact-form-wrapper {
      .contact-form {
        padding: var(--spacing-xl);
        border-radius: var(--radius-xl);
        
        h3 {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-lg);
          color: var(--text-primary);
        }
        
        mat-form-field {
          width: 100%;
          margin-bottom: var(--spacing-sm);
        }
        
        .submit-btn {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
          font-weight: 600;
          margin-top: var(--spacing-md);
          
          mat-icon {
            margin-right: 0.5rem;
            
            &.spin {
              animation: rotate 1s linear infinite;
            }
          }
        }
      }
    }
    
    @media (max-width: 968px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
      
      .contact-info {
        order: 2;
      }
      
      .contact-form-wrapper {
        order: 1;
      }
    }
  `]
})
export class ContactComponent {
    personalInfo = PERSONAL_INFO;
    contactForm: FormGroup;
    isSubmitting = false;

    constructor(
        private fb: FormBuilder,
        private snackBar: MatSnackBar
    ) {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', Validators.required],
            message: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    onSubmit() {
        if (this.contactForm.valid) {
            this.isSubmitting = true;

            // Simulate form submission since there's no backend
            setTimeout(() => {
                this.isSubmitting = false;
                this.snackBar.open('✅ Message sent successfully! I\'ll get back to you soon.', 'Close', {
                    duration: 5000,
                    horizontalPosition: 'center',
                    verticalPosition: 'top',
                    panelClass: ['success-snackbar']
                });
                this.contactForm.reset();
            }, 2000);
        }
    }
}
