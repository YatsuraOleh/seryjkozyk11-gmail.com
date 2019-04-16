import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  items: any = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  constructor(
  ) { }

  ngOnInit() {
  }

}
