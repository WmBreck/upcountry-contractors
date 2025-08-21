import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Expert Services</h2>
          <p class="section-subtitle">
            From kitchen remodels to complete home renovations, we bring your vision to life
          </p>
        </div>
        
        <div class="services-grid">
          <div class="service-card glass-panel" *ngFor="let service of services; let i = index"
               [style.animation-delay]="(i * 0.1) + 's'">
            <div class="service-image">
              <img [src]="service.image" [alt]="service.title" class="service-img">
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <div class="service-features">
              <span class="feature" *ngFor="let feature of service.features">{{ feature }}</span>
            </div>
            <!-- Optional CTA text -->
            <div class="service-cta">
              <a class="btn btn-light" [routerLink]="service.link">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-section { /* unchanged */ }
    /* ... keep your existing styles ... */

    .service-cta {
      margin-top: 1.5rem;
    }

    .btn.btn-light {
      display: inline-block;
      padding: 0.5rem 1.2rem;
      border-radius: 9999px;
      background: rgba(255,255,255,0.9);
      color: #1d4ed8;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .btn.btn-light:hover {
      background: #fff;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      image: 'assets/Kitchen1.jpg',
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into the heart of your home with custom cabinets, countertops, and modern appliances.',
      features: ['Custom Cabinets', 'Granite Counters', 'Modern Appliances', 'Open Concepts'],
      link: '/kitchen-remodeling'
    },
    {
      image: 'assets/bathroom1.jpg',
      title: 'Bathroom Renovation',
      description: 'Create your personal spa with luxurious fixtures, tile work, and efficient layouts that maximize space.',
      features: ['Luxury Fixtures', 'Custom Tile', 'Walk-in Showers', 'Vanity Design'],
      link: '/bathroom-renovation'
    },
    {
      image: 'assets/addition1.jpg',
      title: 'Home Additions',
      description: 'Expand your living space with seamless additions that blend perfectly with your existing home.',
      features: ['Room Additions', 'Second Stories', 'Sunrooms', 'Garages'],
      link: '/home-additions'
    },
    {
      image: 'assets/outdoor1.jpg',
      title: 'Outdoor Living',
      description: 'Extend your home outdoors with decks, patios, and outdoor kitchens perfect for entertaining.',
      features: ['Custom Decks', 'Outdoor Kitchens', 'Fire Features', 'Landscaping'],
      link: '/outdoor-living'
    },
    {
      image: 'assets/remodel1.jpg',
      title: 'Whole Home Renovation',
      description: 'Complete home transformations that modernize every aspect of your living space.',
      features: ['Full Renovation', 'Structural Work', 'Modern Updates', 'Energy Efficiency'],
      link: '/whole-home-renovation'
    },
    {
      image: 'assets/repair1.jpg',
      title: 'Home Repairs',
      description: 'Professional repair services to fix and maintain your home, from minor fixes to major repairs.',
      features: ['Plumbing Repairs', 'Electrical Work', 'Drywall Fixes', 'Emergency Service'],
      link: '/home-repairs'
    }
  ];
}