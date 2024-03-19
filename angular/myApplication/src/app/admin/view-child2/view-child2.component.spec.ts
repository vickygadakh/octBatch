import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChild2Component } from './view-child2.component';

describe('ViewChild2Component', () => {
  let component: ViewChild2Component;
  let fixture: ComponentFixture<ViewChild2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChild2Component]
    });
    fixture = TestBed.createComponent(ViewChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
