import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/store.model';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Product } from '../../store/products/products.models';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoadProducts, SearchProduct } from '../../store/products/products.actions';
import { getProducts } from '../../store/products/products.selectors';
import { getCarts } from '../../store/carts/carts.selector';
import { AddCart, LoadCarts } from '../../store/carts/carts.actions';

@Component({
  selector: 'app-products',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  public loading = true;
  public products$: BehaviorSubject<Product[]> = new BehaviorSubject(null);
  public carts$: BehaviorSubject<Product[]> = new BehaviorSubject(null);
  public form: FormGroup;

  constructor(
    private store: Store<AppStore>,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  public ngOnInit(): void {
    // actions
    this.route.paramMap
      .pipe(
        map((params) => {
          const userId = params.get('id');
          this.store.dispatch(new LoadProducts());
          this.store.dispatch(new LoadCarts(userId));
        }),
      )
      .subscribe();

    // reactive form
    this.form = this.fb.group({
      search: new FormControl({ value: '', disabled: false }),
    });

    // Observes
    this.observeProducts();
    this.observeCarts();
    this.observeSearch();
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
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

  public observeSearch(): void {
    this.form
      .get('search')
      .valueChanges.pipe(
        tap((search) => {
          this.loading = true;
          this.store.dispatch(new SearchProduct(search));
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe();
  }

  public observeCarts(): void {
    combineLatest([this.store.select(getProducts), this.store.select(getCarts)])
      .pipe(
        map(([products, carts]) => {
          const cartsFiltered = products?.filter((product) =>
            carts?.products.some((cart) => product.id === cart.id),
          );
          if (cartsFiltered?.length > 0) {
            this.carts$.next(cartsFiltered);
          }
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe();
  }

  public addToCart(product): void {
    this.store.dispatch(new AddCart(product.id));
  }
}
