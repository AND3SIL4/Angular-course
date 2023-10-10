import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataServices {
  urlDataBase: string =
    'https://listado-personas-27428-default-rtdb.firebaseio.com/datos.json';

  constructor(private httClient: HttpClient) {}

  cargarPersonas(): Observable<Persona[]> {
    return this.httClient.get<Persona[]>(this.urlDataBase);
  }

  // Guardar personas
  guardarPersonas(personas: Persona[]) {
    this.httClient.put(this.urlDataBase, personas).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
  }

  modificarPersona(indice: number, persona: Persona) {
    let url: string;
    url =
      'https://listado-personas-27428-default-rtdb.firebaseio.com/datos/' +
      indice +
      '.json';

    this.httClient.put(url, persona).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    );
  }

  eliminarPersona(indice: number) {
    let url: string;
    url =
      'https://listado-personas-27428-default-rtdb.firebaseio.com/datos/' +
      indice +
      '.json';

    this.httClient.delete(url).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    );
  }
}
