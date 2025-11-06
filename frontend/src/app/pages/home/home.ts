import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
services = [
    {
      icon: "bi-droplet",
      title: "Regular Cleaning",
      description: "Thorough cleaning of your water tank to remove sediments and impurities.",
      price: "₹800",
    },
    {
      icon: "bi-shield-check",
      title: "Deep Cleaning",
      description: "Comprehensive cleaning with advanced equipment and eco-friendly solutions.",
      price: "₹1,500",
    },
    {
      icon: "bi-virus",
      title: "Sanitization",
      description: "Complete disinfection to eliminate bacteria and ensure safe water.",
      price: "₹1,200",
    },
  ]

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
