import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operandos',
  templateUrl: './operandos.component.html',
})
export class OperandosComponent {
  @Output() resultChanged = new EventEmitter<string>();

  numeroUno: string;
  numeroDos: string;

  sumar(): void {
    let primero = parseInt(this.numeroUno);
    let segundo = parseInt(this.numeroDos);
    let resultado = primero + segundo;
    this.resultChanged.emit(resultado.toString());
    this.numeroUno = '';
    this.numeroDos = '';
  }
}
