import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsResolver } from './routes/data-resolvers/products.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin/1',
  },
  {
    path: 'shopping',
    loadChildren: () => import('./routes/products/shopping.module').then((m) => m.ShoppingModule),
    resolve: {
      products: ProductsResolver,
    },
  },
  {
    path: 'admin',
    loadChildren: () => import('./routes/admin/admin.module').then((m) => m.AdminModule),
    resolve: {
      products: ProductsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductsResolver],
})
export class AppRoutingModule {}
