import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Apollo, gql } from 'apollo-angular';
import { EncrDecrService } from '../encr-decr-service.service';
import { User } from '../models/User';

const postUser = gql`mutation($user: UserInput) { 
  createUser(user: $user) {
    username,
    password,
    email
  }
}`;

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.scss']
})
export class InscrireComponent implements OnInit {
  
  hide = true;

  hide_hint = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [Validators.required , Validators.minLength(7)]);

  user = new FormControl('', [Validators.required]);

  news = new FormControl('', []);

  myform = new FormGroup({user:this.user, email:this.email, password:this.password, news:this.news});

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Complète ce champ pour continuer';
    }
    
    return this.email.hasError('email') ? 'Pas un email valide' : '';
  }

  getUserMessage() {
    if (this.user.hasError('required')) {
      return 'Complète ce champ pour continuer';
    }
    return '';
  }

  getPasswordError() {
    if (this.password.hasError('required')) {
      return 'Complète ce champ pour continuer';
    }
    return (this.password.hasError('minlength')) ? 'Mot de passe : 7 caractères minimum' : '';
  }

  formReset(form: FormGroup) {

    form.reset();

    Object.keys(form.controls).forEach(key => {
      form.get(key)?.setErrors(null) ;
    });
  } 

  onSubmit(){
    if (this.myform.valid) {
      let encryptedPass:string = this.EncrDecr.set('123456$#@$^@1ERF', this.password.value);
      this.apollo.mutate({
        mutation : postUser,
        variables: {
          user: {
            username: this.user.value,
            password: encryptedPass,
            email: this.email.value
          }
        }
      }).subscribe(({data}) => {
        this.openSnackBarSuccess('Inscription effectée avec succès', 'Fermer');
      },(error) => {
        this.openSnackBarError('Nom d\'utilisateur déjà pris', 'Fermer');
      });

      this.formReset(this.myform);
    }
  }
  
  constructor(private apollo:Apollo, private snackbar: MatSnackBar, private EncrDecr: EncrDecrService) { }

  openSnackBarSuccess(message:string, action:string) {
    this.snackbar.open(message, action, {
      duration: 3000,
      panelClass: ['green-snackbar']
    });
  }

  openSnackBarError(message:string, action:string) {
    this.snackbar.open(message, action, {
      duration: 3000,
      panelClass: ['red-snackbar']
    });
  }

  ngOnInit(): void {
  }

}
