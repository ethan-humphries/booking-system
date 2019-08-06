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
  constructor(private accountsService: AccountsService) { 
    this.customer =  new Customer();
  }

  ngOnInit() {
  }

  saveCustomer() {
    console.log(this.customer);
  }

  validateCustomer() {

  }

  cancel() {

  }

}
