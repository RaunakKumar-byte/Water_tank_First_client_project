import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BookingService } from '../../services/booking';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
showSuccessAlert = false

  contactForm = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  }

 successMessage = '';

  constructor(private bookingService: BookingService) {}

  onSubmit() {
    this.bookingService.sendContact(this.contactForm).subscribe({
      next: () => {
        this.successMessage = 'Message sent successfully!';
        this.contactForm = { name: '', email: '', message: '', subject: '', phone: ''};
      },
      error: (err) => console.error('Contact error:', err)
    });
  }


  validateForm(): boolean {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.phone || !this.contactForm.message) {
      alert("Please fill in all required fields")
      return false
    }
    return true
  }

  resetForm(): void {
    this.contactForm = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    }
  }
}
