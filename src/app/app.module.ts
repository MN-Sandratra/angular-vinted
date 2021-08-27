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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';
import  {NgxPaginationModule}from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AboutHowItWorksComponent } from './components/about-how-it-works/about-how-it-works.component';
import { TopAboutHowItWorksComponent } from './components/top-about-how-it-works/top-about-how-it-works.component';
import { VendreAboutHowItWorksComponent } from './components/vendre-about-how-it-works/vendre-about-how-it-works.component';
import { AcheterAboutHowItWorksComponent } from './components/acheter-about-how-it-works/acheter-about-how-it-works.component';
import { SecuriteAboutHowItWorksComponent } from './components/securite-about-how-it-works/securite-about-how-it-works.component';
import { PretAboutHowItWorksComponent } from './components/pret-about-how-it-works/pret-about-how-it-works.component';
import { BottomAboutHowItWorksComponent } from './components/bottom-about-how-it-works/bottom-about-how-it-works.component';
import { FooterAboutHowItWorksComponent } from './components/footer-about-how-it-works/footer-about-how-it-works.component';
import { ApplicationAboutItComponent } from './components/application-about-it/application-about-it.component';
import { TopApplicationAboutItComponent } from './components/top-application-about-it/top-application-about-it.component';
import { ToprightApplicationAboutItComponent } from './components/topright-application-about-it/topright-application-about-it.component';
import { AboutComponent } from './components/about/about.component';
import { TopAboutComponent } from './components/top-about/top-about.component';
import { TopImageComponent } from './components/top-image/top-image.component';
import { ContenuAboutComponent } from './components/contenu-about/contenu-about.component';
import { EquipeAboutComponent } from './components/equipe-about/equipe-about.component';
import { BottomAboutComponent } from './components/bottom-about/bottom-about.component';
import { LogoBottomAboutComponent } from './components/logo-bottom-about/logo-bottom-about.component';
import { CloneProposComponent } from './components/clone-propos/clone-propos.component';
import { CloneTopProposComponent } from './components/clone-top-propos/clone-top-propos.component';
import { CloneContenuProposComponent } from './components/clone-contenu-propos/clone-contenu-propos.component';
import { CloneBottomProposComponent } from './components/clone-bottom-propos/clone-bottom-propos.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { GraphQLModule } from './graphql.module';
import { EncrDecrService } from './encr-decr-service.service';

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
    FooterAboutHowItWorksComponent,
    ApplicationAboutItComponent,
    TopApplicationAboutItComponent,
    ToprightApplicationAboutItComponent,
    AboutComponent,
    TopAboutComponent,
    TopImageComponent,
    ContenuAboutComponent,
    EquipeAboutComponent,
    BottomAboutComponent,
    LogoBottomAboutComponent,
    CloneProposComponent,
    CloneTopProposComponent,
    CloneContenuProposComponent,
    CloneBottomProposComponent
    SeConnecterComponent,
    InscrireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule
    BrowserAnimationsModule,
    MaterialModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : 'SocialAuthServiceConfig',
      useValue: {
        autoLogin : false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '550907862929235'
            )
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '780388224567-enp19pv4g9a3ipd2c9qq1sb9pp6avi94.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    },
    EncrDecrService
  ],
  bootstrap: [AppComponent]
  
})

export class AppModule { 
  constructor(library:FaIconLibrary){
    library.addIconPacks(fas,far);
  }
}
