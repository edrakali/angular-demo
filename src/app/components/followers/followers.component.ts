import { Component, OnInit } from '@angular/core';
import { FollowersService } from 'src/app/services/followers/followers.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers = [];
  constructor(private followersService: FollowersService) { }

  async ngOnInit(): Promise<void> {
    this.followers = await this.followersService.getFollowers();
  }

}
