import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { TransfersComponent } from "./transfers/transfers.component";
import { TransactionHistoryComponent } from "./transaction-history/transaction-history.component";

const routes: Routes = [
    {
        path: '', component: ProfileComponent
    },{
        path: 'transfers', component: TransfersComponent
    },{
        path: 'change-password', component: ChangePasswordComponent
    },{
        path: 'transaction-history', component: TransactionHistoryComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageProfileRoutingModule { }