import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearCacheComponent } from './clear-cache.component';

describe('ClearCacheComponent', () => {
  let component: ClearCacheComponent;
  let fixture: ComponentFixture<ClearCacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClearCacheComponent]
    });
    fixture = TestBed.createComponent(ClearCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
