import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookthemeComponent } from './booktheme.component';

describe('BookthemeComponent', () => {
  let component: BookthemeComponent;
  let fixture: ComponentFixture<BookthemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookthemeComponent]
    });
    fixture = TestBed.createComponent(BookthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
