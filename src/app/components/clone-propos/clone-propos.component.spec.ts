import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneProposComponent } from './clone-propos.component';

describe('CloneProposComponent', () => {
  let component: CloneProposComponent;
  let fixture: ComponentFixture<CloneProposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneProposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
