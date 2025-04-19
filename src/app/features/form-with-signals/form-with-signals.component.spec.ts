import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithSignalsComponent } from './form-with-signals.component';

describe('FormWithSignalsComponent', () => {
  let component: FormWithSignalsComponent;
  let fixture: ComponentFixture<FormWithSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormWithSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWithSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
