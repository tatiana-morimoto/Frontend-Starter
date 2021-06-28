import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../store/products/products.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() products: Product[];
  @Output() addToCartChange: EventEmitter<Product> = new EventEmitter<Product>();

  public addToCart(product): void {
    this.addToCartChange.emit(product);
  }
}
