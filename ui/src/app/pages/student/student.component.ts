import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/course';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCourseList(): Course[] {
    return [{
      id: 'k23k4j239alaskdjw',
      title: 'A Sample Course',
      description: 'A Sample Course examines how to ask for samples in a grocery store',
      professor: 'Mango Kip'
    }]
  }

}
