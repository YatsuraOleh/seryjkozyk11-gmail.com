import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  url = 'http://localhost:3000/expenses';

  constructor(
    private http: HttpClient
  ) { }

  getExpense(): Observable<Array<Expense>> {
    return this.http.get<Array<Expense>>(this.url);
  }

  setExpense(expense) {
      return this.http.post(this.url, expense);
  }
}
