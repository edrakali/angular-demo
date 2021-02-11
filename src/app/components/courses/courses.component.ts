import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses/courses.service';
// import { CoursesService } from "src/app/services/courses.service";
// import { CoursesService } from "@services/courses.service";



@Component({
    selector: 'courses', // <courses /> tag --- jQuery or CSS selector
     // the HTML
     template: `

        <!-- favorite star -->
        <span class="fa fa-star" style="color: #d4d4d4"></span>
        <span class="fa fa-star" [ngStyle]="{'color': clicked ? '#d4d4d4' : '#ffff00' }" (click)="toggleColor()"></span>

        <!-- custom pipe: summary -->

        <p> {{text | summary:3}}</p>

        <!-- using pipes -->
        <ul>
            <li>{{ course.title | uppercase | lowercase | titlecase }}</li> <!-- the rightmost will take effect, this is just to demostrate -->
            <li>{{ course.students | number }}</li>
            <li>{{ course.rating | number:'3.2-2' }}</li> <!-- 3 digit before decimal, 2minimum digits after decimal points, 2 digits max -->
            <li>{{ course.price | currency:'BHD':true:'3.2-2' }}</li> <!-- last argument similar to above line -->
            <li>{{ course.releaseDate | date: 'shortDate' }}</li> <!-- google Angular DatePipe -->
        </ul>

        <!-- two-way binding -->
        <input [(ngModel)]="personName" (keyup)="printName()"/>

        <!-- #email is called template variable -->
        <input #email (keyup.enter)="onKeyUp($event)" (keyup.enter)="onKeyUp2(email.value)" />

        <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Some button</button>
        <h2>{{ "Title: " + getTitle() }}</h2>
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>

        </ul>
     `,
})
export class CoursesComponent {

    clicked = false;

    text = 'lorem ipsum dolor tes';
    course = {
        title: 'The complete Angular Course',
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1),
    };


    public personName = 'Ali';

    isActive = false;
    title = 'List of courses';
    imageUrl = 'https://loremflickr.com/cache/resized/65535_50559238333_4318e6692b_320_240_nofilter.jpg';
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    toggleColor(){
        this.clicked = ! this.clicked;
        console.log('toggling Color');
    }

    printName(){
        console.log(this.personName);
    }

    getTitle(){
        return this.title;
    }

    onKeyUp($event){
        console.log('enter pressed');
        console.log('text entered: ' + $event.target.value);
    }

    // using template variable
    onKeyUp2(text: string){
        console.log('text2 entered: ' + text);
    }

    onSave($event){
        // $event.stopPopagation();
        // $event.preventDefaults();
        console.log($event);
        console.log('clicked');
    }
}
