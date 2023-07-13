import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmenuComponent } from './getmenu.component';

describe('GetmenuComponent', () => {
  let component: GetmenuComponent;
  let fixture: ComponentFixture<GetmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetmenuComponent]
    });
    fixture = TestBed.createComponent(GetmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
