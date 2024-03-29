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

  @ViewChild('target', { static: true }) target: ElementRef;

  public courseId: string;
  public video: Video;
  public currentTime: number = 0;
  public videoJSPlayer: any;
  public videoId: string;
  public feedItems: FeedItem[];

  public annotationPlugin: any;

  ngOnInit(): void {
    this.videoId = this.route.snapshot.paramMap.get('videoId');

    this.route.queryParamMap.subscribe(params => {
      this.courseId = params.get('courseId');

      if (params.get('time')) {
        this.currentTime = params.get('time') as any;
      }
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
      this.videoJSPlayer.currentTime(this.currentTime);
    });
  }

  getFeedItems() {
    this.feedItemService.getFeedItemsByVideoId(this.videoId).subscribe((result: FeedItem[]) => {
      this.feedItems = result;
    });
  }

  updatedFeedItems(feedItems) {
    this.feedItems = feedItems;
  }
}
