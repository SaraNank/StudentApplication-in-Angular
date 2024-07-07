import { NgModule } from "@angular/core";
import { TimerComponent } from "./timer/timer.component";
import { ObservablehwComponent } from "./observablehw/observablehw.component";
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations:[ ObservablehwComponent, TimerComponent, LoginComponent],
    imports:[],
    providers:[],
    exports:[TimerComponent,ObservablehwComponent]
})

export class Demomodule{

}