import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { BookingService } from 'src/app/services/bookings/booking-service.service';
import { Booking } from 'src/app/models/bookings/booking';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit {
  newbookingform: FormGroup;
  panelOpenState;
  booking: Booking;

  constructor(private bookingService: BookingService) {
    this.newbookingform = new FormGroup({
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
      vegetarian: new FormControl(false),
      glutenFree: new FormControl(false),
      dairyFree: new FormControl(false),
      other: new FormControl(false),
      highchairRequired: new FormControl(false),
      wheelchairAccessibility: new FormControl(false)
    });
  }

  ngOnInit() {
  }

  newBooking() {
    if (this.newbookingform.status === 'VALID') {
      this.mapBooking(this.newbookingform);
      this.bookingService.addBooking(this.booking);
    } else {
      alert('The form has input errors');
    }
  }

  clearForm() {
    this.newbookingform.reset();
  }

  private mapBooking(form: FormGroup) {
    this.booking.bookingName = form.value.firstName + ' ' + form.value.lastName;
    this.booking.date = form.value.date;
    this.booking.numberOfPeople = form.value.noOfGuests;
    this.booking.time = form.value.time;
    this.booking.table = form.value.tableNumber;
    this.booking.notes = form.value.notes;
    this.booking.dietryRequirements = form.value.dietOther;
    this.booking.dairyFree = form.value.dairyFree;
    this.booking.glutenFree = form.value.glutenFree;
    this.booking.vegetarian = form.value.vegetarian;
    this.booking.highchairRequired = form.value.highchairRequired;
    this.booking.wheelchair = form.value.wheelchairAccessibility;;
  }
}
