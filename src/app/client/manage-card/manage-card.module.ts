import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyCardsRoutingModule } from './manage-card-routing.module';
import { BuyCardsComponent } from './buy-cards/buy-cards.component';
import { CardViettelComponent } from '../card-viettel/card-viettel.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BuyMobiCardComponent } from './buy-mobi-card/buy-mobi-card.component';
import { BuyVinaCardComponent } from './buy-vina-card/buy-vina-card.component';
import { BuyVietnamCardComponent } from './buy-vietnam-card/buy-vietnam-card.component';

@NgModule({
  imports: [
    CommonModule,
    BuyCardsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  declarations: [
    BuyCardsComponent,
    CardViettelComponent,
    BuyMobiCardComponent,
    BuyVinaCardComponent,
    BuyVietnamCardComponent
  ]
})
export class ManageCardModule { }
