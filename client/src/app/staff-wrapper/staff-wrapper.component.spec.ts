import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffWrapperComponent } from './staff-wrapper.component';

describe('StaffWrapperComponent', () => {
  let component: StaffWrapperComponent;
  let fixture: ComponentFixture<StaffWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
