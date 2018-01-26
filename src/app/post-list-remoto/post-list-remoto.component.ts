import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from '../shared/models/post.model';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post-list-remoto',
  templateUrl: './post-list-remoto.component.html',
  styleUrls: ['./post-list-remoto.component.scss']
})
export class PostListRemotoComponent implements OnInit {

  posts: PostModel[];

  postsCarregando = false;

  @ViewChild('titulo')
  titulo: ElementRef;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postsCarregando = true;
    this.postService.consultarPosts()
      .finally(() => {
        this.postsCarregando = false;
      })
      .delay(3000)
      .subscribe((postsResult) => {
        this.posts = postsResult;
      });

      // Não é recomendado modificar as propriedades nativas diretamente
      this.titulo.nativeElement.style.backgroundColor = 'red';
      console.log(this.titulo);
  }

}
