import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { EditDeleteBookingModule } from './components/edit-delete-booking/edit-delete-booking.module';
import { FooterModule } from './components/footer/footer.module';
import { HomepageModule } from './components/homepage/homepage.module';
import { LogInModule } from './components/log-in/log-in.module';
import { NewBookingModule } from './components/new-booking/new-booking.module';
import { ReportsModule } from './components/reports/reports.module';
import { SignUpModule } from './components/sign-up/sign-up.module';
import { TopnavModule } from './components/topnav/topnav.module';
import { ViewBookingsModule } from './components/view-bookings/view-bookings.module';
import { BookingModule } from './components/booking/booking.module';
import { DashboardOverviewModule } from './components/dashboard-overview/dashboard-overview.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NewCustomerModule } from './components/new-customer/new-customer.module';
import { EditDeleteCustomerModule } from './components/edit-delete-customer/edit.delete-customer.module';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';



const myRoutes : Routes = [
  { path : 'dashboard-component', component : DashboardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ViewCustomersComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    DashboardModule,
    EditDeleteBookingModule,
    FooterModule,
    HomepageModule,
    LogInModule,
    NewBookingModule,
    ReportsModule,
    SignUpModule,
    TopnavModule,
    ViewBookingsModule,
    BookingModule,
    DashboardOverviewModule,
    FontAwesomeModule,
    NewCustomerModule,
    EditDeleteCustomerModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
