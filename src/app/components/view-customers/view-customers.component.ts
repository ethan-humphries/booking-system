import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts/accounts.service';
import { Customer } from 'src/app/models/accounts/customer';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.scss']
})
export class ViewCustomersComponent implements OnInit {
  customers: Customer[] = [];
  displayedColumns: string[] = ['customerId', 'customerName', 'phone', 'email', 'history', 'dietryRequirements', 'edit'];
  dataSource;
  faEdit = faEdit;
  faTrash = faTrash;


  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsService.getAllCustomersForAccount(2).subscribe(customers => 
      customers.forEach(customer => {
        this.customers.push(customer);
      }));
    if (this.customers) {
      this.dataSource = new MatTableDataSource(this.customers);
    }
    this.dataSource.sort = this.sort;
  }

  deleteCustomer(customerId: number) {
    var result = window.confirm('Are you sure you want to delete customer: ' + customerId + '?');
    if (result == true ) {
      alert('Customer Removed');
      // remove booking using booking service -  this.bookingService.deleteBooking(bookingId);
    } else if ( result == false) {
      // do nothing
    } else {
      // do nothing - exception only
    }
  }
}
