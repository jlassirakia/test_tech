import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowAreWe2Component } from './how-are-we2.component';

describe('HowAreWe2Component', () => {
  let component: HowAreWe2Component;
  let fixture: ComponentFixture<HowAreWe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowAreWe2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowAreWe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
