import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPrecingComponent } from './our-precing.component';

describe('OurPrecingComponent', () => {
  let component: OurPrecingComponent;
  let fixture: ComponentFixture<OurPrecingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurPrecingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPrecingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
