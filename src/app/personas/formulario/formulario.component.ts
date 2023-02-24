import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Persona} from "../../persona.model";
import {PersonasService} from "../../personas.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  //atributos
  nombreInput : String;
  apellidoInput : String;
  index : number;
  modoEdicion : number;


  //constructor
  constructor(
    private personasService : PersonasService,
    private router : Router,
    private route : ActivatedRoute
    ) {
    //suscribirse al evento que esta emitiendo PersonasService.saludar
    this.personasService.saludar.subscribe(
      (indice : number) => alert("El indice es: " + indice)
    );
  }

  ngOnInit(): void {
    //recuperar parametros
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = Number(this.route.snapshot.queryParams['modoEdicion']);

    //si el id existe y no es nulo entonces estaremos modificando y no creando
    if (this.modoEdicion != null && this.modoEdicion === 1){
      let personaEncontrada : Persona= this.personasService.encontrarPersona(this.index);

      //usando 2 way binding rellenamos los campos con los datos de la persona.
      this.nombreInput = personaEncontrada.nombre;
      this.apellidoInput = personaEncontrada.apellido;
    }
  }

  //métodos
  guardarPersona() : void {
    let persona : Persona = new Persona(this.nombreInput, this.apellidoInput);

    //si el index fue encontrado se trata de edicion de una persona y no de la creacion de una nueva
    if (this.modoEdicion != null && this.modoEdicion === 1){
      //modificando la persona existente
      this.personasService.modificarPersona(persona, this.index)
    }else {
      //Agregando directamente la persona obtenida desde el formulario al arreglo de personas
      this.personasService.agregarPersona(persona);
    }

    this.router.navigate(['personas'])
  }

  eliminarPersona(){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index);

      //redirigir a la lista de personas
      this.router.navigate(['personas'])
    }
  }

}
