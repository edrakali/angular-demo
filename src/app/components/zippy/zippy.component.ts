import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('title') title: string;
  expanded = false;

  toggle(){
    this.expanded = ! this.expanded;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
