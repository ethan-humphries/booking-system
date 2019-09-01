import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { LogInModule } from '../log-in/log-in.module';
import { SignUpModule } from '../sign-up/sign-up.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    LogInModule,
    SignUpModule
  ],
  exports: [
    HomepageComponent
  ],
  providers: []
})
export class HomepageModule { }