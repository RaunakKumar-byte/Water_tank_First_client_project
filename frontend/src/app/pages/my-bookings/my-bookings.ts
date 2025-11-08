import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common"
import { BookingService } from "../../services/booking"
import type { Booking } from "../../models/booking.model"
@Component({
  selector: 'app-my-bookings',
  standalone: false,
  templateUrl: './my-bookings.html',
  styleUrl: './my-bookings.scss',
})
export class MyBookings {
bookings: Booking[] = []
  upcomingBookings: Booking[] = []
  completedBookings: Booking[] = []

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.bookings$.subscribe((bookings) => {
      this.bookings = bookings
      this.upcomingBookings = bookings.filter((b) => b.bookingStatus === "upcoming")
      this.completedBookings = bookings.filter((b) => b.bookingStatus === "completed")
    })
  }

  getStatusBadgeClass(status: string): string {
    return status === "upcoming" ? "bg-primary" : "bg-success"
  }

  getPaymentBadgeClass(status: string): string {
    const classes: { [key: string]: string } = {
      completed: "bg-success",
      pending: "bg-warning",
      failed: "bg-danger",
    }
    return classes[status] || "bg-secondary"
  }
}
