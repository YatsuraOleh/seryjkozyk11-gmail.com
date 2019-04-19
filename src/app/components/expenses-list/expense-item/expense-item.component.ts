import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../../../shared/interfaces';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css']
})
export class ExpenseItemComponent implements OnInit {
  @Input() item: Expense;

  constructor() { }

  ngOnInit() {
  }
}

