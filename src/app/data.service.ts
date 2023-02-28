import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Persona} from "./persona.model";
import {Observable} from "rxjs";
import {LoginService} from "./login/login.service";

@Injectable()   //usamos esta anotacion cuando un Service consume otro Service
export class DataService{

  private urlDB : string = 'https://listado-personas-1614f-default-rtdb.europe-west1.firebasedatabase.app/';

  //constructor
  constructor(
    private httpClient : HttpClient,
    private loginService : LoginService
  ) {
  }

  //métodos
  guardarPersonas(personas : Persona[]) : void {
    const token = this.loginService.getIdToken();
    this.httpClient.put(this.urlDB + 'datos.json?auth=' + token, personas)
      .subscribe(
        response => console.log("resultado guardar personas: " + response),
        error => console.log("Error al guardar Personas: " + error)
      )
  }

  cargarPersonas() : Observable<any>{
    const token = this.loginService.getIdToken();
    return this.httpClient.get(this.urlDB + 'datos.json?auth=' + token);
  }

  modificarPersona(index : number, personaModif : Persona){
    const token = this.loginService.getIdToken();
    this.httpClient.put(
      this.urlDB + 'datos/' + index + ".json?auth=" + token,
      personaModif)
      .subscribe(
        response => console.log("Resultado modificacion: " + response),
        error => console.log("Error al modificar persona!."))
  }

  eliminarPersona(index : number) {
    const token = this.loginService.getIdToken();
    this.httpClient.delete(this.urlDB + "datos/" + index + ".json?auth=" + token)
      .subscribe(
        response=> console.log("resultado al eliminar: " + response),
        error => console.log("Error al eliminar Persona: " + error)
      )
  }

}
