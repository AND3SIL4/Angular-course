import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./loggin.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonaService {
  personas: Persona[] = [];
  saludar = new EventEmitter<number>();

  constructor(private logginService: LogginService) { }
  agregarPersonaService(persona: Persona): void {
    this.personas.push(persona);
    this.logginService.eviaMensageConsola(`Persona agregada: ${persona.nombre} ${persona.apellido}`)
  }
}
