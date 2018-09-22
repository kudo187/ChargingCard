import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './client/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ManageCardComponent } from './client/manage-card/manage-card.component';
import { ManageProfileComponent } from './client/manage-profile/manage-profile.component';
import { ClientAuthGuard } from './client/client-auth.guard';

const routes: Routes = [
  {
    path: 'home', component: ManageCardComponent,
    loadChildren: './client/manage-card/manage-card.module#ManageCardModule'
  },

  { path: 'login', component: AuthComponent },
  {
    path: 'manage-profile',
    component: ManageProfileComponent,
    loadChildren: './client/manage-profile/manage-profile.module#ManageProfileModule',
    canActivate:[ClientAuthGuard]
  },
  { path: 'admin', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'admin-login', loadChildren: './pages/pages.module#PagesModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
