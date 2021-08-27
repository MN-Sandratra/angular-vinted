import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheterAboutHowItWorksComponent } from './acheter-about-how-it-works.component';

describe('AcheterAboutHowItWorksComponent', () => {
  let component: AcheterAboutHowItWorksComponent;
  let fixture: ComponentFixture<AcheterAboutHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcheterAboutHowItWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheterAboutHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
