import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Apollo, gql } from 'apollo-angular';
import { EncrDecrService } from '../encr-decr-service.service';
import { User } from '../models/User';

const getUsers = gql`query {
  getAllUsers {
    password
    username
    email
  }
}`;

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.scss']
})
export class SeConnecterComponent implements OnInit {

  allUsers:User[] = []; 

  hide = true;

  password = new FormControl('', [Validators.required]);

  user = new FormControl('', [Validators.required]);

  myform = new FormGroup({user:this.user, password:this.password});

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
    return '';
  }

  formReset(form: FormGroup) {

    form.reset();

    Object.keys(form.controls).forEach(key => {
      form.get(key)?.setErrors(null) ;
    });
  }

  onSubmit(){
    if (this.myform.valid) {
      let encrypted:string = this.EncrDecr.set('123456$#@$^@1ERF', this.password.value);
      let person:any = this.allUsers.find(user => (this.user.value === user.username || this.user.value === user.email) && (encrypted === user.password));
      
      if (person === undefined){
        this.openSnackBarError('Identifiant ou mot de passe invalide', 'Fermer');
      }
      else {
        this.openSnackBar('Identifiants vérifiés avec succès', 'Fermer');
      }
      this.formReset(this.myform);
    }
  }
  constructor(private apollo:Apollo, private snackBar: MatSnackBar, private EncrDecr: EncrDecrService) { }

  openSnackBar(message:string, action:string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['green-snackbar']
    });
  }

  openSnackBarError(message:string, action:string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['red-snackbar']
    });
  }
  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query: getUsers
    }).valueChanges
    .subscribe(({data}) => {
      this.allUsers = data.getAllUsers;
    });
  }

}
