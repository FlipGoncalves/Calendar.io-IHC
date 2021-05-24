import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestarSigninComponent } from './testar-signin.component';

describe('TestarSigninComponent', () => {
  let component: TestarSigninComponent;
  let fixture: ComponentFixture<TestarSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestarSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestarSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
