import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  toggleFormClass;
  isSignin; 
  constructor() { }

  ngOnInit() { 
    this.isSignin = true;
  }

  showSignUp() {
    this.toggleFormClass = 'bounceLeft';
    this.isSignin = !this.isSignin;
  }

  showLogin() {
    this.toggleFormClass = 'bounceRight';
    this.isSignin = !this.isSignin;
  }

}
