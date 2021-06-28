import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ShoppingComponent } from './shopping.component';

const routes: Routes = [
  {
    path: '',
    outlet: 'header',
    component: HeaderComponent,
  },
  {
    path: '',
    component: ShoppingComponent,
  },
];

@NgModule({
  imports: [RouterModule, RouterModule.forChild(routes)],
})
export class ShoppingRoutingModule {}
