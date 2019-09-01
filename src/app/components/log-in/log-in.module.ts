import { NgModule } from '@angular/core';
import { LogInComponent } from './log-in.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogInComponent
  ],
  providers: []
})
export class LogInModule { }