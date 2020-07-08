import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';
import { Course } from 'src/app/core/models/course';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: {
    firstName: string,
    lastName: string,
    type: string,
    id: string
    courses: Course[]
  } = {
    firstName: null,
    lastName: null,
    type: null,
    id: null,
    courses: []
  };

  constructor(private http: HttpClient, private apiConfig: ApiConfigService) { }

  public isAuthenticated(): boolean {
    return !!this.currentUser;
  }

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
