import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteaddonComponent } from './deleteaddon.component';

describe('DeleteaddonComponent', () => {
  let component: DeleteaddonComponent;
  let fixture: ComponentFixture<DeleteaddonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteaddonComponent]
    });
    fixture = TestBed.createComponent(DeleteaddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
