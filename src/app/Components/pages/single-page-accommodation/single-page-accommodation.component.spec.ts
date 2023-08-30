import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageAccommodationComponent } from './single-page-accommodation.component';

describe('SinglePageAccommodationComponent', () => {
  let component: SinglePageAccommodationComponent;
  let fixture: ComponentFixture<SinglePageAccommodationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [SinglePageAccommodationComponent]
});
    fixture = TestBed.createComponent(SinglePageAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
