import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {RandomNumberService} from '../services/random-number.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  observable$: Subject<any>;

  addToNumber: number;

  constructor(public randomNumberService: RandomNumberService) {
  }

  subscribeToNumber() {
    this.observable$ = this.randomNumberService.getSubject();
  }

  ngOnInit(): void {
    this.subscribeToNumber();
  }

  addToObservable(val: number) {
    this.observable$.next(val);
  }
}
