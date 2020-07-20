import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from 'src/app/shared/services/api-config.service';
import { UserService } from 'src/app/shared/services/user.service';
import { FeedItemService } from 'src/app/shared/services/feed-item.service';
import { FeedItem } from 'src/app/core/models/feed-item';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() videoId: string;
  @Input() courseId: string;
  @Input() currentTime: number;

  @Output() updatedFeedItems: EventEmitter<any> = new EventEmitter();

  public content: string;

  constructor(private http: HttpClient, private apiConfig: ApiConfigService, private user: UserService, private feedItemService: FeedItemService) { }

  ngOnInit(): void {
  }

  submitItem() {
    this.feedItemService.submitFeedItem(this.videoId, {
      author: this.user.currentUser._id,
      content: this.content,
      video: this.videoId,
      course: this.courseId,
      currentVideoTime: this.currentTime
    }).subscribe((response: FeedItem[]) => {
      this.content = null;
      this.updatedFeedItems.emit(response);
    });
  }

}
