import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[] = new Array<Post>();
  // posts2: Array<Post>;

  constructor() {
  }

  ngOnInit() {
    this.posts.push({title: 'Teste 1', data: new Date(2017, 1, 22)});
    this.posts.push({title: 'Teste 2', data: new Date(2017, 1, 22)});
    this.posts.push({title: 'Teste 3', data: new Date(2017, 1, 22)});
    this.posts.push({title: 'Teste 4', data: new Date(2017, 1, 22)});
    this.posts.push({title: 'Teste 5', data: new Date(2017, 1, 22)});
    this.posts.push({title: 'Teste 6', data: new Date(2017, 1, 22)});
    this.posts.push({title: 'Teste 7', data: new Date(2017, 1, 22)});
  }

  addPost(title: string, data: string) {
    this.posts.push({title: title, data: new Date(data)});
  }

}
