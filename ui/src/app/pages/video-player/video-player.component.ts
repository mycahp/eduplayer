import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FeedItem } from 'src/app/core/models/feed-item';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/core/models/video';
import { VideoService } from 'src/app/shared/services/video.service';
import videojs from 'video.js';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private videoService: VideoService) { }

  @ViewChild('target', {static: true}) target: ElementRef;

  public courseId: string;
  public video: Video;
  public currentTime: number;
  public videoJSPlayer: any;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.courseId = params.get('courseId');
    });

    this.getVideo();
  }


  getVideo(): void {
    this.videoService.getVideoInfo(this.route.snapshot.paramMap.get('videoId')).subscribe((video: Video) => {
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

  getFeedItems(): FeedItem[] {
    return [{
      author: 'Professor Johnson',
      date: 'Jun. 24, 2020',
      content: 'Please view the article I mentioned here.',
      displayTime: 32,
      video: '389024023ulkdflj2',
      course: 'k23k4j239alaskdjw'
    }];
  }
}
