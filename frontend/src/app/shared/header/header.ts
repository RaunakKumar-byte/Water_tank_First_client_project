import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from "@angular/common";
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
