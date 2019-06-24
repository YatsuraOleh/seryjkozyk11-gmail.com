import { Component, OnInit, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent implements OnInit {
@Input() navList: any;
  constructor() { }

  ngOnInit() {
    console.log(this.navList);
  }

}
