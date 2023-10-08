import { Component, Input } from '@angular/core';
import { Persona } from 'src/app/persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
})
export class PersonaComponent {

  // Recibiendo informacion desde el componente padre
  @Input() persona: Persona;
  @Input() indice: number;
}
