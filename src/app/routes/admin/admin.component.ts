import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { getProducts } from '../../store/products/products.selectors';
import { map, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/store.model';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../store/products/products.models';
import { DeleteProduct, LoadProducts } from '../../store/products/products.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  private destroyed$ = new Subject();
  public loading = true;
  public products$: BehaviorSubject<Product[]> = new BehaviorSubject(null);

  constructor(private store: Store<AppStore>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.observeProducts();
  }

  public observeProducts(): void {
    combineLatest([this.route.data, this.store.select(getProducts)])
      .pipe(
        map(([data, products]) => {
          this.loading = false;
          if (products) {
            return this.products$.next(products);
          }
          return this.products$.next(data.products);
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe();
  }

  public removeProduct(product): void {
    this.store.dispatch(new DeleteProduct(product.id));
    this.store.dispatch(new LoadProducts());
  }
}
