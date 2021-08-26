import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBottomAboutComponent } from './logo-bottom-about.component';

describe('LogoBottomAboutComponent', () => {
  let component: LogoBottomAboutComponent;
  let fixture: ComponentFixture<LogoBottomAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoBottomAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoBottomAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
