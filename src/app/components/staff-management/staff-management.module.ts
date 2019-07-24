import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { StaffManagementComponent } from './staff-management.component';
import { Routes, RouterModule } from '@angular/router';
import { NewStaffComponent } from '../new-staff/new-staff.component';
import { EditDeleteStaffComponent } from '../edit-delete-staff/edit-delete-staff.component';
import { ViewStaffComponent } from '../view-staff/view-staff.component';

const staffRoutes: Routes = [
    { path: 'new-staff', component: NewStaffComponent, outlet: "staff-managment" },
    { path: 'edit-staff', component: EditDeleteStaffComponent, outlet: "staff-managment" },
    { path: 'view-staff', component: ViewStaffComponent, outlet: "staff-managment" },
];

@NgModule({
    declarations: [
        StaffManagementComponent
    ],
    imports: [
        RouterModule.forRoot(
            staffRoutes,
            { enableTracing: false } // <-- debugging purposes only
        ),
        MatButtonModule
    ],
    exports: [
        StaffManagementComponent
    ],
    providers: []
})
export class StaffManagementModule { }
