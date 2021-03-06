import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
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
import { NewCustomerModule } from './components/new-customer/new-customer.module';
import { EditDeleteCustomerModule } from './components/edit-delete-customer/edit.delete-customer.module';
import { ViewCustomersModule } from './components/view-customers/view-customers.module';
import { NewStaffModule } from './components/new-staff/new-staff.module';
import { EditDeleteStaffModule } from './components/edit-delete-staff/edit-delete.staff.module';
import { ViewStaffModule } from './components/view-staff/view-staff.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
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
        EditDeleteCustomerModule,
        ViewCustomersModule,
        NewStaffModule,
        EditDeleteStaffModule,
        ViewStaffModule,
        NgbModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
