import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {RandomNumberService} from './services/random-number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  observable$: Observable<any>;

  constructor(private breakpointObserver: BreakpointObserver, public randomNumberService: RandomNumberService) {
  }

  subscribeToNumber() {
    this.observable$ = this.randomNumberService.getRandomNumber$();
  }

  ngOnInit(): void {
    this.subscribeToNumber();
  }

}
