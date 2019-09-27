import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from 'src/app/models/accounts/customer';
import { Observable } from 'rxjs';
import { Staff } from 'src/app/models/accounts/staff';

const requestUrl = 'http://hbs-api.azurewebsites.net/api/Customer/';
const headers = new HttpHeaders({
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': 'localhost:4200'
});

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private httpClient: HttpClient) { }

  getAllCustomersForAccount(accountId: number): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${requestUrl}${accountId}`);
  }

  newCustomer(customer: Customer): Observable<Customer> {
    console.log(customer);
    return this.httpClient.post<Customer>(requestUrl, customer, { headers });
  }

  editCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(requestUrl, customer, { headers });
  }

  deleteCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${requestUrl}${customer.id}`, { headers });
  }

  newAccount(account: Account) {

  }

  editAccountDetails(account: Account) {

  }

  editAccountSettings(account: Account) {

  }

  getAllStaff(accountId: number): Observable<Staff[]> {
    return this.httpClient.get<Staff[]>(`http://hbs-api.azurewebsites.net/api/Staff/${accountId}`);
  }

  newStaff(staff: Staff): Observable<Staff> {
    return this.httpClient.post<Staff>('http://hbs-api.azurewebsites.net/api/Staff/', staff, { headers });
  }

  editStaff(staff: Staff): Observable<Staff> {
    staff.accountId = 2;
    return this.httpClient.put<Staff>('http://hbs-api.azurewebsites.net/api/Staff/', staff, { headers });
  }

  deleteStaff(staffId: number): Observable<Staff> {
    return this.httpClient.delete<Staff>(`http://hbs-api.azurewebsites.net/api/Staff/delete/${staffId}`, { headers });
  }
}
