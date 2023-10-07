import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Listado personas';
  condition = false;
  message = 'No se han agregado personas';

  personas: Persona[] = [
  ];

  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona(): void {
    if (this.nombreInput === '' && this.apellidoInput === '') {
      this.message = 'Error, por favor intente de nuevo';
    } else {
      this.condition = true;
      let personaUno = new Persona(this.nombreInput, this.apellidoInput);
      this.personas.push(personaUno)
      this.nombreInput = '';
      this.apellidoInput = '';
    }
  }


}
