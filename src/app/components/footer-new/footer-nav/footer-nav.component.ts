import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent implements OnInit {
@Input() navList: any;

  constructor() { }

  ngOnInit() { }

}
