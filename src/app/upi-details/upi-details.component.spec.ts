import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiDetailsComponent } from './upi-details.component';

describe('UpiDetailsComponent', () => {
  let component: UpiDetailsComponent;
  let fixture: ComponentFixture<UpiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
