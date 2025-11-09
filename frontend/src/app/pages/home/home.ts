import { Component, OnInit } from '@angular/core';
import { Review } from '../../services/review';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

   reviews: any[] = [];
  formData: any = { name: '', email: '', rating: 5, feedback: '' };
  selectedPhoto: File | null = null;

  constructor(private reviewService: Review) {}

  ngOnInit() {
    this.loadReviews();
  }

  loadReviews() {
    this.reviewService.getReviews().subscribe(res => this.reviews = res);
  }

  onFileChange(event: any) {
    this.selectedPhoto = event.target.files[0];
  }

  submitReview() {
    const data = new FormData();
    data.append('name', this.formData.name);
    data.append('email', this.formData.email);
    data.append('rating', this.formData.rating);
    data.append('feedback', this.formData.feedback);
    if (this.selectedPhoto) data.append('photo', this.selectedPhoto);

    this.reviewService.addReview(data).subscribe({
      next: () => {
        alert('Review added successfully!');
        this.formData = { name: '', email: '', rating: 5, feedback: '' };
        this.selectedPhoto = null;
        this.loadReviews();
      },
      error: () => alert('Error adding review')
    });
  }
services = [
  {
    icon: "bi-check-circle",
    title: "Full WaterTank Cleaning",
    description: "Complete cleaning of the water tank to remove dirt, algae, and sediments.",
    price: "₹800"
  },
  {
    icon: "bi-check-circle",
    title: "Disinfection & Sanitization",
    description: "Ensure safe and hygienic water by disinfecting and sanitizing the tank.",
    price: "₹1,200"
  },
  {
    icon: "bi-check-circle",
    title: "Overhead and Underground WaterTank Cleaning",
    description: "Professional cleaning services for both overhead and underground tanks.",
    price: "₹1,500"
  }
];


  testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Excellent service! The team was professional and thorough. My water tank has never been cleaner.",
    },
    {
      name: "Amit Patel",
      location: "Delhi",
      rating: 5,
      text: "Very satisfied with the deep cleaning service. Highly recommend AquaClean for water tank maintenance.",
    },
    {
      name: "Sneha Reddy",
      location: "Bangalore",
      rating: 5,
      text: "Professional team, affordable prices, and great results. Will definitely book again!",
    },
  ]
}
