import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpendsChartComponent } from './expends-chart.component';

describe('ExpendsChartComponent', () => {
  let component: ExpendsChartComponent;
  let fixture: ComponentFixture<ExpendsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpendsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpendsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
