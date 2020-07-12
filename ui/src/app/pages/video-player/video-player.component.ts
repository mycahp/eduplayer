import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FeedItem } from 'src/app/core/models/feed-item';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/core/models/video';
import { VideoService } from 'src/app/shared/services/video.service';
import videojs from 'video.js';
import { HttpClient } from '@angular/common/http';
import { FeedItemService } from 'src/app/shared/services/feed-item.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private videoService: VideoService, private http: HttpClient, private feedItemService: FeedItemService) { }

  @ViewChild('target', {static: true}) target: ElementRef;

  public courseId: string;
  public video: Video;
  public currentTime: number;
  public videoJSPlayer: any;
  public videoId: string;
  public feedItems: FeedItem[];

  ngOnInit(): void {
    this.videoId = this.route.snapshot.paramMap.get('videoId');

    this.route.queryParamMap.subscribe(params => {
      this.courseId = params.get('courseId');
    });

    this.getVideo();
    this.getFeedItems();
  }


  getVideo(): void {
    this.videoService.getVideoInfo(this.videoId).subscribe((video: Video) => {
      this.video = video;

      const options = {
        fluid: true,
        autoplay: false,
        sources: [{
          src: video.videoUrl,
          type: 'video/mp4',
        }]
      };

      this.videoJSPlayer = videojs(this.target.nativeElement, options);
    })
  }

  getFeedItems() {
    this.feedItemService.getFeedItems(this.videoId).subscribe((result: FeedItem[]) => {
      this.feedItems = result;
    });
  }

  updatedFeedItems(feedItems) {
    this.feedItems = feedItems;
  }
}
