import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent{

  nombre = 'Andres Felipe';
  apellido = 'Silva';

  // atributo privado
  private edad = 21

  // metodo para acceder a la edad
  getEdad():number {
    return this.edad;
  }

  log(texto: string) {
    console.log(texto);
  }

  constructor() {

  }
}
