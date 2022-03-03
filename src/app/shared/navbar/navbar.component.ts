import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  displayComponent: string = 'recipe';
  @Output() pageType = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
