import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpendsComponent } from './expends.component';

describe('ExpendsComponent', () => {
  let component: ExpendsComponent;
  let fixture: ComponentFixture<ExpendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
