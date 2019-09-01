import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SignUpComponent
  ],
  providers: []
})
export class SignUpModule { }