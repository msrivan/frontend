import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgroceryComponent } from './viewgrocery.component';

describe('ViewgroceryComponent', () => {
  let component: ViewgroceryComponent;
  let fixture: ComponentFixture<ViewgroceryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgroceryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
