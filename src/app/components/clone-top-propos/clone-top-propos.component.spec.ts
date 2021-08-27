import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneTopProposComponent } from './clone-top-propos.component';

describe('CloneTopProposComponent', () => {
  let component: CloneTopProposComponent;
  let fixture: ComponentFixture<CloneTopProposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneTopProposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneTopProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
