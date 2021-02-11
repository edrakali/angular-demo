import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  loading = false;

  courseCategories = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f){
    this.loading = true;
    console.log('submitted: ', f);
  }

}
