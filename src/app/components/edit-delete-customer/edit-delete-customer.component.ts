import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/models/accounts/customer';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-edit-delete-customer',
  templateUrl: './edit-delete-customer.component.html',
  styleUrls: ['./edit-delete-customer.component.scss']
})
export class EditDeleteCustomerComponent implements OnInit {
  @Input() customer: Customer = {};
  saveSuccess = false;

  constructor(private accountService: AccountsService) { 
  }

  ngOnInit() {
  }

  saveCustomer() {
    console.log(this.customer)
    if(this.customer.id) {
      this.accountService.editCustomer(this.customer).subscribe(response => {
        if(response !== null) {
          this.saveSuccess =  true;
        }
      })
    }
  }

  deleteCustomer() {
    alert('this function is not ready in beta 1');
    this.saveSuccess = false;
  }
}
