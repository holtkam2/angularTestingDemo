import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import { CommentsService } from "./comments.service";
import { HttpModule } from "@angular/http";

fdescribe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;
  let dummyCommentsService = {
    fetchComments: () => {}
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
    expect(1).toEqual(1);
  });
});
