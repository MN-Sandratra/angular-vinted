import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatComponent } from './achat/achat.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: ArticleDetailComponent },
  { path: 'chat', component: ChatComponent }, 
  { path: 'achat', component: AchatComponent },
  // { path : 'comment/:id', component: CommentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

