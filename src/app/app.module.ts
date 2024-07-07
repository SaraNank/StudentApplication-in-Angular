import { NgModule } from "@angular/core";
import {BrowserModule} from '@angular/platform-browser'
import { AppComponent } from "./app.component";
import { StudentModule } from "./modules/student/student.module";
import { Demomodule } from "./modules/demo/demo.module";
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from "@angular/router";
import { TimerComponent } from "./modules/demo/timer/timer.component";
import { AppRoutingMoudle } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[AppComponent, HomePageComponent, PageNotFoundComponent],
    imports:[BrowserModule,StudentModule,Demomodule,HttpClientModule,RouterModule,AppRoutingMoudle],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{

}