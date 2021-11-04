import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerysComponent } from './grocerys.component';

describe('GrocerysComponent', () => {
  let component: GrocerysComponent;
  let fixture: ComponentFixture<GrocerysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrocerysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocerysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
