import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconContactComponent } from "../icon-contact/icon-contact.component";
import { Contacto } from 'src/app/interfaces/Contacto';

@Component({
    selector: 'app-card-contact',
    standalone: true,
    templateUrl: './card-contact.component.html',
    styleUrls: ['./card-contact.component.scss'],
    imports: [CommonModule, IconContactComponent]
})
export class CardContactComponent {

  @Input({required:true}) contacto!:Contacto;
}
