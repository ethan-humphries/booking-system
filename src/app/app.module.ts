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
import { ViewBookingsComponent } from './components/view-bookings/view-bookings.component';
import { BookingComponent } from './components/booking/booking.component';
import { ViewBookingsModule } from './components/view-bookings/view-bookings.module';
import { BookingModule } from './components/booking/booking.module';
import { DashboardOverviewComponent } from './components/dashboard-overview/dashboard-overview.component';
import { DashboardOverviewModule } from './components/dashboard-overview/dashboard-overview.module';
import { HeaderComponent } from './components/header/header.component';


const myRoutes : Routes = [
  { path : 'dashboard-component', component : DashboardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
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
    DashboardOverviewModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
