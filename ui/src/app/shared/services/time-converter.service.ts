import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeConverterService {

  constructor() { }

  getVideoLength(videoLength: number): string {
    const minutes: number = Math.floor(videoLength / 60);
    const seconds = videoLength - (minutes * 60);

    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  }
}
