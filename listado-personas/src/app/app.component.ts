import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LogginService } from './loggin.service';
import { PersonaService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Listado personas';
  condition = false;
  message = 'No se han agregado personas';
  personas: Persona[] = [];

  constructor(
    private personaService: PersonaService
  ) {}

  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }
  cambiarCondicion(condition: boolean): void {
    this.condition = condition;
  }
  cambiarMensaje(message: string): void {
    this.message = message;
  }
}
