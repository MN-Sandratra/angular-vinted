import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[MainContentComponent,NewItemContentComponent,AboutHowItWorksComponent,ApplicationAboutItComponent,AboutComponent,CloneProposComponent]