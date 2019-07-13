import { NgModule } from '@angular/core';
import { NewBookingComponent } from './new-booking.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    NewBookingComponent
  ],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, //animations
    MatInputModule // this is required for all inputs
  ],
  exports: [
    NewBookingComponent
  ],
  providers: []
})
export class NewBookingModule { }