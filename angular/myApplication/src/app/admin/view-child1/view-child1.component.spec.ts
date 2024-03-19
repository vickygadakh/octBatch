import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChild1Component } from './view-child1.component';

describe('ViewChild1Component', () => {
  let component: ViewChild1Component;
  let fixture: ComponentFixture<ViewChild1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChild1Component]
    });
    fixture = TestBed.createComponent(ViewChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
