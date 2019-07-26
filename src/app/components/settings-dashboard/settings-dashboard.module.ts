import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsDashboardComponent } from './settings-dashboard.component';

@NgModule({
  declarations: [
    SettingsDashboardComponent
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    SettingsDashboardComponent
  ],
  providers: []
})
export class SettingsDashboardModule { }