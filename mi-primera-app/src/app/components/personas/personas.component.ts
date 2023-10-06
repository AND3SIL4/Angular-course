import { Component } from "@angular/core";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PeopleComponent{
  deshabilitar:boolean = false;
  mensaje:string = 'No se ha agregado ninguna persona';
  titulo = '';

  agregarPersona():void {
    this.mensaje = 'Persona agregada'; 
  } 

  // Metodo para modificar usando event binding
  // modificarTitulo(event:Event):void {
  //   const title = (<HTMLInputElement>event.target).value;
  //   this.titulo = title;
  //   console.log('Se esta ejecutando el metodo modificar titulo');
  //   console.log(title);
  // }


}
