import { NgModule } from '@angular/core';
import { NewBookingComponent } from './new-booking.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    NewBookingComponent
  ],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  exports: [
    NewBookingComponent
  ],
  providers: []
})
export class NewBookingModule { }