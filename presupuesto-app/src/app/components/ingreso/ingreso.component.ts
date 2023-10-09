import { Component } from '@angular/core';
import { IngresoModel } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html'
})
export class IngresoComponent {
  ingresos: IngresoModel[] = [];

  constructor(private ingresoServicio: IngresoService) {

  }

  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarRegistro(ingreso:IngresoModel) {
    this.ingresoServicio.eliminar( ingreso )
  }
}
