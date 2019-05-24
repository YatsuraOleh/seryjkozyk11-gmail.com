import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { ExpenseItemComponent } from './components/expenses-list/expense-item/expense-item.component';
import { AlertModule } from 'ngx-bootstrap';
import { FooterNewComponent } from './components/footer-new/footer-new.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddExpenseComponent,
    ExpensesListComponent,
    ExpenseItemComponent,
    FooterNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
