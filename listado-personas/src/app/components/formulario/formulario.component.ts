import { Component, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();
  @Output() conditionChanged = new EventEmitter<boolean>();
  @Output() messageChanged = new EventEmitter<string>();

  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona(): void {
    if (this.nombreInput === '' && this.apellidoInput === '') {
      this.messageChanged.emit('Error, por favor intente de nuevo');
    } else {
      this.conditionChanged.emit(true);
      let personaUno = new Persona(this.nombreInput, this.apellidoInput);

      // Emitiendo infomacion de hijo a padre
      this.personaCreada.emit(personaUno)

      this.nombreInput = '';
      this.apellidoInput = '';
    }
  }
}
