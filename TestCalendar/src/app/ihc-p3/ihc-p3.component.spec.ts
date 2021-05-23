import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhcP3Component } from './ihc-p3.component';

describe('IhcP3Component', () => {
  let component: IhcP3Component;
  let fixture: ComponentFixture<IhcP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IhcP3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IhcP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
