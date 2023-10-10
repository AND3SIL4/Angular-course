import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { Persona } from 'src/app/persona.model';
import { PersonaService } from 'src/app/personas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent implements OnInit, AfterViewInit {
  @Output() conditionChanged = new EventEmitter<boolean>();
  @Output() messageChanged = new EventEmitter<string>();

  @ViewChild('nombreInputRef') nombrePersona: ElementRef;
  @ViewChild('apellidoInputRef') apellidoPersona: ElementRef;

  index: number;
  modoEdicion: number;

  // Inyectar servicios
  constructor(
    private personasService: PersonaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']
  }

  ngAfterViewInit(): void {
    if (this.modoEdicion !== null && this.modoEdicion === 1) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombrePersona.nativeElement.value = persona.nombre;
      this.apellidoPersona.nativeElement.value = persona.apellido;
    }
  }

  onGuardarPersona(): void {
    let personaUno = new Persona(
      this.nombrePersona.nativeElement.value,
      this.apellidoPersona.nativeElement.value
    );

    if (this.modoEdicion !== null && this.modoEdicion === 1) {
      this.personasService.modificarPersona(this.index, personaUno);
    } else {
      this.personasService.agregarPersonaService(personaUno);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona() {
    if (this.index) {
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
