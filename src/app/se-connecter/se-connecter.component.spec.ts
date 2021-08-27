import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeConnecterComponent } from './se-connecter.component';

describe('SeConnecterComponent', () => {
  let component: SeConnecterComponent;
  let fixture: ComponentFixture<SeConnecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeConnecterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeConnecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
