import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Booking } from 'src/app/models/bookings/booking';
import { Observable } from 'rxjs';
import { Bookings } from 'src/app/models/bookings/bookings';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private httpClient: HttpClient) { }

  addBooking(booking: Booking): number {
    var bookingId: number;

    return bookingId;
  }

  editBooking(booking: Booking): Booking {
    
    return;
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
