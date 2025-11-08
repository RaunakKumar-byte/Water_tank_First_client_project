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
bookingSummary: any;
  qrCode: string = '';
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
  if (!this.validateForm()) return;

  this.bookingService.createBooking(this.formData).subscribe({
    next: (res) => {
      console.log('✅ Booking created:', res);
      this.bookingSummary = res.booking;
      this.qrCode = res.qrDataUrl;  // backend QR data URL
      this.showPaymentSection = true; // show payment confirmation area
    },
    error: (err) => {
      console.error('❌ Booking error:', err);
      alert('Something went wrong while booking. Please try again.');
    }
  });
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
    // Use the booking from backend response if available, otherwise create from form data
    let booking: Booking;
    
    if (this.bookingSummary) {
      // Map backend booking to frontend Booking interface
      booking = {
        id: this.bookingSummary.bookingId || this.bookingSummary.id,
        customerName: this.bookingSummary.customerName,
        email: this.bookingSummary.email,
        phone: this.bookingSummary.phone,
        address: this.bookingSummary.address,
        city: this.bookingSummary.city,
        state: this.bookingSummary.state,
        pincode: this.bookingSummary.pincode,
        tankType: this.bookingSummary.tankType,
        tankCapacity: this.bookingSummary.tankCapacity,
        serviceType: this.bookingSummary.serviceType,
        preferredDate: this.bookingSummary.preferredDate,
        preferredTime: this.bookingSummary.preferredTime,
        additionalNotes: this.bookingSummary.additionalNotes,
        paymentStatus: "completed",
        bookingStatus: this.bookingSummary.bookingStatus || "upcoming",
        bookingDate: this.bookingSummary.bookingDate || new Date().toISOString().split("T")[0],
        totalAmount: this.bookingSummary.totalAmount || this.calculateAmount(),
      }
    } else {
      // Fallback: create from form data (shouldn't happen if backend works)
      booking = {
        id: "BK" + Math.random().toString(36).substr(2, 9).toUpperCase(),
        ...this.formData,
        paymentStatus: "completed",
        bookingStatus: "upcoming",
        bookingDate: new Date().toISOString().split("T")[0],
        totalAmount: this.calculateAmount(),
      }
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
