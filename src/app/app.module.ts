import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents  } from './app-routing.module';
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
import { NewItemContentComponent } from './components/new-item-content/new-item-content.component';
import { NewItemAddPhotosComponent } from './components/new-item-add-photos/new-item-add-photos.component';
import { NewItemDescriptionsComponent } from './components/new-item-descriptions/new-item-descriptions.component';
import { AboutHowItWorksComponent } from './components/about-how-it-works/about-how-it-works.component';
import { TopAboutHowItWorksComponent } from './components/top-about-how-it-works/top-about-how-it-works.component';
import { VendreAboutHowItWorksComponent } from './components/vendre-about-how-it-works/vendre-about-how-it-works.component';
import { AcheterAboutHowItWorksComponent } from './components/acheter-about-how-it-works/acheter-about-how-it-works.component';
import { SecuriteAboutHowItWorksComponent } from './components/securite-about-how-it-works/securite-about-how-it-works.component';
import { PretAboutHowItWorksComponent } from './components/pret-about-how-it-works/pret-about-how-it-works.component';
import { BottomAboutHowItWorksComponent } from './components/bottom-about-how-it-works/bottom-about-how-it-works.component';
import { FooterAboutHowItWorksComponent } from './footer-about-how-it-works/footer-about-how-it-works.component';

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
    CarousselArticlesComponent,
    routingComponents,
    NewItemContentComponent,
    NewItemAddPhotosComponent,
    NewItemDescriptionsComponent,

    AboutHowItWorksComponent,
    TopAboutHowItWorksComponent,
    VendreAboutHowItWorksComponent,
    AcheterAboutHowItWorksComponent,
    SecuriteAboutHowItWorksComponent,
    PretAboutHowItWorksComponent,
    BottomAboutHowItWorksComponent,
    FooterAboutHowItWorksComponent
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
