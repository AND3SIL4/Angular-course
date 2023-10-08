import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Listado personas';
  condition = false;
  message = 'No se han agregado personas'
  personas: Persona[] = [
  ];

  personaAgregada(persona: Persona):void {
    this.personas.push(persona);
  }
  cambiarCondicion(condition: boolean): void{
    this.condition = condition
  }
  cambiarMensaje(message: string): void{
    this.message = message
  }
}
