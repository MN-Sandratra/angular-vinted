import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemContentComponent } from './new-item-content.component';

describe('NewItemContentComponent', () => {
  let component: NewItemContentComponent;
  let fixture: ComponentFixture<NewItemContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewItemContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
