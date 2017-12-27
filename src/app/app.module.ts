import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ParentService } from './parent/services/parent.service';
import { PostsComponent } from "./parent/posts/posts.component";
import { CommentsComponent } from "./parent/comments/comments.component";
import { CommentsService } from "./parent/comments/comments.service";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    PostsComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ParentService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
