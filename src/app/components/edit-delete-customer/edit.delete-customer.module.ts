import { NgModule } from '@angular/core';
import { EditDeleteCustomerComponent } from './edit-delete-customer.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    EditDeleteCustomerComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    EditDeleteCustomerComponent
  ],
  providers: []
})
export class EditDeleteCustomerModule { }