import {Component, OnInit} from '@angular/core';
import firebase from "firebase/compat/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //atributos
  titulo : String = 'Listado de personas';

  constructor() {
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD78_PuzNnD2qqabUyE5cV1ZhZpmvU_M_s",
      authDomain: "listado-personas-1614f.firebaseapp.com"
    })
  }

}
