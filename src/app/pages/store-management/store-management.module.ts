import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreManagementPageRoutingModule } from './store-management-routing.module';

import { StoreManagementPage } from './store-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreManagementPageRoutingModule
  ],
  declarations: [StoreManagementPage]
})
export class StoreManagementPageModule {}
