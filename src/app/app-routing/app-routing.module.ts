import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PersonasComponent} from "../personas/personas.component";
import {FormularioComponent} from "../personas/formulario/formulario.component";
import {ErrorComponent} from "../error/error.component";
import {LoginComponent} from "../login/login.component";
import {LoginGuardianService} from "../login/login-guardian.service";

const routes: Routes = [
  {path: '', component: PersonasComponent, canActivate: [LoginGuardianService]},
  {path: 'login', component: LoginComponent},
  {path: 'personas', component: PersonasComponent,
    canActivate: [LoginGuardianService],
    children:[
    {path: 'agregar', component: FormularioComponent},
    {path: ':id', component: FormularioComponent}
    ]
  },
  {path: '**', component: ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
