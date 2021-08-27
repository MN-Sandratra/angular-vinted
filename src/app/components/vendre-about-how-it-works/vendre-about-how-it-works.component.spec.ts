import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendreAboutHowItWorksComponent } from './vendre-about-how-it-works.component';

describe('VendreAboutHowItWorksComponent', () => {
  let component: VendreAboutHowItWorksComponent;
  let fixture: ComponentFixture<VendreAboutHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendreAboutHowItWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendreAboutHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
