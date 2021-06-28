import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import {AdminComponent} from './admin.component';

const routes: Routes = [
  {
    path: '',
    outlet: 'header',
    component: HeaderComponent,
  },
  {
    path: '/:id',
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule, RouterModule.forChild(routes)],
})
export class AdminRoutingModule {}
