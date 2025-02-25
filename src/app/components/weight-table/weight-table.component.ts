import { Component, computed, inject } from '@angular/core';
import { WeightsService } from '../../services/weights.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weight-table',
  imports: [CommonModule, TableModule],
  template: ` <p-table
    [value]="weights()"
    [tableStyle]="{ 'min-width': '50rem' }"
  >
    <ng-template #header>
      <tr>
        <th>Date</th>
        <th>Weight</th>
        <th>Change</th>
      </tr>
    </ng-template>
    <ng-template #body let-weight>
      <tr>
        <td>{{ weight.date | date : 'longDate' }}</td>
        <td>{{ weight.value }}</td>
        <td>{{ weight.change > 0 ? '+' + weight.change : weight.change }} %</td>
      </tr>
    </ng-template>
  </p-table>`,
  styles: ``,
})
export class WeightTableComponent {
  weightsService = inject(WeightsService);

  weights = computed(() =>
    this.weightsService
      .weights()
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .map((weight, index, weights) => {
        if (index === weights.length - 1) {
          return { ...weight, change: 0 };
        }

        const previousWeight = weights[index + 1];
        return {
          ...weight,
          change: (weight.value / previousWeight.value - 1) * 100,
        };
      })
  );
}
