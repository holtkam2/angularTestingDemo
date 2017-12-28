import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import { CommentsService } from "./comments.service";
import { HttpModule } from "@angular/http";
import { Observable } from "rxjs/Observable";

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;
  const dummyComments = [
    {postId: 1, id: 1, name: 'this is a comment', email: 'email1', body: '123'},
    {postId: 2, id: 2, name: 'another comment', email: 'email2', body: '456'}
  ];

  let dummyCommentsService = {
    fetchComments: () => {
      return Observable.of(dummyComments);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ CommentsComponent ],
      providers: [{provide: CommentsService, useValue: dummyCommentsService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates comments prop when a new activePost is selected', () => {
    component.activePost = {body: '', title:'', id: 1, userId: 1};
    component.ngOnChanges();
    expect(component.comments).toEqual(dummyComments);
  });
});
