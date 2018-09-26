import { Injectable } from '@angular/core';

interface myData{
  success:boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isLoggedinStatus = false;
  constructor() { }
  
  setLoggedIn(value:boolean){
    this.isLoggedinStatus = value;
  }

  get isLoggedIn(){
    return this.isLoggedinStatus;
  }
}
