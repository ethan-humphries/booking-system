import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Booking } from 'src/app/models/bookings/booking';
import { Observable } from 'rxjs';
import { Bookings } from 'src/app/models/bookings/bookings';

// this will be the url of our API
const requestUrl = '';

@Injectable({
  providedIn: 'root'
})
export class BookingService{

  constructor(private httpClient: HttpClient) { }

  addBooking(booking: Booking): Observable<number> {
    var bookingId = this.httpClient.post<number>(requestUrl, booking);
    return bookingId;
  }

  editBooking(booking: Booking): Observable<Booking> {
    return this.httpClient.post<Booking>(requestUrl, booking);
  }

  deleteBooking(bookingId: number): boolean {
    
    return;
  }

  getAllBookingsByDate(date: Date): Observable<Bookings> {

    return;
  }

  getAllBookingsByUserId(userId: number): Observable<Bookings> {

    return;
  }

  getBookingById(bookingId: number): Observable<Booking> {

    return;
  }

  getBookingsByDateRange(fromDate: Date, toDate: Date): Observable<Bookings> {

    return;
  }
}
