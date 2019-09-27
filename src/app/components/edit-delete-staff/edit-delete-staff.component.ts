import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/accounts/staff';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-edit-delete-staff',
  templateUrl: './edit-delete-staff.component.html',
  styleUrls: ['./edit-delete-staff.component.scss']
})
export class EditDeleteStaffComponent implements OnInit {
  staff: Staff = {};
  saveSuccess =  false;

  constructor(private accountService: AccountsService) { }

  ngOnInit() {
  }

  saveStaff() {
    if(this.staff.id) {
      this.accountService.editStaff(this.staff).subscribe(result => {
        if(result !== null) {
          this.saveSuccess =  true;
        }
      })
    }
  }

  deleteStaff() {
    alert('This feature is not yet avalaible');
    this.saveSuccess = false;
  }
}
