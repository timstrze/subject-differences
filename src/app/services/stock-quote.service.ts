import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockQuoteService {

  apiKey = '20HJV3J5Z9A0Y136';
  symbol = 'MSFT';

  constructor(private httpClient: HttpClient) {
  }

  testMe() {
    return 'test';
  }

  getStockQuote() {
    this.httpClient.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=20HJV3J5Z9A0Y136&fmt=json').subscribe((res) => {
      console.log(res);
    });
  }
}
