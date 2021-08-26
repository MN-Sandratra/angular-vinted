import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneContenuProposComponent } from './clone-contenu-propos.component';

describe('CloneContenuProposComponent', () => {
  let component: CloneContenuProposComponent;
  let fixture: ComponentFixture<CloneContenuProposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneContenuProposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneContenuProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
