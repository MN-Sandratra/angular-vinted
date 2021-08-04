import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { SectionArticleComponent } from './components/section-article/section-article.component';
import { SearchTagComponent } from './components/search-tag/search-tag.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarousselArticlesComponent } from './components/caroussel-articles/caroussel-articles.component';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopNavbarComponent,
    BottomNavbarComponent,
    MainContentComponent,
    ContentSectionComponent,
    SectionArticleComponent,
    SearchTagComponent,
    FooterComponent,
    CarousselArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library:FaIconLibrary){
    library.addIconPacks(fas,far);
  }
}
