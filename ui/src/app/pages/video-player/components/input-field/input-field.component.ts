import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from 'src/app/shared/services/api-config.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() videoId: string;
  @Input() courseId: string;
  @Input() currentTime: number;

  public content: string;

  constructor(private http: HttpClient, private apiConfig: ApiConfigService, private user: UserService) { }

  ngOnInit(): void {
  }

  submitItem() {
    this.http.post(`${this.apiConfig.apiURL}/feed-items/video/${this.videoId}`, {
      author: this.user.currentUser.userId,
      content: this.content,
      video: this.videoId,
      course: this.courseId,
      currentVideoTime: this.currentTime
    }).subscribe((response) => {
      console.log(response);
    });
  }

}
