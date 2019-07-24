import { NgModule } from '@angular/core';
import { EditDeleteBookingComponent } from './edit-delete-booking.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


@NgModule({
  declarations: [
    EditDeleteBookingComponent
  ],
  imports: [
    MatDialogModule
  ],
  exports: [
    EditDeleteBookingComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class EditDeleteBookingModule { }