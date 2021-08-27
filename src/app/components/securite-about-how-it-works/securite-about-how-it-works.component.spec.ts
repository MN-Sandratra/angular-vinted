import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuriteAboutHowItWorksComponent } from './securite-about-how-it-works.component';

describe('SecuriteAboutHowItWorksComponent', () => {
  let component: SecuriteAboutHowItWorksComponent;
  let fixture: ComponentFixture<SecuriteAboutHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuriteAboutHowItWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuriteAboutHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
