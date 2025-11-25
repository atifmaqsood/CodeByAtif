import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-background',
  imports: [CommonModule],
  template: `
    <div class="animated-background">
      <!-- Floating Geometric Shapes -->
      <div class="shape circle circle-1"></div>
      <div class="shape circle circle-2"></div>
      <div class="shape circle circle-3"></div>
      <div class="shape rectangle rectangle-1"></div>
      <div class="shape rectangle rectangle-2"></div>
      <div class="shape triangle triangle-1"></div>
      <div class="shape triangle triangle-2"></div>
      
      <!-- Gradient Orbs -->
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      
      <!-- Grid Pattern Overlay -->
      <div class="grid-pattern"></div>
    </div>
  `,
  styles: [`
    .animated-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      z-index: -1;
      background: linear-gradient(135deg, #0a0a0f 0%, #13131a 50%, #1a1a24 100%);
    }
    
    .shape {
      position: absolute;
      opacity: 0.15;
      background: rgba(102, 126, 234, 0.1);
      backdrop-filter: blur(2px);
      border: 1px solid rgba(102, 126, 234, 0.2);
    }
    
    /* Circles */
    .circle {
      border-radius: 50%;
    }
    
    .circle-1 {
      width: 400px;
      height: 400px;
      top: -100px;
      right: -100px;
      background: rgba(102, 126, 234, 0.08);
      animation: float 20s ease-in-out infinite, rotate 30s linear infinite;
    }
    
    .circle-2 {
      width: 250px;
      height: 250px;
      bottom: 10%;
      left: 5%;
      background: rgba(236, 72, 153, 0.08);
      animation: float 15s ease-in-out infinite reverse, rotate 25s linear infinite;
      animation-delay: -5s;
    }
    
    .circle-3 {
      width: 180px;
      height: 180px;
      top: 50%;
      right: 20%;
      background: rgba(139, 92, 246, 0.08);
      animation: float 18s ease-in-out infinite;
      animation-delay: -10s;
    }
    
    /* Rectangles */
    .rectangle {
      border-radius: 20px;
    }
    
    .rectangle-1 {
      width: 300px;
      height: 200px;
      top: 20%;
      left: 10%;
      background: rgba(79, 172, 254, 0.06);
      animation: float 22s ease-in-out infinite, rotateSmall 40s linear infinite;
      animation-delay: -3s;
      transform: rotate(25deg);
    }
    
    .rectangle-2 {
      width: 200px;
      height: 150px;
      bottom: 20%;
      right: 15%;
      background: rgba(245, 87, 108, 0.06);
      animation: float 19s ease-in-out infinite reverse, rotateSmall 35s linear infinite reverse;
      animation-delay: -7s;
      transform: rotate(-15deg);
    }
    
    /* Triangles */
    .triangle {
      width: 0;
      height: 0;
      background: transparent;
      border-left: 100px solid transparent;
      border-right: 100px solid transparent;
    }
    
    .triangle-1 {
      border-bottom: 173px solid rgba(16, 185, 129, 0.08);
      top: 15%;
      right: 30%;
      animation: float 17s ease-in-out infinite, rotate 45s linear infinite;
      animation-delay: -4s;
    }
    
    .triangle-2 {
      border-bottom: 120px solid rgba(245, 158, 11, 0.08);
      bottom: 30%;
      left: 25%;
      animation: float 21s ease-in-out infinite reverse, rotate 50s linear infinite reverse;
      animation-delay: -8s;
    }
    
    /* Gradient Orbs */
    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.3;
      animation: pulse 8s ease-in-out infinite;
    }
    
    .orb-1 {
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
      top: -200px;
      left: -200px;
      animation-delay: 0s;
    }
    
    .orb-2 {
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%);
      bottom: -150px;
      right: -150px;
      animation-delay: -4s;
    }
    
    .orb-3 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation-delay: -2s;
    }
    
    /* Grid Pattern */
    .grid-pattern {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      opacity: 0.5;
    }
    
    /* Animations */
    @keyframes float {
      0%, 100% {
        transform: translateY(0) translateX(0);
      }
      25% {
        transform: translateY(-30px) translateX(20px);
      }
      50% {
        transform: translateY(-50px) translateX(-10px);
      }
      75% {
        transform: translateY(-20px) translateX(30px);
      }
    }
    
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    @keyframes rotateSmall {
      0% {
        transform: rotate(var(--initial-rotation, 0deg));
      }
      100% {
        transform: rotate(calc(var(--initial-rotation, 0deg) + 360deg));
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 0.3;
        transform: scale(1);
      }
      50% {
        opacity: 0.5;
        transform: scale(1.1);
      }
    }
    
    @media (max-width: 768px) {
      .shape {
        opacity: 0.1;
      }
      
      .circle-1 {
        width: 250px;
        height: 250px;
      }
      
      .rectangle-1,
      .rectangle-2 {
        width: 150px;
        height: 100px;
      }
      
      .orb {
        filter: blur(60px);
      }
    }
  `]
})
export class AnimatedBackgroundComponent {
}
