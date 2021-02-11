import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-archive',
  templateUrl: './home-archive.component.html',
  styleUrls: ['./home-archive.component.css']
})
export class HomeArchiveComponent implements OnInit {

  archives = [
    {
      year: 2017,
      month: 1,
    },
    {
      year: 2017,
      month: 2,
    },
    {
      year: 2017,
      month: 3,
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
