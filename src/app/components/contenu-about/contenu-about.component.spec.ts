import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuAboutComponent } from './contenu-about.component';

describe('ContenuAboutComponent', () => {
  let component: ContenuAboutComponent;
  let fixture: ComponentFixture<ContenuAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenuAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenuAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
