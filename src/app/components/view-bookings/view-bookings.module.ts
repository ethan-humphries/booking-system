import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewBookingsComponent } from './view-bookings.component';

@NgModule({
  declarations: [
    ViewBookingsComponent
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    ViewBookingsComponent
  ],
  providers: []
})
export class ViewBookingsModule { }