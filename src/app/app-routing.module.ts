import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NewItemContentComponent } from './components/new-item-content/new-item-content.component';
import { AboutHowItWorksComponent } from './components/about-how-it-works/about-how-it-works.component';
const routes: Routes = [
  {path:'',component:MainContentComponent},
  {path:'new',component:NewItemContentComponent},
  {path:'how_it_works',component:AboutHowItWorksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[MainContentComponent,NewItemContentComponent,AboutHowItWorksComponent]