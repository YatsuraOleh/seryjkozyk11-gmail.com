import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { ExpenseItemComponent } from './components/expenses-list/expense-item/expense-item.component';
import { FooterNewComponent } from './components/footer-new/footer-new.component';
import { FooterNavComponent } from './components/footer-new/footer-nav/footer-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddExpenseComponent,
    ExpensesListComponent,
    ExpenseItemComponent,
    FooterNewComponent,
    FooterNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
