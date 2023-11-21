import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from 'src/app/services/contacts.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { generarMensajeError, generarMensajeExito } from 'src/app/helpers/mensajes';
import { Contacto } from 'src/app/interfaces/Contacto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  contactsService = inject(ContactsService);
  router = inject(Router);
  @Output() cerrar = new EventEmitter();
  @Input() contacto: Contacto = {
    id: 0,
    name: '',
    lastName: '',
    address: '',
    email: '',
    image: '',
    number: '',
    company: '',
    userId: 0
  }

  async onSubmit() {
    this.contacto.id ? this.editContact() : this.addContact();
  }

  async addContact() {
    const res = await this.contactsService.create(this.contacto);
    this.cerrar.emit();
    if (res) {
      generarMensajeExito('Contacto agregado')
      location.reload();
    } else {
      generarMensajeError('Error agregando contacto')
    }
    
  }

  async editContact() {
    const res = await this.contactsService.edit(this.contacto);
    this.cerrar.emit();
    if (res) {
      generarMensajeExito('Contacto editado')
    } else {
      generarMensajeError('Error editando contacto')
    }
    
  }

}
