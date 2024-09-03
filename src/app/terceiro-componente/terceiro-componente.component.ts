import { Component } from '@angular/core';

@Component({
  selector: 'app-terceiro-componente',
  standalone: true,
  imports: [],
  templateUrl: './terceiro-componente.component.html',
  styleUrl: './terceiro-componente.component.css'
})
export class TerceiroComponenteComponent {

imagem:string = 'agora.png'

alterarimagem(){
  if(this.imagem === 'agora.png'){
    this.imagem = 'depois.png';
  } else[this.imagem = 'agora.png']

}

}
