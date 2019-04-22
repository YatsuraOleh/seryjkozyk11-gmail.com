import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  public expense: string;

  constructor() { }

  ngOnInit() { }

  public onSubmit(){
    console.log(new NewExpense(this.expense));
    // this.expense.push(new NewExpense(this.expense));
  }
}
class NewExpense {
  constructor (
    public expense: string,
    public done: boolean = false,
  ){}
}

