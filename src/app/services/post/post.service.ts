import { Injectable } from '@angular/core';
import { ApiClient } from '../axios/axios';
import { Post } from '../../models/Post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  // public posts: Posts[];
  public posts: Post[];

	private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
		  this.posts = [];

  }

  async getPosts(): Promise<Post[]>{
    try {

			const err = await this.apiClient.get<Post[]>({
				url: 'posts',
				// params: {
				// 	limit: 10
				// }
      });
      // .catch(err => {
      //   console.log("error1", err);
      //   return err;
      // });


   if (err instanceof Error) {
        console.log('got error!');
   }
      else {
        this.posts = err;
        console.log('got Data: ', this.posts);
        return this.posts;
      }

		} catch ( error ) {

			console.error('error2: ', error );

		}
  }

  async createPost(post: Post): Promise<Post>{
    try {
      const data: Post = post;
      const response: Post =  await this.apiClient.post<Post>({url: 'posts', body: data});
      return response;
    } catch (error){
      console.error(error);
    }
  }

  async deletePost(post: Post): Promise<Post>{
    try {
      const response: Post = await this.apiClient.delete<Post>({
        url: `posts`,
        id: post.id.toString(),
      });
      console.log('delete response: ', response);
      return response;

    } catch (error) {

    }
  }

}
