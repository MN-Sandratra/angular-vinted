import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';

import { MatDividerModule } from '@angular/material/divider';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';

import { MatTooltipModule } from '@angular/material/tooltip';

import { MatTabsModule } from '@angular/material/tabs';

import { MatGridListModule } from '@angular/material/grid-list';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatDatepickerModule} from '@angular/material/datepicker'; 

import {MatRadioModule} from '@angular/material/radio'; 

import { MatSelectModule } from '@angular/material/select';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatDividerModule,
  MatToolbarModule,
  MatCardModule,
  MatTooltipModule,
  MatTabsModule,
  MatGridListModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule
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
