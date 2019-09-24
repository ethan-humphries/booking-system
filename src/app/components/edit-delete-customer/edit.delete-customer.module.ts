import { NgModule } from '@angular/core';
import { EditDeleteCustomerComponent } from './edit-delete-customer.component';
import { FormsModule }   from '@angular/forms';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

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
  providers: [
    AccountsService
  ]
})
export class EditDeleteCustomerModule { }