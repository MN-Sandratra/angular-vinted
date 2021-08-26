import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAboutItComponent } from './application-about-it.component';

describe('ApplicationAboutItComponent', () => {
  let component: ApplicationAboutItComponent;
  let fixture: ComponentFixture<ApplicationAboutItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationAboutItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationAboutItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
