import {Persona} from "./persona.model";
import {LoggingService} from "./LoggingService.service";
import {EventEmitter, Injectable, } from "@angular/core";
import {DataService} from "./data.service";
import {Observable} from "rxjs";

@Injectable()
export class PersonasService{

  //atributos
  personas : Persona[] = [];


  saludar : EventEmitter<number> = new EventEmitter<number>();  //atributo emmiter que va a permitir compartir informacion entre los componentes

  //constructor
  constructor(
    private loggingService : LoggingService,
    private dataService : DataService
    ) {
  }

  //getters & setters
  setPersonas(personas : Persona[]){
    this.personas = personas;
  }
//métodos
  agregarPersona(persona : Persona) : void{
    this.loggingService.enviaMensajeAConsola(
      "Persona: " + persona.nombre + ' ' + persona.apellido + " creada!");
    if(this.personas == null){
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);
  };

  obtenerPersonas() : Observable<any>{
    return this.dataService.cargarPersonas();
  }

  encontrarPersona(id : number) : Persona{
    return this.personas[id];
  }

  modificarPersona(persona: Persona, id : number){
    this.personas[id] = persona;
    this.dataService.modificarPersona(id, persona);
  }

  eliminarPersona(id : number){
    this.personas.splice(id,1);
    this.dataService.eliminarPersona(id);
    this.reasignarIndices();
  }

  reasignarIndices(){
    //método que va a reasignar indices despues de haber eliimnado una persona para
    //que se respete la posicion de cada elemento de la lista si agregamos personas
    if (this.personas.length > 0){
      this.dataService.guardarPersonas(this.personas);
    }
  }

}
