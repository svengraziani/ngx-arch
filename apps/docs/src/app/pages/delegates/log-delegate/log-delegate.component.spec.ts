import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDelegateComponent } from './log-delegate.component';

describe('LogDelegateComponent', () => {
  let component: LogDelegateComponent;
  let fixture: ComponentFixture<LogDelegateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogDelegateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogDelegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
