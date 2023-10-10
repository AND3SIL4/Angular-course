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

  encontrarPersona(indice:number) {
    let persona: Persona = this.personas[indice];
    return persona;
  }

  modificarPersona(index:number, persona: Persona) {
    let personaUno = this.personas[index];
    personaUno.nombre = persona.nombre;
    personaUno.apellido = persona.apellido;
  }

  eliminarPersona(indice: number) {
    this.personas.splice(indice, 1);
  }
}
