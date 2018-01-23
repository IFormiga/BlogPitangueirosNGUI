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

  minVal = 0;
  maxVal = 10;

  constructor() {
  }

  ngOnInit() {
    this.posts.push(<Post>{ title: 'Teste 1', data: new Date(2017, 1, 22), qtdLikes: 0 });
    this.posts.push(<Post>{ title: 'Teste 2', data: new Date(2017, 1, 22), qtdLikes: 0 });
    this.posts.push(<Post>{ title: 'Teste 3', data: new Date(2017, 1, 22), qtdLikes: 0 });
    this.posts.push(<Post>{ title: 'Teste 4', data: new Date(2017, 1, 22), qtdLikes: 0 });
    this.posts.push(<Post>{ title: 'Teste 5', data: new Date(2017, 1, 22), qtdLikes: 0 });
    this.posts.push(<Post>{ title: 'Teste 6', data: new Date(2017, 1, 22), qtdLikes: 0 });
    this.posts.push(<Post>{ title: 'Teste 7', data: new Date(2017, 1, 22), qtdLikes: 0 });
  }

  addPost(title: string, data: string) {
    this.posts.push(<Post>{ title: title, data: new Date(data), qtdLikes: 0 });
  }

  like(post: Post, evt: Event) {
    console.log(evt);
    post.qtdLikes++;
  }
  dislike(post: Post, evt: Event) {
    console.log(evt);
    post.qtdLikes--;
  }
  ratingChange(eventArg: any) {
    console.log('Evento change chamado! ', eventArg);
  }
}
