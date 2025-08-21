import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <!-- Updated logo -->
              <img src="assets/Upcountry_Logo.png" alt="Upcountry Contractors LLC Logo" class="footer-logo-image" />
            </div>
            <h3 class="footer-title">Upcountry Contractors LLC</h3>
            <p class="footer-description">
              Transforming homes across upcountry South Carolina with quality craftsmanship 
              and exceptional service.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">📘</a>
              <a href="#" class="social-link" aria-label="Instagram">📷</a>
              <a href="#" class="social-link" aria-label="LinkedIn">💼</a>
              <a href="#" class="social-link" aria-label="Google">🔍</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 class="section-title">Services</h4>
            <ul class="footer-links">
              <li><a routerLink="/kitchen-remodeling">Kitchen Remodeling</a></li>
              <li><a routerLink="/bathroom-renovation">Bathroom Renovation</a></li>
              <li><a routerLink="/home-additions">Home Additions</a></li>
              <li><a routerLink="/outdoor-living">Outdoor Living</a></li>
              <li><a routerLink="/whole-home-renovation">Whole Home Renovation</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="section-title">Service Areas</h4>
            <ul class="footer-links">
              <li>Greenville, SC</li>
              <li>Spartanburg, SC</li>
              <li>Greer, SC</li>
              <li>Simpsonville, SC</li>
              <li>Mauldin, SC</li>
              <li>Taylors, SC</li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="section-title">Contact Info</h4>
            <div class="contact-info">
              <a href="tel:+18646609913" class="contact-item">
                <span class="contact-icon">📞</span>
                (864) 660-9913
              </a>
              <a href="mailto:info@upcountrycontractors.com" class="contact-item">
                <span class="contact-icon">✉️</span>
                info&#64;upcountrycontractors.com
              </a>
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                Serving Upcountry South Carolina
              </div>
              <div class="contact-item">
                <span class="contact-icon">🕒</span>
                Mon-Fri: 7AM-6PM, Sat: 8AM-4PM
              </div>
            </div>
            <div class="owner-info">
              <img src="assets/garrett_thumbnail.jpg" alt="Garrett Lovin" class="owner-photo" />
              <div class="owner-details">
                <span class="owner-title">Owner</span>
                <span class="owner-name">Garrett Lovin</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p class="copyright">
              © 2025 Upcountry Contractors. All rights reserved.
            </p>
            <div class="footer-badges">
              <span class="badge">Licensed & Insured</span>
              <span class="badge">BBB Accredited</span>
              <span class="badge">Locally Owned</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* (your CSS styles remain unchanged) */
  `]
})
export class FooterComponent {}