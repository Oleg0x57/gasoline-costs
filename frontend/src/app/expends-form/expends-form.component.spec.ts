import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpendsFormComponent } from './expends-form.component';

describe('ExpendsFormComponent', () => {
  let component: ExpendsFormComponent;
  let fixture: ComponentFixture<ExpendsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpendsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpendsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
