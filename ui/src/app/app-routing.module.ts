import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachingStaffComponent } from './pages/teaching-staff/teaching-staff.component';
import { StudentComponent } from './pages/student/student.component';
import { LoginComponent } from './pages/login/login.component';
import { LessonListComponent } from './pages/lesson-list/lesson-list.component';
import { VideoPlayerComponent } from './shared/components/video-player/video-player.component';
import { FollowUpsComponent } from './pages/follow-ups/follow-ups/follow-ups.component';


const routes: Routes = [
  {
    path: 'teaching-staff', component: TeachingStaffComponent
  },
  {
    path: 'teaching-staff/follow-ups', component: FollowUpsComponent
  },
  {
    path: 'student', component: StudentComponent
  },
  {
    path: 'student/lessons', component: LessonListComponent
  },
  {
    path: 'student/video', component: VideoPlayerComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
