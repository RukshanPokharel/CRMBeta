import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductSalesPage } from './product-sales.page';

const routes: Routes = [
  {
    path: '',
    component: ProductSalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductSalesPageRoutingModule {}
