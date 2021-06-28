import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../store/products/products.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() products: Product[];
  constructor() { }

  ngOnInit(): void {
  }

}
