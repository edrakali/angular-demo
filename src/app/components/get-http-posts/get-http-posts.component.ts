import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'get-http-posts',
  templateUrl: './get-http-posts.component.html',
  styleUrls: ['./get-http-posts.component.css']
})
export class GetHttpPostsComponent implements OnInit {

  form: FormGroup = new FormGroup({
    newPost: new FormControl('', Validators.required),
  });
  posts: Post[];
  focus = false;

  get newPost(){
    return this.form.get('newPost');
  }

  constructor(private postService: PostService) {
   }

  async ngOnInit(): Promise<void> {
    this.posts = await this.postService.getPosts();

  }

  async createPost(){
    console.log('attempting to create a post');
    if (this.newPost.valid){
      console.log('VALID');
      const data = {title: this.newPost.value, body: 'someo body text', userId: 33} as Post;
      const response = await this.postService.createPost(this.newPost.value);
      console.log('Response: ', response);
    } else {
      console.log('INVLAID');
    }
  }

}
