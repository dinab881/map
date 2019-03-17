import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote/quote.component';
import {MaterialModule} from '../material/material.module';
import { QuaterComponent } from './quater/quater.component';
import { LocationComponent } from './location/location.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [QuoteComponent, QuaterComponent, LocationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbm5zDBp274CrHavs2diKORxqhGz1pF3g'
    })
  ]
})
export class QuoteModule { }
