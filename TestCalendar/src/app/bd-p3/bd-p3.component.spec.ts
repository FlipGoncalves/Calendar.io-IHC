import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdP3Component } from './bd-p3.component';

describe('BdP3Component', () => {
  let component: BdP3Component;
  let fixture: ComponentFixture<BdP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdP3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
