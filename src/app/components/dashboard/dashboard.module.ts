import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    MatTabsModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: []
})
export class DashboardModule { }
