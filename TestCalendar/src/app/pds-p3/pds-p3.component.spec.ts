import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdsP3Component } from './pds-p3.component';

describe('PdsP3Component', () => {
  let component: PdsP3Component;
  let fixture: ComponentFixture<PdsP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdsP3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdsP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
