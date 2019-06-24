import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Expense } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  url = 'http://localhost:3000/expenses';
  subject = new Subject();

  constructor(
    private http: HttpClient
  ) { }

  getExpense(): Observable<Array<Expense>> {
    return this.http.get<Array<Expense>>(this.url);
  }

  setExpense(expense): void {
    this.http.post(this.url, expense).subscribe(
      () => {
        this.subject.next();
      }
    );
  }

  delExpense(id) {
    this.http.delete(`${this.url}/${id}`).subscribe(
      () => {
        this.subject.next();
      }
    );
  }
}
