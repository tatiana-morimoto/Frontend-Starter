import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [CommonModule, MatListModule, FlexLayoutModule, MatButtonModule],
})
export class ListModule {}
