import { NgModule } from '@angular/core';
import { EditDeleteStaffComponent } from './edit-delete-staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        EditDeleteStaffComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule
    ],
    exports: [
        EditDeleteStaffComponent
    ],
    providers: []
})
export class EditDeleteStaffModule { }