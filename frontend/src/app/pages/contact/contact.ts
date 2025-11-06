import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

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

  onSubmit(): void {
    if (this.validateForm()) {
      this.showSuccessAlert = true
      this.resetForm()

      setTimeout(() => {
        this.showSuccessAlert = false
      }, 5000)
    }
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
