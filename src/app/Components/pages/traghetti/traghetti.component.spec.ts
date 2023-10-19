import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraghettiComponent } from './traghetti.component';

describe('TraghettiComponent', () => {
  let component: TraghettiComponent;
  let fixture: ComponentFixture<TraghettiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TraghettiComponent]
    });
    fixture = TestBed.createComponent(TraghettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
