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
import { HeaderComponent } from './components/header/header.component';

const myRoutes : Routes = [
  { path : 'dashboard-component', component : DashboardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    TopnavModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
