import { NgModule } from '@angular/core';
import { DashboardOverviewComponent } from './dashboard-overview.component';
import { OverviewTileModule } from '../overview-tile/overview-tile.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    DashboardOverviewComponent
  ],
  imports: [
    OverviewTileModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    DashboardOverviewComponent
  ],
  providers: []
})
export class DashboardOverviewModule { }
