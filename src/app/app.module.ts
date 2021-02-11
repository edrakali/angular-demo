import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesService } from './services/courses/courses.service';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsService } from './services/authors/authors.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './pipes/summary.pipe';
import { TitleInputComponent } from './components/title-input/title-input.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { BootstrapPanelComponent } from './components/bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './components/like/like.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ForComponent } from './components/for/for.component';
import { InputDirectiveDirective } from './directives/input-directive.directive';
import { DirectiveInputTestComponent } from './components/directive-input-test/directive-input-test.component';
import { ZippyComponent } from './components/zippy/zippy.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { ChangePwComponent } from './components/change-pw/change-pw.component';
import { GetHttpPostsComponent } from './components/get-http-posts/get-http-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post/post.service';
import { FollowersComponent } from './components/followers/followers.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/app.routes';
import { HomeArchiveComponent } from './components/home-archive/home-archive.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    SummaryPipe,
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    TitleInputComponent,
    TitleCasePipe,
    FavoriteComponent,
    BootstrapPanelComponent,
    LikeComponent,
    SwitchComponent,
    ForComponent,
    InputDirectiveDirective,
    DirectiveInputTestComponent,
    ZippyComponent,
    CourseFormComponent,
    SignupFormComponent,
    FormArrayComponent,
    ChangePwComponent,
    GetHttpPostsComponent,
    FollowersComponent,
    HomeArchiveComponent,
    ArchiveComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],

  // add all course services here
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
