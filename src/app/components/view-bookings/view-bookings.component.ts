import { Component, OnInit, ViewChild } from '@angular/core';
import { Bookings } from 'src/app/models/bookings/bookings';
import { Booking, BookingStatus } from 'src/app/models/bookings/booking';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

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

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.scss']
})
export class ViewBookingsComponent implements OnInit {
  displayedColumns: string[] = ['staffId', 'bookingName', 'customerName', 'date', 'duration', 'guests', 'table', 'status', 'checkedIn', 'notes'];
  dataSource = new MatTableDataSource(BOOKING_DATA);
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
