import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './client/header/header.component';

const routes: Routes = [
  {path: 'home', component:HeaderComponent},
  { path: 'admin', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'admin-login', loadChildren: './pages/pages.module#PagesModule' },
  { path: '', redirectTo: 'admin', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
