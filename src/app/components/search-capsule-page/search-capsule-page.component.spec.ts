import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCapsulePageComponent } from './search-capsule-page.component';

describe('SearchCapsulePageComponent', () => {
  let component: SearchCapsulePageComponent;
  let fixture: ComponentFixture<SearchCapsulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCapsulePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCapsulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
