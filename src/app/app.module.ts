import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './client/header/header.component';
// import { NotificationsModule } from 'projects/angular6-notifications/src/public_api';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // NotificationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
