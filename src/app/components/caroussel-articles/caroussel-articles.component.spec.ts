import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousselArticlesComponent } from './caroussel-articles.component';

describe('CarousselArticlesComponent', () => {
  let component: CarousselArticlesComponent;
  let fixture: ComponentFixture<CarousselArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarousselArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousselArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
