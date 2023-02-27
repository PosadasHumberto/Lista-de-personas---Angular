import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Persona} from "./persona.model";

@Injectable()   //usamos esta anotacion cuando un Service consume otro Service
export class DataService{

  //constructor
  constructor(
    private httpClient : HttpClient,
  ) {
  }

  //métodos
  guardarPersonas(personas : Persona[]){
    this.httpClient.put('https://listado-personas-1614f-default-rtdb.europe-west1.firebasedatabase.app/datos.json', personas)
      .subscribe(
        response => console.log("resultado guardar personas: " + response),
        error => console.log("Error al guardar Personas: " + error)
      )
  }

}
