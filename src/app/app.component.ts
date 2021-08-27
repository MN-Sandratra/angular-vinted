import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginForm: FormGroup = new FormGroup({});
  socialUser: SocialUser = new SocialUser();
  isLoggedin: boolean = false;

  constructor(private socialAuthService: SocialAuthService) { 
    
  }


  ngOnInit(): void {    
    var btn = document.getElementById("openModal");
    btn?.click();
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}
