import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaddonComponent } from './editaddon.component';

describe('EditaddonComponent', () => {
  let component: EditaddonComponent;
  let fixture: ComponentFixture<EditaddonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditaddonComponent]
    });
    fixture = TestBed.createComponent(EditaddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
