import { Component, OnInit } from '@angular/core';
import { FeedItem } from 'src/app/core/models/feed-item';
import { TimeConverterService } from 'src/app/shared/services/time-converter.service';
import { FeedItemService } from 'src/app/shared/services/feed-item.service';

@Component({
  selector: 'app-follow-ups',
  templateUrl: './follow-ups.component.html',
  styleUrls: ['./follow-ups.component.scss']
})
export class FollowUpsComponent implements OnInit {

  public followUps: FeedItem[];

  constructor(private timeConverterService: TimeConverterService, private feedItemService: FeedItemService) { }

  ngOnInit(): void {
    this.getFollowUpItems();
  }

  getFollowUpItems() {
    this.feedItemService.getAllFeedItems().subscribe((feedItems: FeedItem[]) => {
      this.followUps = feedItems;
    })
  }

  getVideoLength(seconds: number) {
    return this.timeConverterService.getVideoLength(seconds);
  }

  updateWithResponse(followUp: FeedItem, index: number) {
    this.feedItemService.updateFeedItem(followUp._id, followUp.response).subscribe((feedItem: any) => {
      console.log(feedItem);

      this.followUps[index] = feedItem;
    })
  }
}
