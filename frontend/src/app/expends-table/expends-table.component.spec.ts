import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpendsTableComponent } from './expends-table.component';

describe('ExpendsTableComponent', () => {
  let component: ExpendsTableComponent;
  let fixture: ComponentFixture<ExpendsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpendsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpendsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
