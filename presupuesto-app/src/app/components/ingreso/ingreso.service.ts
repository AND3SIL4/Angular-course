import { IngresoModel } from "./ingreso.model";

export class IngresoService{
  ingresos: IngresoModel[] = [
    new IngresoModel('Otra cosa', 4000),
    new IngresoModel ('Venta moto',5000)
  ];

  eliminar(ingreso: IngresoModel) {
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice, 1);
  }
}
