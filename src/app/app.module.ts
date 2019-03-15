import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { SelectUsStateComponent } from './select-us-state/select-us-state.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {QuoteModule} from './quote/quote.module';

@NgModule({
  declarations: [
    AppComponent,
    SelectUsStateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    QuoteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbm5zDBp274CrHavs2diKORxqhGz1pF3g'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
