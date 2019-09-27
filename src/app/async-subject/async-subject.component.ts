import {Component, OnInit} from '@angular/core';
import {AsyncSubject} from 'rxjs';
import {RandomNumberService} from '../services/random-number.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  observable$: AsyncSubject<any>;

  addToNumber: number;

  constructor(public randomNumberService: RandomNumberService) {
  }

  subscribeToNumber() {
    this.observable$ = this.randomNumberService.AsyncSubject();
  }

  ngOnInit(): void {
    this.subscribeToNumber();
  }

  addToObservable(val: number) {
    this.observable$.next(val);
  }

  completeObservable() {
    this.observable$.complete();
  }
}
