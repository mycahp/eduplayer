import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ClassCardComponent } from './shared/components/class-card/class-card.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InformationalCardComponent } from './shared/components/informational-card/informational-card.component';
import { FollowUpsComponent } from './pages/follow-ups/follow-ups/follow-ups.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfigService } from './shared/services/api-config.service';
import { UserService } from './shared/services/user.service';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';
import { FeedItemComponent } from './pages/video-player/components/feed-item/feed-item.component';
import { InputFieldComponent } from './pages/video-player/components/input-field/input-field.component';

export function initAPIandUser(apiConfigService: ApiConfigService, userService: UserService){
    return async () => {
      await apiConfigService.getAPIUrl();
      userService.findUserInfo();
    }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoursesComponent,
    HeaderComponent,
    FooterComponent,
    ClassCardComponent,
    InformationalCardComponent,
    LessonsComponent,
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
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    'provide': APP_INITIALIZER,
    'useFactory': initAPIandUser,
    'deps': [ApiConfigService, UserService],
    'multi': true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
