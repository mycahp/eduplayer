import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: {
    username: String,
    type: String,
    id: String
  }

  constructor() { }

  public setUserInfo(user) {
    localStorage.setItem('userInfo', JSON.stringify(user));
    this.currentUser = user;
  }

  public findUserInfo() {
    this.currentUser = this.getUserInfo();
  }

  public getUserInfo() {
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  public destroy() {
    localStorage.removeItem('userInfo');
    this.currentUser = null;
  }
}
