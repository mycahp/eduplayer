import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../core/models/course';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss']
})
export class ClassCardComponent implements OnInit {

  @Input() course: Course;

  constructor() { }

  ngOnInit(): void {
  }

  getCourseLink() {
    return `/course/${this.course._id}`;
  }
}
