import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { StudentListComponent } from "./modules/student/student-list/student-list.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { StudentdetalisComponent } from "./modules/student/studentdetalis/studentdetalis.component";
import { AuthGuardService } from "./modules/demo/auth-guard.service";
import { LoginComponent } from "./modules/demo/login/login.component";

const APP_ROUTING :Route[]=[
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomePageComponent},
    {path:"students" ,component:StudentListComponent},
    {path:"student/:id" ,component:StudentdetalisComponent},
    {path:"setting",loadChildren:()=>import("./modules/setting-module/setting-module.module").then(m=>m.SettingModuleModule),canActivate:[AuthGuardService]},
   {path:"login",component:LoginComponent},
    {path:"**",component:PageNotFoundComponent},
   
];

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(APP_ROUTING)],
    exports:[RouterModule],
})

export class AppRoutingMoudle{}