import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C19CountryStatsComponent } from './c19-country-stats.component';

describe('C19CountryStatsComponent', () => {
  let component: C19CountryStatsComponent;
  let fixture: ComponentFixture<C19CountryStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C19CountryStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C19CountryStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
