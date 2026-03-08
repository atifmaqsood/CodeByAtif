import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SectionTitleComponent } from '../../../ui/components/section-title.component';
import { AnimatedBackgroundComponent } from '../../../ui/svg/animated-background.component';

@Component({
  selector: 'app-manufacturing',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, SectionTitleComponent, AnimatedBackgroundComponent],
  template: `
    <app-animated-background></app-animated-background>
    <div class="domain-page">
      <div class="container section">
        <div class="domain-header fade-in-up">
            <mat-icon class="domain-main-icon">precision_manufacturing</mat-icon>
            <h1 class="domain-title gradient-text">Manufacturing Domain</h1>
            <p class="domain-subtitle">Transforming classical production lines with modern scalable technologies, IoT, and AI-driven automation.</p>
        </div>

        <div class="domain-content fade-in-up">
          <div class="intro-card glassmorphism">
            <p class="lead-text">
              The manufacturing industry is undergoing a digital renaissance. By integrating advanced software solutions, 
              Internet of Things (IoT) sensors, and real-time data analytics, modern manufacturing environments achieve 
              unprecedented precision, efficiency, and safety. In my roles across varying high-tech manufacturing projects, 
              I have spearheaded the architectural design of software systems that bridge the gap between physical machinery 
              and cloud-based intelligence, delivering measurable increases in OEE (Overall Equipment Effectiveness) and 
              driving down operational bottlenecks.
            </p>
          </div>

          <div class="grid-section">
            <mat-card class="feature-card">
              <mat-card-header>
                <div class="icon-wrapper">
                  <mat-icon>memory</mat-icon>
                </div>
                <mat-card-title>IoT & Edge Computing</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <ul>
                  <li><mat-icon>check_circle</mat-icon> <strong>Custom IoT Gateways:</strong> I engineered scalable edge-computing nodes that filter and process high-frequency sensor telemetry locally before cloud transmission.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Predictive Maintenance:</strong> Developed algorithms that analyze machine vibration and temperature to predict failures before they happen, saving costly downtime.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Low-Latency Processing:</strong> Implemented real-time anomaly detection pipelines ensuring critical safety operations occur with sub-millisecond delays.</li>
                </ul>
              </mat-card-content>
            </mat-card>

            <mat-card class="feature-card">
              <mat-card-header>
                <div class="icon-wrapper">
                  <mat-icon>inventory_2</mat-icon>
                </div>
                <mat-card-title>Supply Chain Optimization</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <ul>
                  <li><mat-icon>check_circle</mat-icon> <strong>Inventory Tracking:</strong> Built end-to-end ERP integrations utilizing RFID and barcode metadata for seamless state-tracking.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Demand Forecasting:</strong> Leveraged historical data to feed AI-driven forecasting models, allowing procurement teams to buy raw materials effectively.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>JIT Routing:</strong> Orchestrated dynamic Just-In-Time delivery routes taking into consideration real-time factory conditions.</li>
                </ul>
              </mat-card-content>
            </mat-card>

            <mat-card class="feature-card">
              <mat-card-header>
                <div class="icon-wrapper">
                  <mat-icon>analytics</mat-icon>
                </div>
                <mat-card-title>Quality Control Systems</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <ul>
                  <li><mat-icon>check_circle</mat-icon> <strong>Automated Defect Detection:</strong> Integrated computer vision models over continuous production belts to spot microscopic anomalies.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>SPC Dashboards:</strong> Led the frontend development of comprehensive Statistical Process Control (SPC) panels for floor managers.</li>
                  <li><mat-icon>check_circle</mat-icon> <strong>Compliance Workflows:</strong> Automated complex regulatory compliance generation, keeping audit trails secure and irrefutable.</li>
                </ul>
              </mat-card-content>
            </mat-card>
          </div>

          <div class="detailed-info glassmorphism">
            <h3>My Architectural Approach</h3>
            <p>
              Constructing solutions for the factory floor requires a deep understanding of unique constraints such as intermittent 
              network connectivity, harsh environmental interference, heavy industrial hardware integrations, and stringent safety protocols. 
              My strategy frequently involves resilient local edge services combined with elastic cloud processing for heavy analytics.
            </p>
            <div class="bullet-grid">
              <div class="bullet">
                <mat-icon>api</mat-icon>
                <span><strong>Protocol Translation:</strong> I have built robust abstraction layers capable of unifying data structures from OPC-UA, MQTT, Modbus, and custom PLCs.</span>
              </div>
              <div class="bullet">
                <mat-icon>cloud_sync</mat-icon>
                <span><strong>Data Lakes:</strong> I orchestrate continuous cloud syncing pipelines, aggregating massive streams of sensor analytics to train long-term predictive models.</span>
              </div>
              <div class="bullet">
                <mat-icon>security</mat-icon>
                <span><strong>Zero Trust Security:</strong> Designed strict network partitions ensuring that compromised enterprise networks cannot breach physical air-gapped industrial control systems.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./manufacturing.component.scss']
})
export class ManufacturingComponent { }
