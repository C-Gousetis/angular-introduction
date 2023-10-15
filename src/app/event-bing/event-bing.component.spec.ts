import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBingComponent } from './event-bing.component';

describe('EventBingComponent', () => {
  let component: EventBingComponent;
  let fixture: ComponentFixture<EventBingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EventBingComponent]
    });
    fixture = TestBed.createComponent(EventBingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
