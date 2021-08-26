import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'; 

import {MatFormFieldModule} from '@angular/material/form-field'; 

import {MatIconModule} from '@angular/material/icon';

import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material/input'; 

import {MatCheckboxModule} from '@angular/material/checkbox'; 

import {MatSnackBarModule} from '@angular/material/snack-bar';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatSnackBarModule
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
