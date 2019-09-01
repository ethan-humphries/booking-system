import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedInOverviewComponent } from './logged-in-overview.component';
import { TopnavModule } from '../topnav/topnav.module';
import { FooterModule } from '../footer/footer.module';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    LoggedInOverviewComponent
  ],
  imports: [
    CommonModule,
    TopnavModule,
    FooterModule,
    DashboardModule
  ],
  exports: [
    LoggedInOverviewComponent
  ]
})
export class LoggedInOverviewModule { }
