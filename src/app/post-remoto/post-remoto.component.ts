import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from '../shared/models/post.model';

@Component({
  selector: 'app-post-remoto',
  templateUrl: './post-remoto.component.html',
  styleUrls: ['./post-remoto.component.scss']
})
export class PostRemotoComponent implements OnInit {

  @Input()
  post: PostModel = <PostModel>{};

  constructor() { }

  ngOnInit() {
  }

}
