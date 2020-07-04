import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/course';

@Component({
  selector: 'app-teaching-staff',
  templateUrl: './teaching-staff.component.html',
  styleUrls: ['./teaching-staff.component.scss']
})
export class TeachingStaffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCourseList(): Course[] {
    return [{
      id: '29034kljlksdjlaj2',
      title: 'A Sample Course',
      description: 'A Sample Course examines how to ask for samples in a grocery store',
      professor: 'Mango Kip'
    }]
  }

}
