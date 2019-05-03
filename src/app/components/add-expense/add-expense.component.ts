import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/shared/services';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  public expense: string;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() { }

  public onSubmit() {
    this.createId();
  }

  private createId() {
    this.expenseService.getExpense().subscribe(data => {

      const newExpense = new NewExpense(this.expense, (data[data.length - 1].id + 1));

      this.expenseService.setExpense(newExpense);
    });
  }
}

class NewExpense {
  constructor(
    public expense: string,
    public id: number
  ) { }
}

