import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { CardModule } from '../../components/card/card.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListModule } from '../../components/list/list.module';

@NgModule({
  declarations: [ShoppingComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    CardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ListModule,
  ],
})
export class ShoppingModule {}
