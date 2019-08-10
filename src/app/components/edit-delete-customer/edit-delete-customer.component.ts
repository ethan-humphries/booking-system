import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/models/accounts/customer';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-edit-delete-customer',
  templateUrl: './edit-delete-customer.component.html',
  styleUrls: ['./edit-delete-customer.component.scss']
})
export class EditDeleteCustomerComponent implements OnInit {
  @Input() customer = new Customer();

  constructor(private accountService: AccountsService) { 
  }

  ngOnInit() {
  }

  saveCustomer() {
    console.log(this.customer);
  }

  validateCustomer() {

  }

  deleteCustomer() {

  }

}
