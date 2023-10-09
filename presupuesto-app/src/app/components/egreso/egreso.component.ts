import { Component, Input, OnInit } from '@angular/core';
import { IngresoModel } from '../ingreso/ingreso.model';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoModel } from './egreso.model';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html'
})
export class EgresoComponent implements OnInit {

  egresos: EgresoModel[] = [];

  @Input() ingresoTotal: number;

  constructor(private egresoServicio: EgresoService) {
  }

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }

  eliminarEgreso(egreso: EgresoModel) {
    this.egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso: EgresoModel):number {
    return egreso.value / this.ingresoTotal;
  }
}
