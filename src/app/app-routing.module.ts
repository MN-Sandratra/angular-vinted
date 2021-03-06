import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NewItemContentComponent } from './components/new-item-content/new-item-content.component';
import { AboutHowItWorksComponent } from './components/about-how-it-works/about-how-it-works.component';
import { ApplicationAboutItComponent } from './components/application-about-it/application-about-it.component';
import { AboutComponent } from './components/about/about.component';
import { CloneProposComponent } from './components/clone-propos/clone-propos.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { AchatComponent } from './achat/achat.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ChatComponent } from './chat/chat.component';
import { FavorisComponent } from './favoris/favoris.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesContentComponent } from './messages-content/messages-content.component';
import { NewMessagesContentComponent } from './new-messages-content/new-messages-content.component';

const routes: Routes = [
  {path:'',component:MainContentComponent},
  {path:'new',component:NewItemContentComponent},
  {path:'how_it_works',component:AboutHowItWorksComponent},
  {path:'app',component:ApplicationAboutItComponent},
  {path:'about',component:AboutComponent},
  {path:'clone',component:CloneProposComponent},
  {path: "login", component: SeConnecterComponent}, 
  {path : "signup", component: InscrireComponent},
  { path: 'article-detail/:id', component: ArticleDetailComponent },
  { path: 'chat/:id', component: ChatComponent }, 
  { path: 'achat/:id', component: AchatComponent },
  { path: 'favourite_list', component: FavorisComponent},
  { path: 'inbox', component: MessagesContentComponent},
  { path: 'new_messages', component: NewMessagesContentComponent},


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[MainContentComponent,NewItemContentComponent,AboutHowItWorksComponent,ApplicationAboutItComponent,AboutComponent,CloneProposComponent, SeConnecterComponent, InscrireComponent, ArticleDetailComponent, ChatComponent,AchatComponent,FavorisComponent,MessagesContentComponent,NewMessagesContentComponent]
