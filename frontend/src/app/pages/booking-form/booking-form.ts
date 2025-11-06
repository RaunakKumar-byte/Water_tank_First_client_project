import { Component } from '@angular/core';
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { Router } from "@angular/router"
import { BookingService } from "../../services/booking";
import type { Booking } from "../../models/booking.model";
@Component({
  selector: 'app-booking-form',
  standalone: false,
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.scss',
})
export class BookingForm {
 showPaymentSection = false

  formData = {
    customerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    tankType: "",
    tankCapacity: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    additionalNotes: "",
  }

  constructor(
    private bookingService: BookingService,
    private router: Router,
  ) {}

  onSubmit(): void {
    if (this.validateForm()) {
      this.showPaymentSection = true
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    }
  }

  validateForm(): boolean {
    const required = [
      "customerName",
      "email",
      "phone",
      "address",
      "city",
      "state",
      "pincode",
      "tankType",
      "tankCapacity",
      "serviceType",
      "preferredDate",
      "preferredTime",
    ]

    for (const field of required) {
      if (!this.formData[field as keyof typeof this.formData]) {
        alert(`Please fill in the ${field} field`)
        return false
      }
    }
    return true
  }

  confirmPayment(): void {
    const booking: Booking = {
      id: "BK" + Math.random().toString(36).substr(2, 9).toUpperCase(),
      ...this.formData,
      paymentStatus: "completed",
      bookingStatus: "upcoming",
      bookingDate: new Date().toISOString().split("T")[0],
      totalAmount: this.calculateAmount(),
    }

    this.bookingService.setCurrentBooking(booking)
    this.bookingService.addBooking(booking)
    this.router.navigate(["/confirmation"])
  }

  calculateAmount(): number {
    const serviceRates: { [key: string]: number } = {
      "Regular Cleaning": 800,
      "Deep Cleaning": 1500,
      Sanitization: 1200,
      "Deep Cleaning + Sanitization": 2200,
    }
    return serviceRates[this.formData.serviceType] || 1000
  }
}
