import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemAddPhotosComponent } from './new-item-add-photos.component';

describe('NewItemAddPhotosComponent', () => {
  let component: NewItemAddPhotosComponent;
  let fixture: ComponentFixture<NewItemAddPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewItemAddPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemAddPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
