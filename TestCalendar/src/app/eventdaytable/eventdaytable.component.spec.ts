import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdaytableComponent } from './eventdaytable.component';

describe('EventdaytableComponent', () => {
  let component: EventdaytableComponent;
  let fixture: ComponentFixture<EventdaytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventdaytableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdaytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
