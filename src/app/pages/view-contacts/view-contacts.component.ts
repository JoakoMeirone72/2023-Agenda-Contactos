import { Component, OnInit, inject } from '@angular/core';
import { Contacto } from 'src/app/interfaces/Contacto';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss']
})
export class ViewContactsComponent implements OnInit {

  contactsService = inject(ContactsService)
  contacts:Contacto[] = []

  ngOnInit(): void {
    this.contactsService.getAll().then(response => {
      this.contacts = response
    })
  }
}
