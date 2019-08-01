import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountSettingsComponent } from './account-settings.component';

@NgModule({
  declarations: [
    AccountSettingsComponent
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    AccountSettingsComponent
  ],
  providers: []
})
export class AccountSettingsModule { }