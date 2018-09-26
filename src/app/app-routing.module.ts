import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './client/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ManageCardComponent } from './client/manage-card/manage-card.component';
import { ManageProfileComponent } from './client/manage-profile/manage-profile.component';
import { ClientAuthGuard } from './client/client-auth.guard';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminAuthGuard } from './auth-admin/admin-auth.guard';

const routes: Routes = [
  {
    path: 'home', component: ManageCardComponent,
    loadChildren: './client/manage-card/manage-card.module#ManageCardModule'
  },

  { path: 'login', component: LoginComponent,},
  { path: 'register', component: RegisterComponent},
  {
    path: 'manage-profile',
    component: ManageProfileComponent,
    loadChildren: './client/manage-profile/manage-profile.module#ManageProfileModule',
    canActivate:[ClientAuthGuard]
  },
  { path: 'admin', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AdminAuthGuard] },
  { path: 'admin-login', component:LoginAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
