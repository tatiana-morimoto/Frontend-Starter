import { Action } from '@ngrx/store';
import {Product} from './products.models';

export enum ProductsActionsTypes {
  LoadProducts = '[Product] Load Products',
  LoadProductsSuccess = '[Product] Load Products Success',
  LoadProductsFailure = '[Product] Load Products Failure',
  LoadRecommended = '[Product] Load Recommended',
  LoadRecommendedSuccess = '[Product] Load Recommended Success',
  LoadRecommendedFailure = '[Product] Load Recommended Failure',
  SearchProduct = '[Product] Search Product',
  SearchProductSuccess = '[Product] Search Product Success',
  SearchProductFailure = '[Product] Search Product Failure',
}

export class LoadProducts implements Action {
  readonly type = ProductsActionsTypes.LoadProducts;
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductsActionsTypes.LoadProductsSuccess;
  constructor(public products: Product[]) {}
}

export class LoadProductsFailure implements Action {
  readonly type = ProductsActionsTypes.LoadProductsFailure;
  constructor(public error) {}
}

export class LoadRecommended implements Action {
  readonly type = ProductsActionsTypes.LoadRecommended;
  constructor() {}
}

export class LoadRecommendedSuccess implements Action {
  readonly type = ProductsActionsTypes.LoadRecommendedSuccess;
  constructor(public recommended: Product[]) {}
}

export class LoadRecommendedFailure implements Action {
  readonly type = ProductsActionsTypes.LoadRecommendedFailure;
  constructor(public error) {}
}

export class SearchProduct implements Action {
  readonly type = ProductsActionsTypes.SearchProduct;
  constructor(public query: string) {}
}

export class SearchProductSuccess implements Action {
  readonly type = ProductsActionsTypes.SearchProductSuccess;
  constructor(public products: Product[]) {}
}

export class SearchProductFailure implements Action {
  readonly type = ProductsActionsTypes.SearchProductFailure;
  constructor(public error) {}
}

export type Actions =
  | LoadProducts
  | LoadProductsSuccess
  | LoadProductsFailure
  | LoadRecommended
  | LoadRecommendedSuccess
  | LoadRecommendedFailure
  | SearchProduct
  | SearchProductSuccess
  | SearchProductFailure;
