import { Component, OnInit, ViewChild } from '@angular/core';
import { Staff } from 'src/app/models/accounts/staff';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.scss']
})
export class ViewStaffComponent implements OnInit {
  staff: Staff[];
  displayedColumns: string[] = ['staffId', 'accountId', 'firstName', 'lastName', 'position', 'edit'];
  dataSource;
  faEdit = faEdit;
  faTrash = faTrash;


  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private accountService: AccountsService) { }

  ngOnInit() {
    this.staff = this.getAllStaff();
    if (this.staff) {
      this.dataSource = new MatTableDataSource(this.staff);
    }
    this.dataSource.sort = this.sort;
  }

  private getAllStaff() {
    return this.accountService.getAllStaff(1);
  }
}

