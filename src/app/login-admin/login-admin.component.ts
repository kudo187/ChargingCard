import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { AuthServiceService } from '../auth-admin/auth-service.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  userError = false;
  passError = false;
  constructor(private router:Router, private auth:AuthServiceService) { }

  ngOnInit() {
  }

  onLoginAdmin(formLogin){
    if(formLogin.username === "admin")
    {
      this.userError = false;
      if(formLogin.pass === "123"){
        this.passError = false;
        this.auth.setLoggedIn(true);
        sessionStorage.setItem('cl-userNameAdmin',formLogin.username);
        sessionStorage.setItem('cl-isLoggedInAdmin','true');
        swal({
          type: 'success',
          title: 'Đăng nhập thành công',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/admin']);
      }
      else{
        this.passError = true
      }
    }
    else 
    {
      this.userError = true;
    }
  }

}
