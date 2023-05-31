import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NssfCalculatorComponent } from './nssf-calculator.component';

describe('NssfCalculatorComponent', () => {
  let component: NssfCalculatorComponent;
  let fixture: ComponentFixture<NssfCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NssfCalculatorComponent]
    });
    fixture = TestBed.createComponent(NssfCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
