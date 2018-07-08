import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export const EXPENDS: any[] = [
  {
    id: 1,
    date: '01-07-2018',
    type: 95,
    odo: 190000,
    price: 42,
    quantity: 30,
    sum: 1260,
  },
  {
    id: 2,
    date: '06-07-2018',
    type: 95,
    odo: 190100,
    price: 42,
    quantity: 10,
    sum: 420,
  }
];

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getExpends(): Observable<any[]> {
    return of(EXPENDS);
  }
}
