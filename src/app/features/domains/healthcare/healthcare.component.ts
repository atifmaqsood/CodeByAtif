import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SectionTitleComponent } from '../../../ui/components/section-title.component';
import { AnimatedBackgroundComponent } from '../../../ui/svg/animated-background.component';

@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, SectionTitleComponent, AnimatedBackgroundComponent],
  template: `
    <app-animated-background></app-animated-background>
    <div class="domain-page">
      <div class="container section">
        <div class="domain-header fade-in-up">
            <mat-icon class="domain-main-icon">medical_services</mat-icon>
            <h1 class="domain-title gradient-text">Healthcare Domain</h1>
            <p class="domain-subtitle">Revolutionizing patient care with secure, compliant, and data-driven medical platforms.</p>
        </div>

        <div class="domain-content fade-in-up">
          <div class="intro-card glassmorphism">
            <p class="lead-text">
              The healthcare sector demands software solutions that prioritize patient privacy, strict regulatory compliance (such as HIPAA and GDPR), 
              and robust interoperability. Throughout my career, I have taken a leading technical role in architecting electronic health record (EHR) 
              integrations, securing telemedicine gateways, and developing patient-centric portals. My work directly empowers clinicians with 
              data-driven decision support tools, improving clinical workflows, minimizing diagnostic errors, and ultimately enhancing patient outcomes.
            </p>
          </div>

          <div class="grid-section">
            <mat-card class="feature-card">
              <mat-card-header>
                <div class="icon-wrapper">
                  <mat-icon>health_and_safety</mat-icon>
                </div>
                <mat-card-title>Data Security & Compliance</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <ul>
                  <li><mat-icon>check_circle</mat-icon> <strong>PHI Encryption:</strong> I engineered end-to-end encryption protocols ensuring Patient Health Information remains secure both at rest and in transit.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Access Control:</strong> Designed strict role-based access control (RBAC) schemas tailored to the complex hierarchies of modern hospital departments.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Audit Trails:</strong> Developed immutable audit logging modules that automatically generate reports for strict regulatory compliance audits.</li>
                </ul>
              </mat-card-content>
            </mat-card>

            <mat-card class="feature-card">
              <mat-card-header>
                <div class="icon-wrapper">
                  <mat-icon>monitor_heart</mat-icon>
                </div>
                <mat-card-title>Telemedicine & IoT</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <ul>
                  <li><mat-icon>check_circle</mat-icon> <strong>Secure Consultations:</strong> Implemented HIPAA-compliant WebRTC architectures for low-latency, high-res secure video conferencing.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Wearable Integrations:</strong> Built API layers that ingest and process continuous biometric streams from consumer and clinical wearables.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Remote Monitoring:</strong> Led the frontend creation of remote patient monitoring dashboards allowing doctors to track vitals asynchronously.</li>
                </ul>
              </mat-card-content>
            </mat-card>

            <mat-card class="feature-card">
              <mat-card-header>
                <div class="icon-wrapper">
                  <mat-icon>science</mat-icon>
                </div>
                <mat-card-title>Clinical Decision Support</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <ul>
                  <li><mat-icon>check_circle</mat-icon> <strong>Diagnostic ML:</strong> Integrated machine learning pipelines capable of assisting radiologists by analyzing diagnostic imaging at scale.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Interoperability:</strong> Spearheaded the adoption of FHIR and HL7 standards to synchronize patient records across disparate legacy systems.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Pathway Engines:</strong> Developed rule-based recommendation engines that suggest evidence-based clinical pathways in real-time.</li>
                </ul>
              </mat-card-content>
            </mat-card>
          </div>

          <div class="detailed-info glassmorphism">
            <h3>My Architectural Approach</h3>
            <p>
              Healthcare architectures must balance the need for rapid data access during clinical emergencies with ironclad security 
              against cyber threats. I design highly available, distributed infrastructures that ensure medical practitioners never 
              experience downtime when seconds matter most.
            </p>
            <div class="bullet-grid">
              <div class="bullet">
                <mat-icon>hub</mat-icon>
                <span><strong>FHIR Centricity:</strong> I champion the building of robust FHIR-native RESTful APIs, dismantling data silos between lab, pharmacy, and billing software.</span>
              </div>
              <div class="bullet">
                <mat-icon>shield_locked</mat-icon>
                <span><strong>Security First:</strong> Implementing decoupled microservices utilizing OAuth2/OIDC and multi-layered authentication measures to strictly partition sensitive subsystems.</span>
              </div>
              <div class="bullet">
                <mat-icon>speed</mat-icon>
                <span><strong>High Availability:</strong> Operating Kubernetes clusters spanning multiple availability zones to guarantee 99.999% uptime for life-critical clinical applications.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./healthcare.component.scss']
})
export class HealthcareComponent { }
