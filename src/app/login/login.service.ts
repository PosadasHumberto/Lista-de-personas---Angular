import {Injectable} from "@angular/core";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {Router} from "@angular/router";


@Injectable()
export class LoginService {

  //atributos
  token : string | null;

  //constructor
  constructor(
    private router : Router
  ) {
  }

  //métodos
  login(email : string, password : string){

    /*el metodo signInWithEmailAndPassword() y el getIdToken son promesas asi que
    * hay que tratarla con el catch, finally o then, trataremos el then solamente
    * en ambos casos*/
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser?.getIdToken()
            .then(
              token => {
                this.token = token; //guardamos el token obtenido en el atributo token
                this.router.navigate(['/']);//redireccionamos a la pagina inicial
              }
            )
        }
      )

  }

  getIdToken() {
    return this.token
  }

  isAutenticado() : boolean{
    return this.token != null;  //verificamos si el token ya ha sido generado
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.token = null;
      this.router.navigate(['login'])
    }).catch(e => console.log("error logout: " + e))
  }
}
