import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewWeightComponent } from './register-new-weight.component';

describe('RegisterNewWeightComponent', () => {
  let component: RegisterNewWeightComponent;
  let fixture: ComponentFixture<RegisterNewWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterNewWeightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterNewWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
