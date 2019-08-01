import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsDashboardComponent } from './settings-dashboard.component';
import { AccountSettingsModule } from '../account-settings/account-settings.module';

@NgModule({
  declarations: [
    SettingsDashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AccountSettingsModule
  ],
  exports: [
    SettingsDashboardComponent
  ],
  providers: []
})
export class SettingsDashboardModule { }