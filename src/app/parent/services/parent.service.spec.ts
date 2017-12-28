import { TestBed, inject } from '@angular/core/testing';
import {HttpModule} from "@angular/http";
import { ParentService } from './parent.service';

describe('ParentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [ParentService]
    });
  });

  it('should ...', inject([ParentService], (service: ParentService) => {
    expect(service).toBeTruthy();
  }));
});
