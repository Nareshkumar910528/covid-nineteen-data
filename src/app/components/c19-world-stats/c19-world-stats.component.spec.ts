import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C19WorldStatsComponent } from './c19-world-stats.component';

describe('C19WorldStatsComponent', () => {
  let component: C19WorldStatsComponent;
  let fixture: ComponentFixture<C19WorldStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C19WorldStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C19WorldStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
