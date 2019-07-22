import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { StaffManagementComponent } from './staff-management.component';

@NgModule({
    declarations: [
        StaffManagementComponent
    ],
    imports: [
        MatButtonModule
    ],
    exports: [
        StaffManagementComponent
    ],
    providers: []
})
export class StaffManagementModule { }
