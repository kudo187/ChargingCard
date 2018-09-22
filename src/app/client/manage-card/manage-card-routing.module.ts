import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyCardsComponent } from './buy-cards/buy-cards.component';
import { CardViettelComponent } from '../card-viettel/card-viettel.component';
import { BuyMobiCardComponent } from './buy-mobi-card/buy-mobi-card.component';
import { BuyVinaCardComponent } from './buy-vina-card/buy-vina-card.component';
import { BuyVietnamCardComponent } from './buy-vietnam-card/buy-vietnam-card.component';


const routes: Routes = [
  { path: '', component: BuyCardsComponent },
  { path: 'buy-card', component: BuyCardsComponent},
  { path: 'viettel-card', component: CardViettelComponent},
  { path: 'mobi-card', component: BuyMobiCardComponent},
  { path: 'vina-card', component: BuyVinaCardComponent},
  { path: 'vietnam-card', component: BuyVietnamCardComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BuyCardsRoutingModule { }
