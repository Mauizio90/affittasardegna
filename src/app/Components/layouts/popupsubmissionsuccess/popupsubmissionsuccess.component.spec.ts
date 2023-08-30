import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsubmissionsuccessComponent } from './popupsubmissionsuccess.component';

describe('PopupsubmissionsuccessComponent', () => {
  let component: PopupsubmissionsuccessComponent;
  let fixture: ComponentFixture<PopupsubmissionsuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [PopupsubmissionsuccessComponent]
});
    fixture = TestBed.createComponent(PopupsubmissionsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
