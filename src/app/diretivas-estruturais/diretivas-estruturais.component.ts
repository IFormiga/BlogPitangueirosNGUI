import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from '../shared/models/post.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  show = false;
  posts: PostModel[] = new Array<PostModel>();

  postsObservable: Observable<PostModel[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.consultarPosts()
      .subscribe((postsResult) => {
        this.posts = postsResult;
      });

    this.postsObservable = this.postService.consultarPosts();
  }

}
