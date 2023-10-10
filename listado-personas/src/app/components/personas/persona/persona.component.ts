import { Component, Input } from '@angular/core';
import { Persona } from 'src/app/persona.model';
import { PersonaService } from 'src/app/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
})
export class PersonaComponent {

  // Recibiendo informacion desde el componente padre
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personaService: PersonaService) {

  }

  emitirSaludo():void {
    this.personaService.saludar.emit(this.indice)
  }
}
