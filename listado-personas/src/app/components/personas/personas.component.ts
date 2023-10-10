import { Component } from '@angular/core';
import { Persona } from 'src/app/persona.model';
import { PersonaService } from 'src/app/personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
})
export class PersonasComponent {
  condition = false;
  message = 'No se han agregado personas';
  personas: Persona[] = [];

  constructor(
    private personaService: PersonaService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.personaService.obtenerPersonas().subscribe(
      (personas: Persona[]) => {
        // Asegúrate de que personas sea de tipo Persona[]
        this.personas = personas;
        this.personaService.setPersonas(personas);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  agregar(): void {
    this.router.navigate(['personas/agregar']);
  }
}
