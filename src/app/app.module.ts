import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewBookingComponent } from './components/new-booking/new-booking.component';
import { EditDeleteBookingComponent } from './components/edit-delete-booking/edit-delete-booking.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    FooterComponent,
    DashboardComponent,
    NewBookingComponent,
    EditDeleteBookingComponent,
    ReportsComponent,
    HomepageComponent,
    SignUpComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
