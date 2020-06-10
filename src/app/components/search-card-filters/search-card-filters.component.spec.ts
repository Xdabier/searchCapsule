import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCardFiltersComponent } from './search-card-filters.component';

describe('SearchCardFiltersComponent', () => {
  let component: SearchCardFiltersComponent;
  let fixture: ComponentFixture<SearchCardFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCardFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCardFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
