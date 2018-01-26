import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './shared/models/post.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  consultarPosts(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
