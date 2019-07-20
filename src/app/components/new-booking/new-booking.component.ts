import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BookingService } from 'src/app/services/bookings/booking-service.service';
import { Booking } from 'src/app/models/bookings/booking';
import { format } from 'url';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit {
  date = new FormControl(new Date());
  date2 = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  booking: Booking;
  noOfGuests = new FormControl(null);
  tableNumber = new FormControl(null);
  time = new FormControl(null);
  firstName = new FormControl(null);
  lastName = new FormControl(null);
  phoneNumber = new FormControl(null);
  email = new FormControl(null);
  dietOther = new FormControl(null);
  notes = new FormControl(null);


  
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.booking =  new Booking();
  }

  private newBooking() {

  }

}
