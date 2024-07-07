import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
   loggedIn:boolean=false;
  constructor(private _router: Router) { }
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(): void {
    console.log("login in server")
    this.loggedIn = true;
    console.log(this.loggedIn)
  }

  logout(): void {
    this.loggedIn = false;
    this._router.navigate(['/login']); // אפשר להחליף 'login' בנתיב לדף ההתחברות המתאים
  }
}
