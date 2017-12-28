import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { ParentService } from './services/parent.service';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsService } from './comments/comments.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  let getPostsCalled = false;
  let sortByIdCalled = false;
  let parentService;

  beforeEach(async(() => {

    let mockParentService = {
      getPosts: () => {
        getPostsCalled = true;
        return Observable.of([]);
      },
      sortById: () => {
        sortByIdCalled = true;
        return [];
      }
    };

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
    getPostsCalled = false;
    sortByIdCalled = false;
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([ParentService], (p) => {
    parentService = p;
  }));

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

    spyOn(parentService, 'getPosts').and.returnValue({subscribe: () => {}});
    component.ngOnInit();
    expect(parentService.getPosts).toHaveBeenCalled();

    expect(getPostsCalled).toEqual(true);
  });

  it('should call parentService.sortById after posts have been fetched', () => {
    expect(sortByIdCalled).toEqual(true);
  });

});
