import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMessagesContentComponent } from './new-messages-content.component';

describe('NewMessagesContentComponent', () => {
  let component: NewMessagesContentComponent;
  let fixture: ComponentFixture<NewMessagesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMessagesContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMessagesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
