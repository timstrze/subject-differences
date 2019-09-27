import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject, ReplaySubject, AsyncSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  behaviorSubject$ = new BehaviorSubject(3);
  replaySubject$ = new ReplaySubject(3);
  subject$ = new Subject();
  asyncSubject$ = new AsyncSubject();

  constructor() {
    this.behaviorSubject$.next(4);
    this.behaviorSubject$.next(5);
    this.behaviorSubject$.next(6);
    this.behaviorSubject$.next(7);

    this.replaySubject$.next(4);
    this.replaySubject$.next(5);
    this.replaySubject$.next(6);
    this.replaySubject$.next(7);

    this.subject$.next(1);
    this.subject$.next(2);

    this.asyncSubject$.next(1);
  }

  getBehaviorSubject() {
    return this.behaviorSubject$;
  }

  getSubject() {
    return this.subject$;
  }

  getReplaySubject() {
    return this.replaySubject$;
  }

  AsyncSubject() {
    return this.asyncSubject$;
  }

}
