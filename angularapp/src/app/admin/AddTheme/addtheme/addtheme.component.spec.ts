import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddthemeComponent } from './addtheme.component';

describe('AddthemeComponent', () => {
  let component: AddthemeComponent;
  let fixture: ComponentFixture<AddthemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddthemeComponent]
    });
    fixture = TestBed.createComponent(AddthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
