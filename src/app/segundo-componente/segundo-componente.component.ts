import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-segundo-componente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})
export class SegundoComponenteComponent {

  Estado:string='';
  Capital:string="";

}
