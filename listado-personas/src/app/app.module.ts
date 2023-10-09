import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './components/persona/persona.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LogginService } from './loggin.service';
import { PersonaService } from './personas.service';

@NgModule({
  declarations: [AppComponent, PersonaComponent, FormularioComponent],
  imports: [BrowserModule, FormsModule],
  providers: [LogginService, PersonaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
