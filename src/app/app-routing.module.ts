import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './client/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: AuthComponent},
  { path: 'admin', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'admin-login', loadChildren: './pages/pages.module#PagesModule' },
  { path: '', component: HomeComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
