import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./pages/customers/customers.module').then(
        (m) => m.CustomersPageModule
      ),
  },
  {
    path: 'product-sales',
    loadChildren: () =>
      import('./pages/product-sales/product-sales.module').then(
        (m) => m.ProductSalesPageModule
      ),
  },
  {
    path: 'earnings',
    loadChildren: () =>
      import('./pages/earnings/earnings.module').then(
        (m) => m.EarningsPageModule
      ),
  },
  {
    path: 'store-management',
    loadChildren: () =>
      import('./pages/store-management/store-management.module').then(
        (m) => m.StoreManagementPageModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then(
        (m) => m.SettingsPageModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
