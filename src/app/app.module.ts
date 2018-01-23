import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello/hello-world.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { NumericUpDownComponent } from './numeric-up-down/numeric-up-down.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    PostListComponent,
    PostComponent,
    NumericUpDownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
