import { Component } from '@angular/core';

@Component({
    selector: 'app-animated-background',
    imports: [],
    template: `
    <div class="animated-background">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
      </div>
      
      <svg class="svg-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:rgba(99, 102, 241, 0.1);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(217, 70, 239, 0.1);stop-opacity:1" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:rgba(217, 70, 239, 0.08);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(99, 102, 241, 0.08);stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <!-- Animated waves -->
        <path fill="url(#grad1)" opacity="0.5">
          <animate attributeName="d" 
            dur="20s" 
            repeatCount="indefinite"
            values="
              M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 L1440,800 L0,800 Z;
              M0,200 C320,100,420,100,740,200 C1060,300,1120,300,1440,200 L1440,800 L0,800 Z;
              M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 L1440,800 L0,800 Z;
            "
          />
        </path>
        
        <path fill="url(#grad2)" opacity="0.5">
          <animate attributeName="d" 
            dur="25s" 
            repeatCount="indefinite"
            values="
              M0,240 C360,100,480,100,840,240 C1200,380,1280,380,1440,240 L1440,800 L0,800 Z;
              M0,300 C360,380,480,380,840,300 C1200,220,1280,220,1440,300 L1440,800 L0,800 Z;
              M0,240 C360,100,480,100,840,240 C1200,380,1280,380,1440,240 L1440,800 L0,800 Z;
            "
          />
        </path>
      </svg>
    </div>
  `,
    styles: [`
    .animated-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;
      background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    }
    
    .floating-shapes {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    
    .shape {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
      opacity: 0.3;
      animation: float 20s ease-in-out infinite;
    }
    
    .shape-1 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent);
      top: 10%;
      left: 10%;
      animation-duration: 25s;
    }
    
    .shape-2 {
      width: 350px;
      height: 350px;
      background: radial-gradient(circle, rgba(217, 70, 239, 0.3), transparent);
      top: 50%;
      right: 10%;
      animation-duration: 30s;
      animation-delay: 5s;
    }
    
    .shape-3 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(236, 72, 153, 0.25), transparent);
      bottom: 20%;
      left: 20%;
      animation-duration: 22s;
      animation-delay: 2s;
    }
    
    .shape-4 {
      width: 450px;
      height: 450px;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent);
      top: 30%;
      right: 30%;
      animation-duration: 28s;
      animation-delay: 7s;
    }
    
    .shape-5 {
      width: 320px;
      height: 320px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.25), transparent);
      bottom: 10%;
      right: 15%;
      animation-duration: 26s;
      animation-delay: 3s;
    }
    
    .svg-background {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.7;
    }
    
    @keyframes float {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      25% {
        transform: translate(30px, -50px) scale(1.1);
      }
      50% {
        transform: translate(-20px, -80px) scale(0.9);
      }
      75% {
        transform: translate(-40px, -30px) scale(1.05);
      }
    }
    
    @media (max-width: 768px) {
      .shape {
        filter: blur(40px);
      }
      
      .shape-1, .shape-2, .shape-3, .shape-4, .shape-5 {
        width: 200px;
        height: 200px;
      }
    }
  `]
})
export class AnimatedBackgroundComponent { }
