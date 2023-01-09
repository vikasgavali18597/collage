import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWrapperComponent } from './student-wrapper.component';

describe('StudentWrapperComponent', () => {
  let component: StudentWrapperComponent;
  let fixture: ComponentFixture<StudentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
