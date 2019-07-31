import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { BookingService } from 'src/app/services/bookings/booking-service.service';
import { Booking } from 'src/app/models/bookings/booking';
import { format } from 'url';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit {
  newbookingform: FormGroup;
  panelOpenState;

  constructor(private bookingService: BookingService) {
    this.newbookingform =  new FormGroup({
      date: new FormControl(new Date(), Validators.required),
      noOfGuests: new FormControl('', Validators.required),
      tableNumber: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      dietOther: new FormControl(''),
      notes: new FormControl(''),
      vegetarian: new FormControl(''),
      glutenFree: new FormControl(''),
      dairyFree: new FormControl(''),
      other: new FormControl(''),
      highchairRequired: new FormControl(''),
      wheelchairAccessibility: new FormControl('')
    }); // the form group needs to be initialised, and each form control needs to be passed in with a key and value
   }

  ngOnInit() {
  }

  private newBooking() {

  }

  private saveBookingTest() {
    console.log('Form Valid? ', this.newbookingform.status);
    console.log('Form Data: ', this.newbookingform.value);
  }

}
