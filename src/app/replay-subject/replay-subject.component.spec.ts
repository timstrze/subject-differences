import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubjectComponent } from './replay-subject.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

describe('ReplaySubjectComponent', () => {
  let component: ReplaySubjectComponent;
  let fixture: ComponentFixture<ReplaySubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaySubjectComponent ],
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
    fixture = TestBed.createComponent(ReplaySubjectComponent);
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
});
