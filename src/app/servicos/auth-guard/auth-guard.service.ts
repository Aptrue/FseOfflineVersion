import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private authService: AuthenticationService) { }

  canActivate(): boolean {

    return this.authService.isAuthenticated(); // retorna o valor da funcao isauthenticated true ou False activando a routa

  }
}
