import { NgModule } from '@angular/core';
import { NewStaffComponent } from './new-staff.component';
import { AccountsService } from 'src/app/services/accounts/accounts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        NewStaffComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule
    ],
    exports: [
        NewStaffComponent
    ],
    providers: [
        AccountsService
    ]
})
export class NewStaffModule { }