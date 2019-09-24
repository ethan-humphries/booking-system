import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/accounts/customer';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  customer: Customer;
  saveSuccess =  false;
  constructor(private accountsService: AccountsService) { 
    this.customer = {};
  }

  ngOnInit() {
  }

  saveCustomer() {
    if(this.customer != null) {
      return this.accountsService.newCustomer(this.customer).subscribe(response => {
        if(response !== null) {
          this.saveSuccess = true;
        }
      });
    }
  }

  validateCustomer() {

  }

  cancel() {

  }

  private mapCustomer() {

  }

}
