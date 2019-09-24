import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingComponent } from './booking.component';
import { BookingService } from 'src/app/services/bookings/booking-service.service';

@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    BookingComponent
  ],
  providers: [
    BookingService
  ]
})
export class BookingModule { }