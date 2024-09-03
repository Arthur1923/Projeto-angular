import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quarto-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quarto-componente.component.html',
  styleUrl: './quarto-componente.component.css'
})
export class QuartoComponenteComponent {

if(this.exibir === true ){
  this.exibir = false;
}else{
  this.exibir =true;
}

}
