import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../shared/services';
import { Expense } from '../../shared/interfaces';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  expenses: Array<Expense>;

  constructor(
    private expenseService: ExpenseService
  ) { }

  ngOnInit() {
    this.expenseService.getExpense().subscribe(
      data => {
        this.expenses = data;
      }
    );
  }

}
