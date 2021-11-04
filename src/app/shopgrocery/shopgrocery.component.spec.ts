import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopgroceryComponent } from './shopgrocery.component';

describe('ShopgroceryComponent', () => {
  let component: ShopgroceryComponent;
  let fixture: ComponentFixture<ShopgroceryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopgroceryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopgroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
