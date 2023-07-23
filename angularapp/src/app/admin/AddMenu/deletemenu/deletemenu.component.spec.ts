import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemenuComponent } from './deletemenu.component';

describe('DeletemenuComponent', () => {
  let component: DeletemenuComponent;
  let fixture: ComponentFixture<DeletemenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletemenuComponent]
    });
    fixture = TestBed.createComponent(DeletemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
