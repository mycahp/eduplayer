import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LessonListComponent } from './pages/lesson-list/lesson-list.component';
import { VideoPlayerComponent } from './shared/components/video-player/video-player.component';
import { FollowUpsComponent } from './pages/follow-ups/follow-ups/follow-ups.component';
import { AuthGuardService } from './shared/services/auth-guard.service';


const routes: Routes = [
  {
    path: 'teaching-staff/follow-ups', component: FollowUpsComponent, canActivate: [AuthGuardService]
  },

  {
    path: 'course/:courseId', component: LessonListComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'video/:videoId', component: VideoPlayerComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', component: HomeComponent, canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
