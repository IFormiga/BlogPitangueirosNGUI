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
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    PostListComponent,
    PostComponent,
    NumericUpDownComponent,
    BindingsComponent,
    ImportarBibliotecasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
