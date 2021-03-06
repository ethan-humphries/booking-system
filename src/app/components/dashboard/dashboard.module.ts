import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ViewBookingsModule } from '../view-bookings/view-bookings.module';
import { ReportsModule } from '../reports/reports.module';
import { NewBookingModule } from '../new-booking/new-booking.module';
import { DashboardOverviewModule } from '../dashboard-overview/dashboard-overview.module';
import { CustomerManagementModule } from '../customer-management/customer-management.module';
import { StaffManagementModule } from '../staff-management/staff-management.module';
import { SettingsDashboardModule } from '../settings-dashboard/settings-dashboard.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    MatTabsModule,
    ViewBookingsModule,
    ReportsModule,
    NewBookingModule,
    DashboardOverviewModule,
    CustomerManagementModule,
    StaffManagementModule,
    SettingsDashboardModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: []
})
export class DashboardModule { }
