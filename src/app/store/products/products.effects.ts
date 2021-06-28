import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductsService } from './products.service';
import {
  DeleteProduct,
  DeleteProductFailure,
  DeleteProductSuccess,
  LoadProducts,
  LoadProductsFailure,
  LoadProductsSuccess,
  LoadRecommended,
  LoadRecommendedFailure,
  LoadRecommendedSuccess,
  ProductsActionsTypes,
  SearchProduct,
  SearchProductFailure,
  SearchProductSuccess,
} from './products.actions';
import { Product } from './products.models';

@Injectable()
export class ProductsEffects {
  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType<LoadProducts>(ProductsActionsTypes.LoadProducts),
    mergeMap(() =>
      this.productsService.getProducts().pipe(
        map((products: Product[]) => new LoadProductsSuccess(products)),
        catchError((error) => of(new LoadProductsFailure(error))),
      ),
    ),
  );

  @Effect()
  loadRecommended$ = this.actions$.pipe(
    ofType<LoadRecommended>(ProductsActionsTypes.LoadRecommended),
    mergeMap(() =>
      this.productsService.getRecommended().pipe(
        map((products: Product[]) => new LoadRecommendedSuccess(products)),
        catchError((error) => of(new LoadRecommendedFailure(error))),
      ),
    ),
  );

  @Effect()
  searchProduct$ = this.actions$.pipe(
    ofType<SearchProduct>(ProductsActionsTypes.SearchProduct),
    mergeMap((action) =>
      this.productsService.searchProduct(action.query).pipe(
        map((products: Product[]) => new SearchProductSuccess(products)),
        catchError((error) => of(new SearchProductFailure(error))),
      ),
    ),
  );

  @Effect()
  deleteProduct$ = this.actions$.pipe(
    ofType<DeleteProduct>(ProductsActionsTypes.DeleteProduct),
    mergeMap((action) =>
      this.productsService.deleteProduct(action.id).pipe(
        map((product: Product) => new DeleteProductSuccess(product)),
        catchError((error) => of(new DeleteProductFailure(error))),
      ),
    ),
  );

  constructor(private actions$: Actions, private productsService: ProductsService) {}
}
