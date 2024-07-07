import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
 
  canActivate():boolean{
    if(this._LoginServiceService.isLoggedIn()){
      return true;
    }
    alert("you cant enter")
    this._router.navigate(['/login']);
    return false;
  }
  constructor(private _LoginServiceService:LoginServiceService,private _router: Router) { }
}
