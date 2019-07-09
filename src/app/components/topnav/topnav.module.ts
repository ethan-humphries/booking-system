import { NgModule } from '@angular/core';
import { TopnavComponent } from './topnav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    TopnavComponent
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    TopnavComponent
  ],
  providers: []
})
export class TopnavModule { }