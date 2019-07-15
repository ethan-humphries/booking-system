import { NgModule } from '@angular/core';
import { NewBookingComponent } from './new-booking.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { BookingService } from 'src/app/services/bookings/booking-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    NewBookingComponent
  ],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    MatInputModule, 
    HttpClientModule
  ],
  exports: [
    NewBookingComponent
  ],
  providers: [
    BookingService
  ]
})
export class NewBookingModule { }