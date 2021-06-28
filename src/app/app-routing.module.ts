import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsResolver} from './routes/data-resolvers/products.resolver';
import {AdminGuard} from './shared/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shopping',
  },
  {
    path: 'shopping',
    loadChildren: () =>
      import('./routes/products/shopping.module').then((m) => m.ShoppingModule),
    resolve: {
      products: ProductsResolver,
    },
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./routes/products/shopping.module').then((m) => m.ShoppingModule),
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
