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

      let id;
      if (data.length) {
        id = (data[data.length - 1].id) + 1;
      } else {
        id = 1;
      }

      const newExpense = new NewExpense(this.expense, id);

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

