import { Component, OnInit } from '@angular/core';
import { FeedItem } from 'src/app/core/models/feed-item';
import { TimeConverterService } from 'src/app/shared/services/time-converter.service';

@Component({
  selector: 'app-follow-ups',
  templateUrl: './follow-ups.component.html',
  styleUrls: ['./follow-ups.component.scss']
})
export class FollowUpsComponent implements OnInit {

  constructor(private timeConverterService: TimeConverterService) { }

  ngOnInit(): void {
  }

  getFollowUpItems(): FeedItem[] {
    return [{
      author: 'Joe Student',
      date: 'Jun. 24, 2020',
      content: 'I do not understand what you meant here. Can you elaborate on what the variable X means?',
      displayTime: 22,
      video: '389024023ulkdflj2',
      course: 'k23k4j239alaskdjw'
    }];
  }

  getVideoLength(seconds: number) {
    return this.timeConverterService.getVideoLength(seconds);
  }
}
