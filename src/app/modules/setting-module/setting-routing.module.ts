import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { ProfileComponent } from "./profile/profile.component";


const SETTING_ROUTES:Route[]=[
    {path:"",redirectTo:"accountSetting",pathMatch:"full"},
    {path:"accountSetting",component:AccountComponent},
    {path:"favoritesSetting",component:FavoritesComponent},
    {path:"profileSetting",component:ProfileComponent},
]
@NgModule({
    imports:[RouterModule.forChild(SETTING_ROUTES)],
    exports:[RouterModule]
})
export class SettingRouting{

}