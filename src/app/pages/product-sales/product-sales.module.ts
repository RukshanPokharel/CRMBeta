import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductSalesPageRoutingModule } from './product-sales-routing.module';

import { ProductSalesPage } from './product-sales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductSalesPageRoutingModule
  ],
  declarations: [ProductSalesPage]
})
export class ProductSalesPageModule {}
