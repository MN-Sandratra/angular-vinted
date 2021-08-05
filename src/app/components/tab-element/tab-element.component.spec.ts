import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabElementComponent } from './tab-element.component';

describe('TabElementComponent', () => {
  let component: TabElementComponent;
  let fixture: ComponentFixture<TabElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
