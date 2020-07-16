import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class FeedItemService {

  constructor(private http: HttpClient, private apiConfig: ApiConfigService) { }

  public getAllFeedItems() {
    return this.http.get(`${this.apiConfig.apiURL}/feed-items`);
  }

  public getFeedItemsByVideoId(videoId: string) {
    return this.http.get(`${this.apiConfig.apiURL}/feed-items/video/${videoId}`);
  }

  public submitFeedItem(videoId: string, feedItem: {
    author: string,
    content: string,
    video: string,
    course: string,
    currentVideoTime: number
  }) {
    return this.http.post(`${this.apiConfig.apiURL}/feed-items/video/${videoId}`, feedItem);
  }
}
