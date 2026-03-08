import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SectionTitleComponent } from '../../../ui/components/section-title.component';
import { AnimatedBackgroundComponent } from '../../../ui/svg/animated-background.component';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, SectionTitleComponent, AnimatedBackgroundComponent],
  template: `
    <app-animated-background></app-animated-background>
    <div class="domain-page">
      <div class="container section">
        <div class="domain-header fade-in-up">
            <mat-icon class="domain-main-icon">monetization_on</mat-icon>
            <h1 class="domain-title gradient-text">Finance & Core Banking</h1>
            <p class="domain-subtitle">Architecting resilient core financial systems, ERP integrations, and enterprise accounting logic.</p>
        </div>

        <div class="domain-content fade-in-up">
          <div class="intro-card glassmorphism">
            <p class="lead-text">
              Traditional finance and core banking domains require an unparalleled level of rigor. A single rounding error or failed transaction 
              can cascade into catastrophic compliance failures. Throughout my career, I've taken a hands-on technical role in re-engineering 
              legacy financial systems, designing multi-tenant enterprise resource planning (ERP) modules, and streamlining corporate accounting 
              microservices. My focus is on writing bulletproof code that financial institutions can trust.
            </p>
          </div>

          <div class="grid-section">
            <mat-card class="feature-card">
              <mat-card-header>
                <div class="icon-wrapper">
                  <mat-icon>account_tree</mat-icon>
                </div>
                <mat-card-title>Core Banking Integration</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <ul>
                  <li><mat-icon>check_circle</mat-icon> <strong>Legacy Modernization:</strong> I have successfully migrated monolithic banking cores to decoupled, highly available microservice architectures.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Messaging:</strong> Implemented robust pub/sub messaging queues acting as the neural network for inter-departmental banking services.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Batch processing:</strong> Optimized heavy nightly batch reconciliation jobs reducing processing time by significant margins.</li>
                </ul>
              </mat-card-content>
            </mat-card>

            <mat-card class="feature-card">
              <mat-card-header>
                <div class="icon-wrapper">
                  <mat-icon>receipt_long</mat-icon>
                </div>
                <mat-card-title>Accounting & ERP</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <ul>
                  <li><mat-icon>check_circle</mat-icon> <strong>Double-Entry Automation:</strong> Engineered custom accounting engines that strictly enforce double-entry book balancing paradigms.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Invoicing Workflows:</strong> Built automated, multi-tenant B2B invoicing systems capable of handling complex tier-based taxing algorithms.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Data Migration:</strong> Orchestrated seamless, zero-data-loss migrations from legacy ERPs to modern cloud-based data warehouses.</li>
                </ul>
              </mat-card-content>
            </mat-card>

            <mat-card class="feature-card">
              <mat-card-header>
                <div class="icon-wrapper">
                  <mat-icon>query_stats</mat-icon>
                </div>
                <mat-card-title>Risk & Predictive Modeling</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <ul>
                  <li><mat-icon>check_circle</mat-icon> <strong>Credit Scoring:</strong> Integrated external APIs and developed algorithms designed to generate dynamic risk profiles for lending protocols.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Stress Testing:</strong> Built simulation environments allowing financial institutions to stress-test their liquidity under various economic scenarios.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>BI Dashboards:</strong> Constructed enterprise business intelligence dashboards delivering real-time insights to Chief Financial Officers.</li>
                </ul>
              </mat-card-content>
            </mat-card>
          </div>

          <div class="detailed-info glassmorphism">
            <h3>My Architectural Approach</h3>
            <p>
              In core finance, precision is non-negotiable. I approach enterprise financial architecture from a defensive programming standpoint—every 
              potential point of failure must have a fallback, and every state mutation must be audit-ready.
            </p>
            <div class="bullet-grid">
              <div class="bullet">
                <mat-icon>done_all</mat-icon>
                <span><strong>Idempotent Operations:</strong> Designing APIs where retrying failed network requests never results in duplicated monetary transfers.</span>
              </div>
              <div class="bullet">
                <mat-icon>library_books</mat-icon>
                <span><strong>Immutable Ledgers:</strong> Using CQRS and Event Sourcing patterns so the system state can be completely rebuilt from historical event streams.</span>
              </div>
              <div class="bullet">
                <mat-icon>verified_user</mat-icon>
                <span><strong>Role-Based Approval:</strong> Implementing multi-layered "Maker-Checker" (four-eyes principle) workflows directly into the software routing logic before high-value transactions execute.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent { }
