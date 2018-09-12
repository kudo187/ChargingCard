import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './core';
import { AuthLayoutComponent } from './core';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'email',
    loadChildren: './email/email.module#EmailModule'
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule'
  }, {
    path: 'icons',
    loadChildren: './icons/icons.module#IconsModule'
  }, {
    path: 'cards',
    loadChildren: './cards/cards.module#CardsModule'
  }, {
    path: 'forms',
    loadChildren: './form/form.module#FormModule'
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  }, {
    path: 'datatable',
    loadChildren: './datatable/datatable.module#DatatableModule'
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule'
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule'
  }, {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  }, {
    path: 'taskboard',
    loadChildren: './taskboard/taskboard.module#TaskboardModule'
  }, {
    path: 'calendar',
    loadChildren: './fullcalendar/fullcalendar.module#FullcalendarModule'
  }, {
    path: 'media',
    loadChildren: './media/media.module#MediaModule'
  }, {
    path: 'widgets',
    loadChildren: './widgets/widgets.module#WidgetsModule'
  }, {
    path: 'social',
    loadChildren: './social/social.module#SocialModule'
  }, {
    path: 'docs',
    loadChildren: './docs/docs.module#DocsModule'
  }]
}, {
  path: 'admin',
  component: AuthLayoutComponent,
  children: [{
    path: '',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }, {
    path: 'landing',
    loadChildren: './landing/landing.module#LandingModule'
  }]
}, {
  path: '',
  redirectTo: 'admin',
  pathMatch: 'full',
},
{
  path: 'error',
  loadChildren: './error/error.module#ErrorModule'
// }, {
//   path: '**',
//   redirectTo: 'error/404'
}];

