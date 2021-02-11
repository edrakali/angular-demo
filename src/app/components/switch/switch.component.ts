import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  viewMode = 'map';

  constructor() { }

  ngOnInit(): void {
  }

}
