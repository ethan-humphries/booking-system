import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewBookingsComponent } from './view-bookings.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingService } from 'src/app/services/bookings/booking-service.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ViewBookingsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  exports: [
    ViewBookingsComponent
  ],
  providers: [
    BookingService
  ]
})
export class ViewBookingsModule { }
