import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Booking } from 'src/app/models/bookings/booking';
import { Observable } from 'rxjs';
import { Bookings } from 'src/app/models/bookings/bookings';

// this will be the url of our API
const requestUrl = 'https://localhost:44337/api/Bookings/';
const headers = new HttpHeaders({
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': 'localhost:4200'
});

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookings: Booking[];

  constructor(private httpClient: HttpClient) { }

  addBooking(booking: Booking): Observable<Booking> {
    return this.httpClient.post<Booking>(requestUrl, booking, { headers });
  }

  editBooking(booking: Booking): Observable<Booking> {
    return this.httpClient.post<Booking>(requestUrl, booking);
  }

  deleteBooking(bookingId: number): boolean {
    for (let i = 0; i < this.bookings.length; i++) {
      if (this.bookings[i].id == bookingId) {
        this.bookings.splice(i, 1);
      }
    }
    return;
  }

  getAllBookingsByDate(date: Date): Observable<Bookings> {

    return;
  }

  getAllBookingsByUserId(userId: number): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(`${requestUrl}${userId}`);
  }

  getBookingById(bookingId: number): Observable<Booking> {

    return;
  }

  getBookingsByDateRange(fromDate: Date, toDate: Date): Observable<Bookings> {

    return;
  }
}
