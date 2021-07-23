import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionArticleComponent } from './section-article.component';

describe('SectionArticleComponent', () => {
  let component: SectionArticleComponent;
  let fixture: ComponentFixture<SectionArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
