import { Component, OnInit } from '@angular/core';
import { FeedItem } from 'src/app/core/models/feed-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public courseId: string;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.courseId = params.get('courseId');
    });
  }

  getFeedItems(): FeedItem[] {
    return [{
      author: 'Professor Johnson',
      date: 'Jun. 24, 2020',
      content: 'Please view the article I mentioned here.',
      displayTime: 32,
      videoId: '389024023ulkdflj2',
      courseId: 'k23k4j239alaskdjw'
    }];
  }
}
