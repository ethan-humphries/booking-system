import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { BookingService } from 'src/app/services/bookings/booking-service.service';
import { Booking, BookingStatus } from 'src/app/models/bookings/booking';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit {
  newbookingform: FormGroup;
  panelOpenState;
  booking: Booking;
  bookingSuccess = false;

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
      this.bookingSuccess = false;
      this.bookingService.addBooking(this.mapBooking(this.newbookingform)).subscribe(response => {
        if (response !== null) {
          this.bookingSuccess = true;
          alert('Booking Created with Id: ' + response.id);
        }
      });
    } else {
      alert('The form has input errors');
      this.bookingSuccess = false;
    }
  }

  clearForm() {
    this.newbookingform.reset();
    this.bookingSuccess = false;
  }

  private mapBooking(form: FormGroup) {
    this.booking = {
      staffId: 1,
      bookingName: `${form.value.firstName} ${form.value.lastName}`,
      date: form.value.date,
      numberOfPeople: form.value.noOfGuests,
      time: form.value.time,
      table: form.value.tableNumber,
      duration: '',
      notes: form.value.notes,
      dietryRequirements: form.value.dietOther,
      dairyFree: form.value.dairyFree,
      glutenFree: form.value.glutenFree,
      vegetarian: form.value.vegetarian,
      highchairRequired: form.value.highchairRequired,
      wheelchair: form.value.wheelchairAccessibility,
      status: BookingStatus.active
    }
    return this.booking;
  }
}
