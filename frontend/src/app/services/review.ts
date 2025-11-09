import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Review {
   private apiUrl = 'https://water-tank-first-client-project.onrender.com/api/reviews';

  constructor(private http: HttpClient) {}

  // Fetch all reviews
  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new review
  addReview(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
