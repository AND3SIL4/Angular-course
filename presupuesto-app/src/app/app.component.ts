import { Component } from '@angular/core';
import { IngresoModel } from './components/ingreso/ingreso.model';
import { EgresoModel } from './components/egreso/egreso.model';
import { IngresoService } from './components/ingreso/ingreso.service';
import { EgresoService } from './components/egreso/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ingresos: IngresoModel[] = [];
  egresos: EgresoModel[] = [];

  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService
  ) {
    this.ingresos = this.ingresoServicio.ingresos;
    this.egresos = this.egresoServicio.egresos;
  }

  getIngresoTotal(): number {
    let ingresoTotal: number = 0;
    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.value;
    });
    return ingresoTotal;
  }

  getEgresoTotal(): number {
    let egresoTotal: number = 0;
    this.egresos.forEach((egreso) => {
      egresoTotal += egreso.value;
    });
    return egresoTotal;
  }

  getPorcentajeTotal():number {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal():number {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
