import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/accounts/staff';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-new-staff',
  templateUrl: './new-staff.component.html',
  styleUrls: ['./new-staff.component.scss']
})
export class NewStaffComponent implements OnInit {
  staff: Staff;
  saveSuccess =  false;
  constructor(private accountService: AccountsService) { 
    this.staff = {};
  }

  ngOnInit() {
  }

  saveStaff() {
    if(this.staff !== null) {
      this.staff.accountId = 2;
      this.accountService.newStaff(this.staff).subscribe(response => {
        if(response !== null) {
          this.saveSuccess =  true;
        }
      });
    }
  }

}
