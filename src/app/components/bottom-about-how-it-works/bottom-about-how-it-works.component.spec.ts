import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomAboutHowItWorksComponent } from './bottom-about-how-it-works.component';

describe('BottomAboutHowItWorksComponent', () => {
  let component: BottomAboutHowItWorksComponent;
  let fixture: ComponentFixture<BottomAboutHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomAboutHowItWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomAboutHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
