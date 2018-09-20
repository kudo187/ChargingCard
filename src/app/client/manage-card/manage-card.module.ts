import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyCardsRoutingModule } from './manage-card-routing.module';
import { BuyCardsComponent } from './buy-cards/buy-cards.component';

@NgModule({
  imports: [
    CommonModule,
    BuyCardsRoutingModule
  ],
  declarations: [BuyCardsComponent]
})
export class ManageCardModule { }
