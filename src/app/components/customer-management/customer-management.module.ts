import { NgModule } from '@angular/core';
import { CustomerManagementComponent } from './customer-management.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { EditDeleteCustomerComponent } from '../edit-delete-customer/edit-delete-customer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NewCustomerComponent } from '../new-customer/new-customer.component';
import { ViewCustomersComponent } from '../view-customers/view-customers.component';

const appRoutes: Routes = [
    { path: 'new-customer', component: NewCustomerComponent },
    { path: 'edit-customer', component: EditDeleteCustomerComponent },
    { path: 'view-customers', component: ViewCustomersComponent }
  ];

@NgModule({
    declarations: [
        CustomerManagementComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        ),
        MatButtonModule
    ],
    exports: [
        CustomerManagementComponent
    ],
    providers: []
})
export class CustomerManagementModule { }
