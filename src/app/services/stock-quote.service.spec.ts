import { TestBed } from '@angular/core/testing';

import { StockQuoteService } from './stock-quote.service';

describe('StockQuoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockQuoteService = TestBed.get(StockQuoteService);
    expect(service).toBeTruthy();
  });
});
