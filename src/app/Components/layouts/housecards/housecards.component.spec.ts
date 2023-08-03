import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousecardsComponent } from './housecards.component';

describe('HousecardsComponent', () => {
  let component: HousecardsComponent;
  let fixture: ComponentFixture<HousecardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousecardsComponent]
    });
    fixture = TestBed.createComponent(HousecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
