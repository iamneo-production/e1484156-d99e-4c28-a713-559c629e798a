import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmoredetailsComponent } from './viewmoredetails.component';

describe('ViewmoredetailsComponent', () => {
  let component: ViewmoredetailsComponent;
  let fixture: ComponentFixture<ViewmoredetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewmoredetailsComponent]
    });
    fixture = TestBed.createComponent(ViewmoredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
