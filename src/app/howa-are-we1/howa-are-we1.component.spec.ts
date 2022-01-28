import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowaAreWe1Component } from './howa-are-we1.component';

describe('HowaAreWe1Component', () => {
  let component: HowaAreWe1Component;
  let fixture: ComponentFixture<HowaAreWe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowaAreWe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowaAreWe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
