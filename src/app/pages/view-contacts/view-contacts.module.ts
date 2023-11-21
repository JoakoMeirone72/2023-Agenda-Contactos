import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewContactsRoutingModule } from './view-contacts-routing.module';
import { FormsModule } from '@angular/forms';
import { ViewContactsComponent } from './view-contacts.component';
import { IconContactComponent } from "../../components/icon-contact/icon-contact.component";
import { CardContactComponent } from "../../components/card-contact/card-contact.component";
import { AddContactComponent } from 'src/app/components/add-contact/add-contact.component';


@NgModule({
    declarations: [
        ViewContactsComponent
    ],
    imports: [
        CommonModule,
        ViewContactsRoutingModule,
        FormsModule,
        IconContactComponent,
        CardContactComponent,
        AddContactComponent
    ]
})
export class ViewContactsModule { }
