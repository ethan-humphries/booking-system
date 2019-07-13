import { NgModule } from '@angular/core';
import { NewBookingComponent } from './new-booking.component';
<<<<<<< Updated upstream
=======
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    NewBookingComponent
  ],
  imports: [
<<<<<<< Updated upstream
=======
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule
>>>>>>> Stashed changes
  ],
  exports: [
    NewBookingComponent
  ],
  providers: []
})
export class NewBookingModule { }