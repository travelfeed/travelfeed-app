import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesItemComponent } from './countries-item.component';

describe('CountriesItemComponent', () => {
  let component: CountriesItemComponent;
  let fixture: ComponentFixture<CountriesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
