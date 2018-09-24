import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientAuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(){
    if (sessionStorage.getItem('cl-isLoggedin')) {
      return true;
  }

  this.router.navigate(['/login']);
  return false;
  }
    // next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return true;
}
