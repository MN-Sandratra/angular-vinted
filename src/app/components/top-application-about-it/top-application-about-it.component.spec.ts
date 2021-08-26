import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopApplicationAboutItComponent } from './top-application-about-it.component';

describe('TopApplicationAboutItComponent', () => {
  let component: TopApplicationAboutItComponent;
  let fixture: ComponentFixture<TopApplicationAboutItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopApplicationAboutItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopApplicationAboutItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
