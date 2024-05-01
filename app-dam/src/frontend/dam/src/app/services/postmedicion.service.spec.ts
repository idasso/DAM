import { TestBed } from '@angular/core/testing';

import { PostmedicionService } from './postmedicion.service';

describe('PostmedicionService', () => {
  let service: PostmedicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostmedicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
