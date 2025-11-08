import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
 isMenuCollapsed = true

  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed
  }
}
