import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetaddonComponent } from './getaddon.component';

describe('GetaddonComponent', () => {
  let component: GetaddonComponent;
  let fixture: ComponentFixture<GetaddonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetaddonComponent]
    });
    fixture = TestBed.createComponent(GetaddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
