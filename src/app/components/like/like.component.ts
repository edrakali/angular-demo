import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('likeCount') likeCount;
  @Input('liked') liked;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLike(){
    console.log('like!');
    if (this.liked) {
      this.liked = false;
      this.likeCount -= 1;
    } else {
      this.liked = true;
      this.likeCount += 1;
    }
  }

}
