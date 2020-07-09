import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient, private apiConfig: ApiConfigService) { }

  getVideoInfo(videoId: string) {
    return this.http.get(`${this.apiConfig.apiURL}/videos/${videoId}`);
  }
}
