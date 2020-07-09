import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { LoginComponent } from './pages/login/login.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { VideoPlayerComponent } from './shared/components/video-player/video-player.component';
import { FollowUpsComponent } from './pages/follow-ups/follow-ups/follow-ups.component';
import { AuthGuardService } from './shared/services/auth-guard.service';


const routes: Routes = [
  {
    path: 'teaching-staff/follow-ups', component: FollowUpsComponent, canActivate: [AuthGuardService]
  },

  {
    path: 'course/:courseId', component: LessonsComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'video/:videoId', component: VideoPlayerComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', component: CoursesComponent, canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
