import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockQuoteService {

  constructor(private httpClient: HttpClient) {
  }

  getStockQuote(): Observable<any> {
    return this.httpClient.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval' +
      '=1min&apikey=20HJV3J5Z9A0Y136&fmt=json');
  }
}
