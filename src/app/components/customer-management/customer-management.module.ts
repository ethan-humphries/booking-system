import { NgModule } from '@angular/core';
import { CustomerManagementComponent } from './customer-management.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        CustomerManagementComponent
    ],
    imports: [
        MatButtonModule
    ],
    exports: [
        CustomerManagementComponent
    ],
    providers: []
})
export class CustomerManagementModule { }
