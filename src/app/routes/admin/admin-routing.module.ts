import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { AdminComponent } from './admin.component';
import { AdminGuard } from '../../shared/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    outlet: 'header',
    component: HeaderComponent,
  },
  {
    path: ':id',
    canActivate: [AdminGuard],
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule, RouterModule.forChild(routes)],
})
export class AdminRoutingModule {}
