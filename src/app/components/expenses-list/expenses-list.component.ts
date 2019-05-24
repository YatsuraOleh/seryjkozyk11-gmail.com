import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExpenseService } from '../../shared/services';
import { Expense } from '../../shared/interfaces';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe$ = new Subject();
  expenses: Array<Expense>;

  constructor(
    private expenseService: ExpenseService
  ) { }

  ngOnInit() {
    this.getExpense();

    this.expenseService.subject
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(
        () => {
          this.getExpense();
        }
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  private getExpense() {
    this.expenseService.getExpense()
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(
        data => {
          this.expenses = data;
        }
      );
  }
  public deleteExpense(item: Expense): void {
    const index = this.expenses.indexOf(item);
    if (index > -1) {
      this.expenses.splice(index, 1);
    }
  }
}
