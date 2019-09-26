import {Component, OnInit} from '@angular/core';
import {RandomNumberService} from '../services/random-number.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {

  observable$: BehaviorSubject<any>;

  addToNumber: number;

  constructor(public randomNumberService: RandomNumberService) {
  }

  subscribeToNumber() {
    this.observable$ = this.randomNumberService.getBehaviorSubject();
  }

  ngOnInit(): void {
    this.subscribeToNumber();
  }

  addToObservable(val: number) {
    this.observable$.next(val);
  }
}
