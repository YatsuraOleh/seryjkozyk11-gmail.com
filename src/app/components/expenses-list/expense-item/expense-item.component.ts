import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css']
})
export class ExpenseItemComponent implements OnInit {
  @Input() item: any;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }
}

