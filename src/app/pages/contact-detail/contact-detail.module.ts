import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailRoutingModule } from './contact-detail-routing.module';
import { ContactDetailComponent } from './contact-detail.component';
import { AddContactComponent } from "../../components/add-contact/add-contact.component";


@NgModule({
    declarations: [
        ContactDetailComponent
    ],
    imports: [
        CommonModule,
        ContactDetailRoutingModule,
        AddContactComponent
    ]
})
export class ContactDetailModule { }
