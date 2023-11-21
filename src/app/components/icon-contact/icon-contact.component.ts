import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contacto } from 'src/app/interfaces/Contacto';


@Component({
  selector: 'app-icon-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-contact.component.html',
  styleUrls: ['./icon-contact.component.scss']
})
export class IconContactComponent {

  @Input({required:true}) contacto!:Contacto;

}
