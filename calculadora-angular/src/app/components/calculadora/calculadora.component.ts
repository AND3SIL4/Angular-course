import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
})
export class CalculadoraComponent {
  result: string = '';

  modificarResultado(resultado: string): void {
    this.result = resultado;
  }
}
