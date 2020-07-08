import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/core/models/lesson';
import { ActivatedRoute } from '@angular/router';
import { TimeConverterService } from 'src/app/shared/services/time-converter.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private timeConverterService: TimeConverterService) { }

  public courseId: string;

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
  }

  public getLessonList(): Lesson[] {
    return [
      {
        name: 'Test Lesson 1',
        description: 'This is a test lesson, please watch all the videos to learn as much as you can!',
        videoList: [
          {
            _id: '389024023ulkdflj2',
            name: 'Video 1',
            description: 'The first video in this lesson',
            length: 181
          }
        ]
      },
      {
        name: 'Test Lesson 2',
        description: 'This is a test lesson, please watch all the videos to learn as much as you can!',
        videoList: [
          {
            _id: '389024023ulkdflj2',
            name: 'Video 1',
            description: 'The first video in this lesson',
            length: 181
          },
          {
            _id: '389024023ulkdflj2',
            name: 'Video 2',
            description: 'The second video in this lesson',
            length: 231
          },
          {
            _id: '389024023ulkdflj2',
            name: 'Video 3',
            description: 'The thrid video in this lesson',
            length: 512
          }
        ]
      },
      {
        name: 'Test Lesson 3',
        description: 'This is a test lesson, please watch all the videos to learn as much as you can!',
        videoList: [
          {
            _id: '389024023ulkdflj2',
            name: 'Video 1',
            description: 'The first video in this lesson',
            length: 181
          }
        ]
      }
    ];
  }

  getVideoLength(seconds: number) {
    return this.timeConverterService.getVideoLength(seconds);
  }
}
