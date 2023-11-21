import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/interfaces/Contacto';
import { ContactsService } from 'src/app/services/contacts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit{

  contactsService = inject(ContactsService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  contacto : Contacto = {
    id: 0 ,
    image: '',
    name: '',
    lastName: '',
    address: '',
    email: '',
    number: '',
    company: '',
    userId: 0
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.contactsService.getById(params['id']).then(response => {
        if (response) this.contacto = response
      })
    }) 
  }
  DeleteContact(){
    Swal.fire({
      title: 'Quieres eliminar el contacto '+ this.contacto.name + ' ' + this.contacto.lastName,
      text: "No vas a poder revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#006d77',
      cancelButtonColor: 'rgb(165, 219, 217)',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar', 
    }).then((result) => {
      if (result.isConfirmed) {
        this.contactsService.delete(this.contacto.id).then(res => {
          if(res){
            Swal.fire(
              'Eliminado!',
              'El contacto ha sido eliminado',
              'success'
            )
            this.router.navigate(['/view-contacts']);
          } else {
            Swal.fire(
              'Error eliminando contacto',
              'Intentalo de nuevo',
              'error'
            )
          }
        })
      }
    })
  }
}
