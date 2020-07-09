import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient, private apiConfig: ApiConfigService) { }

  getCourse(courseId: String): Observable<Object> {
    return this.http.get(`${this.apiConfig.apiURL}/courses/${courseId}`);
  }
}
