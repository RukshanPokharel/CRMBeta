import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreManagementPage } from './store-management.page';

const routes: Routes = [
  {
    path: '',
    component: StoreManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreManagementPageRoutingModule {}
