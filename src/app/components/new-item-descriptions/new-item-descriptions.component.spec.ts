import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemDescriptionsComponent } from './new-item-descriptions.component';

describe('NewItemDescriptionsComponent', () => {
  let component: NewItemDescriptionsComponent;
  let fixture: ComponentFixture<NewItemDescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewItemDescriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
