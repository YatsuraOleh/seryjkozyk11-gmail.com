import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { ExpenseItemComponent } from './components/expenses-list/expense-item/expense-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddExpenseComponent,
    ExpensesListComponent,
    ExpenseItemComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
