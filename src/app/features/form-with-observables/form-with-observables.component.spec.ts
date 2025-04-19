import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithObservablesComponent } from './form-with-observables.component';

describe('FormWithObservablesComponent', () => {
  let component: FormWithObservablesComponent;
  let fixture: ComponentFixture<FormWithObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormWithObservablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWithObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
