import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  behaviorSubject$ = new BehaviorSubject(3);
  subject$ = new Subject();

  constructor() {
    this.behaviorSubject$.next(4);
    this.behaviorSubject$.next(5);
    this.behaviorSubject$.next(6);
    this.behaviorSubject$.next(7);

    this.subject$.next(1);
    this.subject$.next(2);
  }

  getBehaviorSubject() {
    return this.behaviorSubject$;
  }

  getSubject() {
    return this.subject$;
  }

}
