import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { LogginService } from 'src/app/loggin.service';
import { Persona } from 'src/app/persona.model';
import { PersonaService } from 'src/app/personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  @Output() conditionChanged = new EventEmitter<boolean>();
  @Output() messageChanged = new EventEmitter<string>();

  @ViewChild('nombreInputRef') nombrePersona: ElementRef;
  @ViewChild('apellidoInputRef') apellidoPersona: ElementRef;

  // Inyectar servicios
  constructor(
    private personasService: PersonaService
  ) {
    this.personasService.saludar.subscribe((indice: number) => {
      alert(`El indice es ${ indice + 1 }`)
    })
  }

  agregarPersona(): void {
    if (
      this.nombrePersona.nativeElement.value === '' &&
      this.apellidoPersona.nativeElement.value === ''
    ) {
      this.messageChanged.emit('Error, por favor intente de nuevo');
    } else {
      this.conditionChanged.emit(true);
      let personaUno = new Persona(
        this.nombrePersona.nativeElement.value,
        this.apellidoPersona.nativeElement.value
      );

      // Emitiendo infomacion de hijo a padre
      // this.personaCreada.emit(personaUno);

      // this.LogginService.eviaMensageConsola(
      //   `Resultado: ${personaUno.nombre} ${personaUno.apellido}`
      // );

      // paso por referencia hacia servicio
      this.personasService.agregarPersonaService(personaUno);

      this.nombrePersona.nativeElement.value = '';
      this.apellidoPersona.nativeElement.value = '';
    }
  }
}
