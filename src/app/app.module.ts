import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { HomeComponent } from './client/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ManageCardComponent } from './client/manage-card/manage-card.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { NotificationsModule } from 'projects/angular6-notifications/src/public_api';
import { OwlModule } from 'ngx-owl-carousel';
import { ManageProfileComponent } from './client/manage-profile/manage-profile.component';
import { ClientAuthGuard } from './client/client-auth.guard';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AuthComponent,
    ManageCardComponent,
    ManageProfileComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    OwlModule,
    FormsModule
    // NotificationsModule,
  ],
  providers: [ClientAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
