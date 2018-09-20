import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyCardsComponent } from './buy-cards/buy-cards.component';


const routes: Routes = [
  { path: '', component: BuyCardsComponent },
  { path: 'buy-card', component: BuyCardsComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BuyCardsRoutingModule { }
