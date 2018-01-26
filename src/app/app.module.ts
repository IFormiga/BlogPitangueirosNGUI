import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello/hello-world.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { NumericUpDownComponent } from './numeric-up-down/numeric-up-down.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ImportarBibliotecasComponent } from './importar-bibliotecas/importar-bibliotecas.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule} from '@angular/material';
import { PostListRemotoComponent } from './post-list-remoto/post-list-remoto.component';
import { PostService } from './post.service';
import { PostRemotoComponent } from './post-remoto/post-remoto.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    PostListComponent,
    PostComponent,
    NumericUpDownComponent,
    BindingsComponent,
    ImportarBibliotecasComponent,
    PostListRemotoComponent,
    PostRemotoComponent,
    DiretivasEstruturaisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
