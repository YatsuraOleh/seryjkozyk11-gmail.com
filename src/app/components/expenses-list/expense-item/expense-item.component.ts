import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../../../shared/interfaces';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css']
})
export class ExpenseItemComponent implements OnInit {
  @Input() item: Expense;

  private modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  public openModal(template) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered app-modal',
      ignoreBackdropClick: true
    });
  }

  public cancel() {
    this.modalRef.hide();
  }
  public save() {
    this.modalRef.hide();
  }
}

