import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.css']
})
export class TitleInputComponent implements OnInit {

  text: string;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    console.log('text: ', this.titleCase(this.text));
    // this.text = this.titleCase(this.text);
  }

  titleCase(inputString: string) {
    const sentence = inputString.toLowerCase().split(' ');
    for (let i = 0; i < sentence.length; i++){
      if (sentence[i] != 'the' && sentence[i] != 'of' && sentence[i][0] != undefined) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
    }
    return sentence.join(' ');
 }

}
