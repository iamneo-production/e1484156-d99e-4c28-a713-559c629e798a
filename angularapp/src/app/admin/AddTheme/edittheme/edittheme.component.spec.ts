import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditthemeComponent } from './edittheme.component';

describe('EditthemeComponent', () => {
  let component: EditthemeComponent;
  let fixture: ComponentFixture<EditthemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditthemeComponent]
    });
    fixture = TestBed.createComponent(EditthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
