import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/core/models/lesson';
import { ActivatedRoute } from '@angular/router';
import { TimeConverterService } from 'src/app/shared/services/time-converter.service';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { Course } from 'src/app/core/models/course';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private timeConverterService: TimeConverterService, private courseService: CoursesService) { }

  public courseId: string;
  public lessons: any;

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.getLessonList();
  }

  public getLessonList() {
    this.courseService.getCourse(this.courseId).subscribe((result: Course) => {
      this.lessons = result.lessons;
    })
  }

  getVideoLength(seconds: number) {
    return this.timeConverterService.getVideoLength(seconds);
  }
}
