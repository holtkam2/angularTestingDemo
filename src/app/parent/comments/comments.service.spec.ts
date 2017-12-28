import { TestBed, inject } from '@angular/core/testing';
import {HttpModule} from "@angular/http";
import { CommentsService } from './comments.service';

describe('CommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [CommentsService]
    });
  });

  it('should ...', inject([CommentsService], (service: CommentsService) => {
    expect(service).toBeTruthy();
  }));
});
