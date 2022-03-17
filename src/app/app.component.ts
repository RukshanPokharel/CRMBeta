import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public pages = [
    {
      title: 'Customer',
      url: '/customer',
      icon: 'people',
    },
  ];
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
