import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Booking, BookingStatus } from 'src/app/models/bookings/booking';
import { Observable } from 'rxjs';
import { Bookings } from 'src/app/models/bookings/bookings';


// this will be the url of our API
const requestUrl = '';
const BOOKING_DATA: Booking[] = [
  {staffId: 123, bookingName: 'Ethan', customerName: 'Ethan', date: new Date() , duration: 1.5, numberOfPeople: 3, table: 1,
  status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
  {staffId: 123, bookingName: 'Josh', customerName: 'Ethan', date: new Date() , duration: 0.5, numberOfPeople: 5, table: 2,
  status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
  {staffId: 123, bookingName: 'Ethan', customerName: 'Ethan', date: new Date() , duration: '30 min', numberOfPeople: 2, table: 3,
  status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
  {staffId: 123, bookingName: 'Ethan', customerName: 'Ethan', date: new Date() , duration: 2, numberOfPeople: 3, table: 4,
  status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
  {staffId: 123, bookingName: 'Nathan', customerName: 'Ethan', date: new Date() , duration: 1.5, numberOfPeople: 2, table: 4,
  status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
  {staffId: 123, bookingName: 'Ethan', customerName: 'Ethan', date: new Date() , duration: 2, numberOfPeople: 3, table: 2,
  status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
  {staffId: 123, bookingName: 'Steven', customerName: 'Ethan', date: new Date() , duration: 1.5, numberOfPeople: 7, table: 4,
  status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
  {staffId: 123, bookingName: 'Peter', customerName: 'Ethan', date: new Date() , duration: 3, numberOfPeople: 8, table: 5,
  status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
  {staffId: 123, bookingName: 'Josh', customerName: 'Ethan', date: new Date() , duration: '35 min', numberOfPeople: 5, table: 6,
  status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
  {staffId: 123, bookingName: 'Dave', customerName: 'Ethan', date: new Date() , duration: 1.5, numberOfPeople: 7, table: 4,
  status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
  {staffId: 123, bookingName: 'Ethan', customerName: 'Ethan', date: new Date() , duration: '45 min', numberOfPeople: 2, table: 5,
  status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
  {staffId: 123, bookingName: 'Ethan', customerName: 'Ethan', date: new Date() , duration: '1 h 20', numberOfPeople: 3, table: 8,
  status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
  {staffId: 123, bookingName: 'Ethan', customerName: 'Ethan', date: new Date() , duration: 4, numberOfPeople: 3, table: 9,
  status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}

];

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookings: Booking[];

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

  getAllBookingsByUserId(userId: number): Booking[] {
    this.bookings = [
      {bookingId: 101, staffId: 123, bookingName: 'Ethan', customerName: 'Ethan', date: new Date() , duration: 1.5, numberOfPeople: 3, table: 1,
      status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
      {bookingId: 101, staffId: 123, bookingName: 'Josh', customerName: 'Ethan', date: new Date() , duration: 0.5, numberOfPeople: 5, table: 2,
      status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
      {bookingId: 101, staffId: 123, bookingName: 'Ethan', customerName: 'Ethan', date: new Date() , duration: '30 min', numberOfPeople: 2, table: 3,
      status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
      {bookingId: 101, staffId: 123, bookingName: 'Ethan', customerName: 'Ethan', date: new Date() , duration: 2, numberOfPeople: 3, table: 4,
      status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
      {bookingId: 101, staffId: 123, bookingName: 'Nathan', customerName: 'Ethan', date: new Date() , duration: 1.5, numberOfPeople: 2, table: 4,
      status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
      {bookingId: 101, staffId: 123, bookingName: 'Ethan', customerName: 'Ethan', date: new Date() , duration: 2, numberOfPeople: 3, table: 2,
      status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
      {bookingId: 101, staffId: 123, bookingName: 'Steven', customerName: 'Ethan', date: new Date() , duration: 1.5, numberOfPeople: 7, table: 4,
      status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
      {bookingId: 101, staffId: 123, bookingName: 'Peter', customerName: 'Ethan', date: new Date() , duration: 3, numberOfPeople: 8, table: 5,
      status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
      {bookingId: 101, staffId: 123, bookingName: 'Josh', customerName: 'Ethan', date: new Date() , duration: '35 min', numberOfPeople: 5, table: 6,
      status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
      {bookingId: 101, staffId: 123, bookingName: 'Dave', customerName: 'Ethan', date: new Date() , duration: 1.5, numberOfPeople: 7, table: 4,
      status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
      {bookingId: 101, staffId: 123, bookingName: 'Ethan', customerName: 'Ethan', date: new Date() , duration: '45 min', numberOfPeople: 2, table: 5,
      status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
      {bookingId: 101, staffId: 123, bookingName: 'Ethan', customerName: 'Ethan', date: new Date() , duration: '1 h 20', numberOfPeople: 3, table: 8,
      status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}, 
      {bookingId: 101, staffId: 123, bookingName: 'Ethan', customerName: 'Ethan', date: new Date() , duration: 4, numberOfPeople: 3, table: 9,
      status: BookingStatus.active,checkedIn: true, notes: 'Fussy'}
    ];

    return this.bookings;
  }

  getBookingById(bookingId: number): Observable<Booking> {

    return;
  }

  getBookingsByDateRange(fromDate: Date, toDate: Date): Observable<Bookings> {

    return;
  }
}
