import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SettingRouting } from './setting-routing.module';



@NgModule({
  declarations: [
    AccountComponent,
    ProfileComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,SettingRouting
  ]
})
export class SettingModuleModule { }
