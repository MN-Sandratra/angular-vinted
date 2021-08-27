import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToprightApplicationAboutItComponent } from './topright-application-about-it.component';

describe('ToprightApplicationAboutItComponent', () => {
  let component: ToprightApplicationAboutItComponent;
  let fixture: ComponentFixture<ToprightApplicationAboutItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToprightApplicationAboutItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToprightApplicationAboutItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
