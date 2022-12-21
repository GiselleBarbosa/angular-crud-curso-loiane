import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialImportsModule = [
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialImportsModule
  ],
  exports: [
    ...materialImportsModule
  ]
})
export class AngularMaterialModule { }
