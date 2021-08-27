import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAboutHowItWorksComponent } from './footer-about-how-it-works.component';

describe('FooterAboutHowItWorksComponent', () => {
  let component: FooterAboutHowItWorksComponent;
  let fixture: ComponentFixture<FooterAboutHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAboutHowItWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAboutHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
