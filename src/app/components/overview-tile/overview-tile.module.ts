import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewTileComponent } from './overview-tile.component';



@NgModule({
  declarations: [
    OverviewTileComponent
  ],
  imports: [
    MatCardModule,
    BrowserAnimationsModule, //animations
  ],
  exports: [
    OverviewTileComponent
  ],
  providers: []
})
export class OverviewTileModule { }