import { Component, OnInit } from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {RandomNumberService} from '../services/random-number.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  observable$: ReplaySubject<any>;

  addToNumber: number;

  constructor(public randomNumberService: RandomNumberService) {
  }

  subscribeToNumber() {
    this.observable$ = this.randomNumberService.getReplaySubject();
    this.observable$.subscribe(console.log);
  }

  ngOnInit(): void {
    this.subscribeToNumber();
  }

  addToObservable(val: number) {
    this.observable$.next(val);
  }
}
