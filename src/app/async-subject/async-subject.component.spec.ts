import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSubjectComponent } from './async-subject.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('AsyncSubjectComponent', () => {
  let component: AsyncSubjectComponent;
  let fixture: ComponentFixture<AsyncSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncSubjectComponent ],
      imports: [
        NoopAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addToObservable', () => {
    it('should call the observable with the value passed in', () => {
      spyOn(component.observable$, 'next');
      component.addToObservable(6);
      expect(component.observable$.next).toHaveBeenCalled();
      expect(component.observable$.next).toHaveBeenCalledWith(6);
    });
  });

  describe('completeObservable', () => {
    it('should complete the observable', () => {
      spyOn(component.observable$, 'complete');
      component.completeObservable();
      expect(component.observable$.complete).toHaveBeenCalled();
    });
  });
});
