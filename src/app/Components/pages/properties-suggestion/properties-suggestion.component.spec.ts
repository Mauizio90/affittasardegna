import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesSuggestionComponent } from './properties-suggestion.component';

describe('PropertiesSuggestionComponent', () => {
  let component: PropertiesSuggestionComponent;
  let fixture: ComponentFixture<PropertiesSuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertiesSuggestionComponent]
    });
    fixture = TestBed.createComponent(PropertiesSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
