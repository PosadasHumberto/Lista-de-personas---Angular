import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import {LoggingService} from "./LoggingService.service";
import {PersonasService} from "./personas.service";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import {DataService} from "./data.service";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {LoginService} from "./login/login.service";
import {LoginGuardianService} from "./login/login-guardian.service";

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule    //módulo necesario para hacer Http Requests
  ],
  providers: [
    LoggingService,
    PersonasService,
    DataService,
    LoginService,
    LoginGuardianService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
