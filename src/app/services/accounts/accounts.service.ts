import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/accounts/customer';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  customers: Customer[] = [
    {customerId: 1, customerName: 'Ethan Humphries', phone: '02 49434426', email: 'ethan@meow.com', dietryRequirements: 'NIL',history: 'DO NOT BOOK'},
    {customerId: 2, customerName: 'Steven Wah', phone: '0421578027', email: 'ethan@meow.com', dietryRequirements: '', history: 'BAD DEBT'},
    {customerId: 3, customerName: 'Josh Josh', phone: '+61244264820', email: 'ethan@meow.com', dietryRequirements: 'Vegan', history: 'Good'},
    {customerId: 4, customerName: 'Nathan Hickery Hicks', phone: '+61427082347', email: 'ethan@meow.com', dietryRequirements: 'Vego', history: 'Good'},
    {customerId: 5, customerName: 'Ollie Dog', phone: '0421578027', email: 'ethan@meow.com', dietryRequirements: 'Keto', history: 'Big Tipper'},
    {customerId: 6, customerName: 'Loko Bear', phone: 'NIL', email: 'ethan@meow.com', dietryRequirements: 'Snails only', history: 'Cuddly'},
    {customerId: 7, customerName: 'Katy Perry', phone: '', email: 'ethan@meow.com', dietryRequirements: 'Nil', history: 'Good'},
  ];

  constructor(private httpClient: HttpClient) { }

  getAllCustomersForAccount(accountId: number) {
    return this.customers;
  }

  newCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  editCustomer() {

  }

  deleteCustomer(customerId: number) {
    for(let i = 0; i < this.customers.length; i++) {
      if(this.customers[i].customerId == customerId) {
        this.customers.splice(i, 1);
      }
    }
  }

  newAccount() {

  }

  editAccountDetails() {

  }

  editAccountSettings() {

  }

  newStaff() {

  }

  editStaff() {

  }

  deleteStaff() {

  }
}
