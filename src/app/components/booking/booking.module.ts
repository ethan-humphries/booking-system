import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingComponent } from './booking.component';

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
  providers: []
})
export class BookingModule { }