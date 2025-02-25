import { Injectable, signal } from '@angular/core';
import { Weight } from '../models/weight';

@Injectable({
  providedIn: 'root'
})
export class WeightsService {

  weights = signal<Weight[]>([]);



  addWeight(weight: Weight) {
    this.weights.update((weights) => [...weights, weight]);
  }

}
