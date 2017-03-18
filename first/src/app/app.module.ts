import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { First } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CourseModule } from './course/course.module';
import { CourseService } from './course/course.service';


@NgModule({
  declarations: [
    AppComponent,
    First,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CourseModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
