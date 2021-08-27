import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHowItWorksComponent } from './about-how-it-works.component';

describe('AboutHowItWorksComponent', () => {
  let component: AboutHowItWorksComponent;
  let fixture: ComponentFixture<AboutHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHowItWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
