import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  entrance(){
    console.log("entrance");
    this._LoginServiceService.login();
  }
  constructor(private _LoginServiceService:LoginServiceService){

  }
}
