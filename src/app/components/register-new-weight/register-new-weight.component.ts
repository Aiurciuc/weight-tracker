import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { WeightsService } from '../../services/weights.service';

@Component({
  selector: 'app-register-new-weight',
  imports: [InputNumberModule, DatePickerModule, FormsModule, ButtonModule],
  template: ` <section class="new-weight">
    <!-- <p>Register new weight</p> -->
    <p-inputnumber
      [(ngModel)]="weight"
      mode="decimal"
      maxFractionDigits="1"
      minFractionDigits="1"
      [step]="0.1"
      showButtons="true"
    />
    <p-datepicker [(ngModel)]="date" dateFormat="dd-M-yy" />
    <p-button label="Add new weight" type="button" (click)="registerWeight()" />
  </section>`,
  styles: `
    .new-weight {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap:20px
    }
  `,
})
export class RegisterNewWeightComponent {
  weight = model<number>(0);
  date = model<Date>(new Date());
  weightsService = inject(WeightsService);
  

  registerWeight() {
    this.weightsService.addWeight({ date: this.date(), value: this.weight() });
  }
}
