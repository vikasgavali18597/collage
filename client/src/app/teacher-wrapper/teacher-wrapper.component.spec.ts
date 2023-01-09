import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherWrapperComponent } from './teacher-wrapper.component';

describe('TeacherWrapperComponent', () => {
  let component: TeacherWrapperComponent;
  let fixture: ComponentFixture<TeacherWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
