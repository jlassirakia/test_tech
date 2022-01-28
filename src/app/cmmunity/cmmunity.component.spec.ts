import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmunityComponent } from './cmmunity.component';

describe('CmmunityComponent', () => {
  let component: CmmunityComponent;
  let fixture: ComponentFixture<CmmunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmmunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmmunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
