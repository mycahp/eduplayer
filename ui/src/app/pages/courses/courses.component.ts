import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/course';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }
}