import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/accounts/customer';
import { Staff } from 'src/app/models/accounts/staff';

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

  staff: Staff[] = [
    {staffId: 101, accountId: 1, firstName: 'John', lastName: 'Smith', position: 'Chef'},
    {staffId: 102, accountId: 1, firstName: 'Ethan', lastName: 'One-Dad', position: 'Nerd'},
    {staffId: 103, accountId: 1, firstName: 'Dallas', lastName: 'Two-Dads', position: 'Chief of Nuts & Bolts'},
    {staffId: 104, accountId: 1, firstName: 'Jake', lastName: 'Hussle', position: 'Hustler'},
    {staffId: 105, accountId: 1, firstName: 'Sarah', lastName: 'Johnston', position: 'Waitress'},
    {staffId: 106, accountId: 1, firstName: 'The', lastName: 'Weekend', position: 'Soul Soothing Music'},
    {staffId: 107, accountId: 1, firstName: 'Stephanie', lastName: 'Prowling', position: 'Customer Relations'},
    {staffId: 108, accountId: 1, firstName: 'Ollie', lastName: 'Menace', position: 'Menace'}
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

  getAllStaff(accountId: number) {
    return this.staff;
  }

  newStaff() {

  }

  editStaff() {

  }

  deleteStaff() {

  }
}
