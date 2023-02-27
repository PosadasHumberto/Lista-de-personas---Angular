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
    this.personasService.obtenerPersonas()
      .subscribe((personasDB : Persona[]) => {

        //Llenamos el arreglo personas con el contenido de la BD
        this.personas = personasDB;

        //llenamos el arreglo personas del PersonasService tambien
        this.personasService.personas = personasDB;

      })
  }

  //métodos
  agregar(){
    this.router.navigate(['personas/agregar'])
  }

}
