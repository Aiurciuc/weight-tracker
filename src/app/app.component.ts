import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'; // Adjust the import path as necessary
import { WeightTableComponent } from './components/weight-table/weight-table.component';
import { RegisterNewWeightComponent } from './components/register-new-weight/register-new-weight.component';

@Component({
  selector: 'app-root',
  imports: [
    CardModule,
    ButtonModule,
    WeightTableComponent,
    RegisterNewWeightComponent,
  ],
  template: ` <p-card>
    <div class="card">
      <app-register-new-weight />
      <app-weight-table />
    </div>
  </p-card>`,
  styles:`
    .card{
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }
  `,
})
export class AppComponent {
  title = 'weight-track';
}
