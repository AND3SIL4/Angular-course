import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './components/personas/persona/persona.component';
import { FormularioComponent } from './components/personas/formulario/formulario.component';
import { LogginService } from './loggin.service';
import { PersonaService } from './personas.service';
import { AppRoutingModule } from './app-routing.module';
import { PersonasComponent } from './components/personas/personas.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [AppComponent, PersonaComponent, FormularioComponent, PersonasComponent, ErrorComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [LogginService, PersonaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
