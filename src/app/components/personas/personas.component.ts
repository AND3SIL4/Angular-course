import { Component } from "@angular/core";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PeopleComponent{
  text = 'Boton, boton, boton';

  onChange() {
    this.text = 'Buena la rata'
  }
}
