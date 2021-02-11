// This uses HttpClient Moduel
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) { }

  public getPosts(){
    return this.httpClient.get(this.REST_API_SERVER + 'posts');
  }
}
