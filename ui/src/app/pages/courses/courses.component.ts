import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/course';
import { UserService } from 'src/app/shared/services/user.service';
import { FeedItemService } from 'src/app/shared/services/feed-item.service';
import { FeedItem } from 'src/app/core/models/feed-item';

@Component({
  selector: 'app-home',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(public userService: UserService, private feedItemService: FeedItemService) { }

  public feedItemCount;

  ngOnInit(): void {
    this.getFeedItemCount();
  }

  public isTeachingStaff(): boolean {
    return this.userService.currentUser.type == 'teaching';
  }

  public getFeedItemCount() {
    this.feedItemService.getAllFeedItems().subscribe((feedItems: FeedItem[]) => {
         this.feedItemCount = feedItems.length
    });
  }
}
