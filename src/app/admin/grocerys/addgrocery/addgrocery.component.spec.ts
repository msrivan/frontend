import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgroceryComponent } from './addgrocery.component';

describe('AddgroceryComponent', () => {
  let component: AddgroceryComponent;
  let fixture: ComponentFixture<AddgroceryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgroceryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
