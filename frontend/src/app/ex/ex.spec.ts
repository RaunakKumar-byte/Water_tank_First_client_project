import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex } from './ex';

describe('Ex', () => {
  let component: Ex;
  let fixture: ComponentFixture<Ex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
