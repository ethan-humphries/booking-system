import { NgModule } from '@angular/core';
import { NewCustomerComponent } from './new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsService } from 'src/app/services/accounts/accounts.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        NewCustomerComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule
    ],
    exports: [
        NewCustomerComponent
    ],
    providers: [
        AccountsService
    ]
})
export class NewCustomerModule { }