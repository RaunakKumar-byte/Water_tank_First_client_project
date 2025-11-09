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
 showSuccessAlert = false;

  contactForm = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  successMessage = '';

  constructor(private bookingService: BookingService) {}

  onSubmit() {
    if (!this.validateForm()) return;

    const { name, email, phone, subject, message } = this.contactForm;


    const text = `*New Contact Message*%0A
Name: ${name}%0A
Email: ${email}%0A
Phone: ${phone}%0A
Subject: ${subject}%0A
Message: ${message}`;

    
    const whatsappNumber = '919977917312'; // Example: +91 9876543210 → 919876543210

    // ✅ Open WhatsApp chat
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');

    // ✅ Reset form & show success alert
    this.resetForm();
    this.successMessage = 'Message sent on WhatsApp successfully!';
    this.showSuccessAlert = true;
    setTimeout(() => (this.showSuccessAlert = false), 3000);
  }

  validateForm(): boolean {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.phone || !this.contactForm.message) {
      alert("Please fill in all required fields");
      return false;
    }
    return true;
  }

  resetForm(): void {
    this.contactForm = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
  }
}
