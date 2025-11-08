import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs"
import type { Booking } from "../models/booking.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BookingService {

  private apiUrl='http://localhost:5000/api';

    constructor(private http: HttpClient) {}

  // 1️⃣ Create booking
  createBooking(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/bookings`, data);
  }

  // 2️⃣ Get all bookings
  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/bookings`);
  }

  // 3️⃣ Get booking by bookingId
  getBookingById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/bookings/${id}`);
  }

  // 4️⃣ Update payment status
  updatePayment(id: string, body: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/bookings/${id}/payment`, body);
  }

  // 5️⃣ Send contact message
  sendContact(form: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, form);
  }
  
private currentBookingSubject = new BehaviorSubject<Booking | null>(null)
  public currentBooking$ = this.currentBookingSubject.asObservable()

  private bookingsSubject = new BehaviorSubject<Booking[]>(this.getDummyBookings())
  public bookings$ = this.bookingsSubject.asObservable()

  setCurrentBooking(booking: Booking): void {
    this.currentBookingSubject.next(booking)
  }

  getCurrentBooking(): Booking | null {
    return this.currentBookingSubject.value
  }

  addBooking(booking: Booking): void {
    const bookings = this.bookingsSubject.value
    bookings.unshift(booking)
    this.bookingsSubject.next(bookings)
  }

  private getDummyBookings(): Booking[] {
    return [
      {
        id: "BK001",
        customerName: "John Doe",
        email: "john@example.com",
        phone: "9876543210",
        address: "123 Main Street",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400001",
        tankType: "Underground",
        tankCapacity: "1000L",
        serviceType: "Deep Cleaning",
        preferredDate: "2024-02-15",
        preferredTime: "10:00 AM",
        additionalNotes: "Please call before arriving",
        paymentStatus: "completed",
        bookingStatus: "upcoming",
        bookingDate: "2024-01-28",
        totalAmount: 1500,
      },
      {
        id: "BK002",
        customerName: "Jane Smith",
        email: "jane@example.com",
        phone: "9876543211",
        address: "456 Park Avenue",
        city: "Delhi",
        state: "Delhi",
        pincode: "110001",
        tankType: "Overhead",
        tankCapacity: "500L",
        serviceType: "Regular Cleaning",
        preferredDate: "2024-01-20",
        preferredTime: "2:00 PM",
        paymentStatus: "completed",
        bookingStatus: "completed",
        bookingDate: "2024-01-10",
        totalAmount: 800,
      },
      {
        id: "BK003",
        customerName: "Raj Kumar",
        email: "raj@example.com",
        phone: "9876543212",
        address: "789 Lake View",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560001",
        tankType: "Underground",
        tankCapacity: "2000L",
        serviceType: "Deep Cleaning + Sanitization",
        preferredDate: "2024-02-20",
        preferredTime: "9:00 AM",
        additionalNotes: "Need invoice for company reimbursement",
        paymentStatus: "completed",
        bookingStatus: "upcoming",
        bookingDate: "2024-01-25",
        totalAmount: 2200,
      },
    ]
  }

}
