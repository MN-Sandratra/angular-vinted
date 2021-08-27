import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAboutHowItWorksComponent } from './top-about-how-it-works.component';

describe('TopAboutHowItWorksComponent', () => {
  let component: TopAboutHowItWorksComponent;
  let fixture: ComponentFixture<TopAboutHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAboutHowItWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAboutHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
