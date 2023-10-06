import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
})
export class CalculadoraComponent {

  numeroUno = '';
  numeroDos = '';

  result:string = '';

  sumar():void {
    let primero = parseInt(this.numeroUno);
    let segundo = parseInt(this.numeroDos);
    let resultado = primero + segundo
    this.result = resultado.toString();
    this.numeroUno = '';
    this.numeroDos = '';
  }
}
