import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {LoginService} from "./login.service";
import {Injectable} from "@angular/core";

@Injectable()   //por que es un servicio que esta consumiendo otros servicios
export class LoginGuardianService implements CanActivate{

  //constructor
  constructor(
    private loginService : LoginService,
    private router : Router
  ) {
  }

  //métodos
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.loginService.isAutenticado()){
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }


}
