import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking';
import type { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.scss',
})
export class Confirmation implements OnInit {
  booking: Booking | null = null;

  constructor(
    private bookingService: BookingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.booking = this.bookingService.getCurrentBooking();
    if (!this.booking) {
      // If no booking found, redirect to home
      this.router.navigate(['/']);
    }
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  viewBookings(): void {
    this.router.navigate(['/my-bookings']);
  }
}
