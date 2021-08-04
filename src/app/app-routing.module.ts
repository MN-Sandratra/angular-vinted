import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NewItemContentComponent } from './components/new-item-content/new-item-content.component';

const routes: Routes = [
  {path:'',component:MainContentComponent},
  {path:'new',component:NewItemContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[MainContentComponent,NewItemContentComponent]