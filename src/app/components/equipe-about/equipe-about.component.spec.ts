import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeAboutComponent } from './equipe-about.component';

describe('EquipeAboutComponent', () => {
  let component: EquipeAboutComponent;
  let fixture: ComponentFixture<EquipeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
