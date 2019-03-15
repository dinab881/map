import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuoteComponent} from './quote/quote/quote.component';

const routes: Routes = [
  {
    path: '',
    component: QuoteComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
