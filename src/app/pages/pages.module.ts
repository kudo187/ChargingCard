import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [ AuthComponent]
})
export class PagesModule { }
