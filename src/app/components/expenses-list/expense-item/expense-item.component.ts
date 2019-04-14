import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css']
})

export class ExpenseItemComponent implements OnInit {
 
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  
  constructor() {
     }

  ngOnInit() {
  }
}

