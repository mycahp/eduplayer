import { TestBed } from '@angular/core/testing';

import { FeedItemService } from './feed-item.service';

describe('FeedItemService', () => {
  let service: FeedItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
