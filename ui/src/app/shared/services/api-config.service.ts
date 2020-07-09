import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  public apiURL: String;
  constructor(private http: HttpClient) {}

  async getAPIUrl() {
    this.apiURL = await this.http.get('/assets/api.config.txt', {responseType: 'text'}).toPromise();
  }
}
