import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimisComponent } from './elimis.component';

describe('ElimisComponent', () => {
  let component: ElimisComponent;
  let fixture: ComponentFixture<ElimisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
