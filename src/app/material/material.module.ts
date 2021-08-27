import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

=======
>>>>>>> origin/login
import {MatButtonModule} from '@angular/material/button'; 

import {MatFormFieldModule} from '@angular/material/form-field'; 

import {MatIconModule} from '@angular/material/icon';

import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material/input'; 

import {MatCheckboxModule} from '@angular/material/checkbox'; 

import {MatSnackBarModule} from '@angular/material/snack-bar';
<<<<<<< HEAD
import { MatSelectModule } from '@angular/material/select';

=======
>>>>>>> origin/login

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
<<<<<<< HEAD
  MatSnackBarModule,
  MatSelectModule

=======
  MatSnackBarModule
>>>>>>> origin/login
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
