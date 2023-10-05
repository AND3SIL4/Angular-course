import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primera aplicacion en angular';
  owner = 'Andres Felipe Silva';

  CambiarNombre(title: string, name: string) {
    this.title = title;
    this.owner = name;
  }
}
