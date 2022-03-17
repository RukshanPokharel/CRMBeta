import { Component, OnInit, Renderer2 } from '@angular/core';

import { Platform } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public pages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'apps',
    },
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

  constructor(private renderer: Renderer2) {}

  onToggleColorTheme(event) {
    if (event.detail.checked) {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    }
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
