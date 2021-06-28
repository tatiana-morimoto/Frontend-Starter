import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/store.model';
import {LoadProducts} from '../../store/products/products.actions';
import {first, map, mapTo} from 'rxjs/operators';
import {Observable, race} from 'rxjs';
import {getProducts, getProductsError} from '../../store/products/products.selectors';
import {Product} from '../../store/products/products.models';

@Injectable()
export class ProductsResolver implements Resolve<Product[] | never> {
  constructor(private store: Store<AppStore>) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Product[] | never> {

    this.store.dispatch(new LoadProducts());

    const productsLoaded$ = this.store.select(getProducts).pipe(
      first(Boolean),
      map(( products) => products)
    );

    const productsErrored$ = this.store.select(getProductsError).pipe(first(Boolean), mapTo(null));

    return race<Product[], null>(productsLoaded$, productsErrored$);
  }
}
