import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventday15maioComponent } from './eventday15maio.component';

describe('Eventday15maioComponent', () => {
  let component: Eventday15maioComponent;
  let fixture: ComponentFixture<Eventday15maioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eventday15maioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventday15maioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
