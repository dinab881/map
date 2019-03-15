import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule, MatRadioModule, MatSidenavModule, MatTableModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
