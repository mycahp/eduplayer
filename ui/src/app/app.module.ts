import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { StudentComponent } from './pages/student/student.component';
import { TeachingStaffComponent } from './pages/teaching-staff/teaching-staff.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ClassCardComponent } from './shared/components/class-card/class-card.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InformationalCardComponent } from './shared/components/informational-card/informational-card.component';
import { LessonListComponent } from './pages/lesson-list/lesson-list.component';
import { VideoPlayerComponent } from './shared/components/video-player/video-player.component';
import { FeedItemComponent } from './shared/components/video-player/components/feed-item/feed-item.component';
import { InputFieldComponent } from './shared/components/video-player/components/input-field/input-field.component';
import { FollowUpsComponent } from './pages/follow-ups/follow-ups/follow-ups.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    TeachingStaffComponent,
    HeaderComponent,
    FooterComponent,
    ClassCardComponent,
    InformationalCardComponent,
    LessonListComponent,
    VideoPlayerComponent,
    FeedItemComponent,
    InputFieldComponent,
    FollowUpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
