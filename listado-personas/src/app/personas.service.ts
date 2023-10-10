import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./loggin.service";
import { Persona } from "./persona.model";
import { DataServices } from "./data.service";
import { Observable } from "rxjs";

@Injectable()
export class PersonaService {
  personas: Persona[] = [];
  saludar = new EventEmitter<number>();

  constructor(private logginService: LogginService, private dataService : DataServices) { }

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  obtenerPersonas(): Observable<Persona[]> {
    return this.dataService.cargarPersonas();
  }


  agregarPersonaService(persona: Persona): void {
    this.logginService.eviaMensageConsola(`Persona agregada: ${persona.nombre} ${persona.apellido}`)
    if (this.personas === null) {
      this.personas = []
    }
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas)
  }

  encontrarPersona(indice:number) {
    let persona: Persona = this.personas[indice];
    return persona;
  }

  modificarPersona(index:number, persona: Persona) {
    let personaUno = this.personas[index];
    personaUno.nombre = persona.nombre;
    personaUno.apellido = persona.apellido;

    this.dataService.modificarPersona(index, persona);
  }

  eliminarPersona(indice: number) {
    this.personas.splice(indice, 1);
    this.dataService.eliminarPersona(indice);
    // cargar el nuevo arreglo de la db
    this.modificarPersonas();
  }

  modificarPersonas() {
    if (this.personas !== null) {
      this.dataService.guardarPersonas(this.personas)
    }
  }
}
