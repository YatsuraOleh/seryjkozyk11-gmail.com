import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Expense } from '../../../shared/interfaces';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css']
})
export class ExpenseItemComponent implements OnInit {
  @Input() item: Expense;
  @Output() submit = new EventEmitter;

  editExpenseForm: FormGroup;
  isSubmit = false;

  private modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createEditExpenseForm();
  }

  openModal(template) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered app-modal',
      ignoreBackdropClick: true
    });
  }

  cancel() {
    this.hide();
  }

  save(): void {
    this.isSubmit = true;
    this.submit.emit(this.editExpenseForm.value);
    // console.log(this.editExpenseForm.value);

    if (this.editExpenseForm.invalid) {
      return;
    }
    this.hide();
  }

  hide() {
    this.modalRef.hide();
  }

  private createEditExpenseForm(): void {
    this.editExpenseForm = this.fb.group({
      expense: [
        this.item.expense,
        Validators.required
      ],
      id: [this.item.id]
    });
  }
}

