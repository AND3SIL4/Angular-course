import { Component } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { IngresoModel } from '../ingreso/ingreso.model';
import { EgresoModel } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {
  tipo: string = 'ingresoOperacion';
  descripcionInput: string;
  valorInput: number;

  constructor(private ingresoServicio: IngresoService, private egresoServicio: EgresoService) {

  }

  tipoOperacion(evento: Event) {
    this.tipo = (evento.target as HTMLSelectElement).value;
  }

  agregarValor() {
    if (this.tipo === 'ingresoOperacion') {
      this.ingresoServicio.ingresos.push(new IngresoModel(this.descripcionInput, this.valorInput))
    } else {
      this.egresoServicio.egresos.push(new EgresoModel(this.descripcionInput, this.valorInput))
    }
  }
}
