import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ManageProfileRoutingModule } from './manage-profile.routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TransfersComponent } from './transfers/transfers.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

@NgModule({
  imports: [
    CommonModule,
    ManageProfileRoutingModule,
  ],
  declarations: [
    ProfileComponent,
    ChangePasswordComponent,
    TransfersComponent,
    TransactionHistoryComponent
  ]
})
export class ManageProfileModule { }
