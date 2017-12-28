import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {ParentComponent} from "./parent/parent.component";
import {CommentsComponent} from "./parent/comments/comments.component";
import {PostsComponent} from "./parent/posts/posts.component";
import {ParentService} from "./parent/services/parent.service";
import {CommentsService} from "./parent/comments/comments.service";
import {HttpModule} from "@angular/http";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        ParentService,
        CommentsService
      ],
      declarations: [
        AppComponent,
        ParentComponent,
        CommentsComponent,
        PostsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));
});
