import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomAboutComponent } from './bottom-about.component';

describe('BottomAboutComponent', () => {
  let component: BottomAboutComponent;
  let fixture: ComponentFixture<BottomAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
