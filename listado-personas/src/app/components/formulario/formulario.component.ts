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

  agregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement): void {
    if (nombreInput.value === '' && apellidoInput.value === '') {
      this.messageChanged.emit('Error, por favor intente de nuevo');
    } else {
      this.conditionChanged.emit(true);
      let personaUno = new Persona(nombreInput.value, apellidoInput.value);

      // Emitiendo infomacion de hijo a padre
      this.personaCreada.emit(personaUno)

      nombreInput.value = '';
      apellidoInput.value = '';
    }
  }
}
