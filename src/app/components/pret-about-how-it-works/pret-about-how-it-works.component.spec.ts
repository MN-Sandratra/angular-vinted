import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretAboutHowItWorksComponent } from './pret-about-how-it-works.component';

describe('PretAboutHowItWorksComponent', () => {
  let component: PretAboutHowItWorksComponent;
  let fixture: ComponentFixture<PretAboutHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretAboutHowItWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PretAboutHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
