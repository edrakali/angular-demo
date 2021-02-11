import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  courses: string[] = ['course1', 'course2', 'course3'];

  constructor() { }

  ngOnInit(): void {
  }

  remove(course: string){
    const index: number = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  add(){
    const id: number = this.courses.length + 1;
    this.courses.push(`course${id}`);
  }

}
