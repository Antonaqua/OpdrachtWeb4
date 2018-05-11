import { TestBed, inject } from '@angular/core/testing';

import { DeckDataService } from './deck-data.service';

describe('DeckDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeckDataService]
    });
  });

  it('should be created', inject([DeckDataService], (service: DeckDataService) => {
    expect(service).toBeTruthy();
  }));
});
