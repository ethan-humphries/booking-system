import { NgModule } from '@angular/core';
import { NewCustomerComponent } from './new-customer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        NewCustomerComponent
    ],
    imports: [
        FormsModule
    ],
    exports: [
        NewCustomerComponent
    ],
    providers: []
})
export class NewCustomerModule { }