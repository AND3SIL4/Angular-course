import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';
import { FormularioComponent } from './components/personas/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: PersonasComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'personas/agregar', component: FormularioComponent },
  { path: 'personas/:id', component: FormularioComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
