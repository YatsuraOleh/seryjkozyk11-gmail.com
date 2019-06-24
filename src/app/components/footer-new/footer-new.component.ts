import { Component, OnInit } from '@angular/core';
import { footerNew } from './footer-new.config';

@Component({
  selector: 'app-footer-new',
  templateUrl: './footer-new.component.html',
  styleUrls: ['./footer-new.component.css']
})
export class FooterNewComponent implements OnInit {
  footerNewData = footerNew;
  constructor() { }

  ngOnInit() {
  }

}
