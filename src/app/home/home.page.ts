import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public pages = [
    {
      title: 'Customers',
      url: '/customers',
      icon: 'people',
    },
    {
      title: 'Earnings',
      url: '/earnings',
      icon: 'card',
    },
    {
      title: 'Product-Sales',
      url: '/product-sales',
      icon: 'analytics',
    },
    {
      title: 'Store-Management',
      url: '/store-management',
      icon: 'star-half',
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings',
    },
  ];

  constructor() {}
}
