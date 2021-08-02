import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.scss']
})
export class SeConnecterComponent implements OnInit {

  hide = true;

  hide_hint = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [Validators.required , Validators.minLength(7)]);

  user = new FormControl('', [Validators.required]);

  myform = new FormGroup({user:this.user, email:this.email, password:this.password});

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Complète ces informations pour continuer';
    }
    
    return this.email.hasError('email') ? 'Pas un email valide' : '';
  }

  getUserMessage() {
    if (this.user.hasError('required')) {
      return 'Complète ces informations pour continuer';
    }
    return '';
  }

  getPasswordError() {
    if (this.password.hasError('required')) {
      return 'Complète ces informations pour continuer';
    }
    return (this.password.hasError('minlength')) ? 'Mot de passe : 7 caractères minimum' : '';
  }

  onSubmit(){
    if (this.myform.valid) {
      console.log("Form submit", this.myform.value);
      this.myform.reset();
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
