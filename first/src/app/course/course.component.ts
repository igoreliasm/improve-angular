import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public arr: Array <any>

  constructor(public serviceS: CourseService) {
    this.arr = this.serviceS.getArr()
   }

  ngOnInit() {
  }

}
