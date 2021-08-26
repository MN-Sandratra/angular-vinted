import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneBottomProposComponent } from './clone-bottom-propos.component';

describe('CloneBottomProposComponent', () => {
  let component: CloneBottomProposComponent;
  let fixture: ComponentFixture<CloneBottomProposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneBottomProposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneBottomProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
