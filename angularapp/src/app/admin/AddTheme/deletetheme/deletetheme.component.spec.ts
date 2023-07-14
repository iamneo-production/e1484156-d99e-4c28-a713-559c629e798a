import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletethemeComponent } from './deletetheme.component';

describe('DeletethemeComponent', () => {
  let component: DeletethemeComponent;
  let fixture: ComponentFixture<DeletethemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletethemeComponent]
    });
    fixture = TestBed.createComponent(DeletethemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
