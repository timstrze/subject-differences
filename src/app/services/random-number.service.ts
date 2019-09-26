import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  behaviorSubject$ = new BehaviorSubject(3);

  constructor() {
    this.behaviorSubject$.next(4);
    this.behaviorSubject$.next(5);
    this.behaviorSubject$.next(6);
    this.behaviorSubject$.next(7);
  }

  getBehaviorSubject() {
    return this.behaviorSubject$;
  }

}
