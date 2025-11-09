import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuCollapsed = true;

  constructor(private router: Router) {
    // Close menu and scroll to top when route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isMenuCollapsed = true;
        // Scroll to top smoothly when navigation completes
        this.scrollToTop();
      });
  }

  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  closeMenu(): void {
    this.isMenuCollapsed = true;
  }

  // Smooth scroll to top function (called on navigation end)
  private scrollToTop(): void {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // Smooth scroll animation
      });
    }, 100);
  }

  // Immediate scroll to top when clicking nav link (before route change)
  scrollToTopOnClick(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
