import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote/quote.component';
import {MaterialModule} from '../material/material.module';
import { QuaterComponent } from './quater/quater.component';

@NgModule({
  declarations: [QuoteComponent, QuaterComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class QuoteModule { }
