import { Component, OnInit, ViewChild } from '@angular/core';
import { Booking, BookingStatus } from 'src/app/models/bookings/booking';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { BookingService } from 'src/app/services/bookings/booking-service.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.scss']
})
export class ViewBookingsComponent implements OnInit {
  displayedColumns: string[] = ['staffId', 'bookingName', 'customerName', 'date', 'duration', 'guests', 'table', 'status', 'checkedIn', 'notes', 'edit'];
  dataSource;
  fromDate = new FormControl(new Date());
  toDate = new FormControl(new Date());
  bookings: Booking[];
  faEdit = faEdit;
  faTrash = faTrash;
  bookingName =  new FormControl('');
  customerName = new FormControl('');

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookings = this.getBookings();
    if (this.bookings) {
      this.dataSource = new MatTableDataSource(this.bookings);
    }
    this.dataSource.sort = this.sort;

  }

  getBookings() {
    return this.bookingService.getAllBookingsByUserId(1);
  }

  deleteBooking(bookingId: any) {
    var result = window.confirm('Are you sure you want to delete booking: ' + bookingId + '?');
    if (result == true ) {
      alert('Booking Removed');
      // remove booking using booking service -  this.bookingService.deleteBooking(bookingId);
    } else if ( result == false) {
      // do nothing
    } else {
      // do nothing - exception only
    }
  }

  getBookingStatus(status: BookingStatus) {
    switch(status) {
      case BookingStatus.active: {
        return 'Active';
      }
      case BookingStatus.cancelled: {
        return 'Cancelled';
      }
      case BookingStatus.complete: {
        return 'Complete';
      }
      case BookingStatus.noShow: {
        return 'No Show';
      }
      default: {
        return 'Unknown';
      }
    }
  }

  searchClick() {
    console.log('Name:' , this.bookingName.value);
    console.log('Customer:' , this.customerName.value);
    console.log('From Date:' , this.fromDate.value);
    console.log('To Date:' , this.toDate.value);
  }
}
