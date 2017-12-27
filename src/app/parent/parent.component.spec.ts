import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { ParentService } from "./services/parent.service";
import { CommentsComponent } from "./comments/comments.component";
import { PostsComponent } from "./posts/posts.component";
import { CommentsService } from "./comments/comments.service";
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

fdescribe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {

    let mockParentService = {
      getPosts: function (companyId) {
        return Observable.of([]);
      },
      sortById(){
        return [];
      }
    }

    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [
        ParentComponent,
        CommentsComponent,
        PostsComponent
      ],
      providers: [
        { provide: ParentService, useValue: mockParentService },
        CommentsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to set an active post', () => {

    const dummyPost = {
      body: 'body',
      id: 123,
      userId: 2,
      title: 'title'
    }

    component.setActivePost(dummyPost);
    expect(component.activePost).toEqual(dummyPost);
  });

  it('should call parentService.getPosts when initialized', () => {

  });
});
