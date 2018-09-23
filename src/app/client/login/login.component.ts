import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLoggedin(f){
    sessionStorage.setItem('cl-gold','100');
    sessionStorage.setItem('cl-username',f.usernameClient);
    sessionStorage.setItem('cl-isLoggedin','true');
    this.router.navigate(['/home']);
  }
}
