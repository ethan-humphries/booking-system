import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewBookingsComponent } from './view-bookings.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    ViewBookingsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    ViewBookingsComponent
  ],
  providers: []
})
export class ViewBookingsModule { }
