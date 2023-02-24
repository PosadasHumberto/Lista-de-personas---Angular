import { Component } from '@angular/core';
import {Persona} from "../persona.model";
import {PersonasService} from "../personas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  //atributos
  personas : Persona[] = [];

  //constructor
  constructor(
    private personasService : PersonasService,
    private router : Router
  ) {
  }

  ngOnInit(): void {
    //introducimos en el arreglo personas de este componente el contenido del arreglo
    //personas de la clase service PersonasService.
    this.personas = this.personasService.personas;
  }

  //métodos
  agregar(){
    this.router.navigate(['personas/agregar'])
  }

}
