import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { MainContentComponent } from './components/main-content/main-content.component';
import { NewItemContentComponent } from './components/new-item-content/new-item-content.component';
import { AboutHowItWorksComponent } from './components/about-how-it-works/about-how-it-works.component';
import { ApplicationAboutItComponent } from './components/application-about-it/application-about-it.component';
import { AboutComponent } from './components/about/about.component';
import { CloneProposComponent } from './components/clone-propos/clone-propos.component';
const routes: Routes = [
  {path:'',component:MainContentComponent},
  {path:'new',component:NewItemContentComponent},
  {path:'how_it_works',component:AboutHowItWorksComponent},
  {path:'app',component:ApplicationAboutItComponent},
  {path:'about',component:AboutComponent},
  {path:'clone',component:CloneProposComponent}
=======
import { AppComponent } from './app.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';

const routes: Routes = [
  {path: "home", component: AppComponent}, 
  {path: "login", component: SeConnecterComponent}, 
  {path : "signup", component: InscrireComponent}
>>>>>>> origin/login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[MainContentComponent,NewItemContentComponent,AboutHowItWorksComponent,ApplicationAboutItComponent,AboutComponent,CloneProposComponent]