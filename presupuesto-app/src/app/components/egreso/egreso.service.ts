import { EgresoModel } from "./egreso.model";

export class EgresoService{
  egresos: EgresoModel[] = [
    new EgresoModel('Gastos de comida', 500),
    new EgresoModel('Gastos de transporte', 900),
  ]

  eliminar(egreso: EgresoModel) {
    const indice = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }
}
