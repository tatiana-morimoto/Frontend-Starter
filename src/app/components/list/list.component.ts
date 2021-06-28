import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../store/products/products.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() lists: Product[];
  @Output() deleteChange: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(public router: Router) {}

  get getTotal(): number {
    return this.lists?.reduce((acc, val) => acc + val.price, 0);
  }

  public delete(product): void {
    this.deleteChange.emit(product);
  }
}
