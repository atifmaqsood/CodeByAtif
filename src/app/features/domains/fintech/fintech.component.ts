import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SectionTitleComponent } from '../../../ui/components/section-title.component';
import { AnimatedBackgroundComponent } from '../../../ui/svg/animated-background.component';

@Component({
  selector: 'app-fintech',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, SectionTitleComponent, AnimatedBackgroundComponent],
  template: `
    <app-animated-background></app-animated-background>
    <div class="domain-page">
      <div class="container section">
        <div class="domain-header fade-in-up">
            <mat-icon class="domain-main-icon">account_balance</mat-icon>
            <h1 class="domain-title gradient-text">FinTech Domain</h1>
            <p class="domain-subtitle">Engineering secure, high-performance financial platforms and next-generation payment systems.</p>
        </div>

        <div class="domain-content fade-in-up">
          <div class="intro-card glassmorphism">
            <p class="lead-text">
              In the fast-paced world of financial technology, systems must handle massive transactional volumes with zero downtime and absolute precision. 
              I have architected and maintained scalable real-time payment gateways, engineered compliance-centric distributed ledgers, and delivered 
              seamless, intuitive banking experiences. My core focus is ensuring that the platforms I build prioritize both uncompromising security 
              and lightning-fast transactional throughput to build user trust.
            </p>
          </div>

          <div class="grid-section">
            <mat-card class="feature-card">
              <mat-card-header>
                <div class="icon-wrapper">
                  <mat-icon>payments</mat-icon>
                </div>
                <mat-card-title>Payment Gateways & Processing</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <ul>
                  <li><mat-icon>check_circle</mat-icon> <strong>Ledger Systems:</strong> I designed real-time, multi-currency transaction ledgers capable of handling millions of daily clearings.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Payment Routing:</strong> Implemented high-throughput intelligent payment routing to minimize transaction fees and latency.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Fraud Detection:</strong> Integrated automated ML-based fraud detection to identify and halt suspicious transactions in real-time.</li>
                </ul>
              </mat-card-content>
            </mat-card>

            <mat-card class="feature-card">
              <mat-card-header>
                <div class="icon-wrapper">
                  <mat-icon>gavel</mat-icon>
                </div>
                <mat-card-title>Regulatory & Compliance Systems</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <ul>
                  <li><mat-icon>check_circle</mat-icon> <strong>KYC/AML:</strong> Spearheaded the development of strict automated workflows for customer identity verification.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>PCI-DSS:</strong> Structured cloud infrastructure and codebases specifically to meet stringent PCI-DSS audit requirements.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Reporting Dashboards:</strong> Constructed automated reporting dashboards that synthesize massive tabular data for regulatory authorities.</li>
                </ul>
              </mat-card-content>
            </mat-card>

            <mat-card class="feature-card">
              <mat-card-header>
                <div class="icon-wrapper">
                  <mat-icon>timeline</mat-icon>
                </div>
                <mat-card-title>Trading & Wealth Tech</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <ul>
                  <li><mat-icon>check_circle</mat-icon> <strong>Market Streaming:</strong> Built low-latency WebSockets infrastructure for continuous market data streaming.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Algorithmic Execution:</strong> Optimized algorithmic trading execution engines focusing on millisecond latency numbers.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Portfolio Analytics:</strong> Created real-time portfolio valuation analytics bridging legacy data sources with modern frontends.</li>
                </ul>
              </mat-card-content>
            </mat-card>
          </div>

          <div class="detailed-info glassmorphism">
            <h3>My Architectural Approach</h3>
            <p>
              Financial applications require fault-tolerant architectures utilizing distributed databases, event-driven microservices, 
              and robust message queues. In my work, data consistency and transactional integrity are never compromised, relying on 
              strict structural patterns.
            </p>
            <div class="bullet-grid">
              <div class="bullet">
                <mat-icon>lock</mat-icon>
                <span><strong>Idempotency:</strong> I guarantee exactly-once execution logic across distributed systems to prevent catastrophic duplicate financial processing.</span>
              </div>
              <div class="bullet">
                <mat-icon>schema</mat-icon>
                <span><strong>Event Sourcing:</strong> I utilize append-only event logs (such as Kafka) to maintain an indisputable, replayable history of financial transactions.</span>
              </div>
              <div class="bullet">
                <mat-icon>dns</mat-icon>
                <span><strong>ACID Compliance:</strong> I meticulously design relational database boundaries and employ distributed locking mechanisms for absolute data consistency.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./fintech.component.scss']
})
export class FintechComponent { }
