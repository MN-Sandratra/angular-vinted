import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';

const routes: Routes = [
  {path: "home", component: AppComponent}, 
  {path: "login", component: SeConnecterComponent}, 
  {path : "signup", component: InscrireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
