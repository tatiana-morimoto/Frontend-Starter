import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CallStateProducts, CallStateRecommended } from './products.enum';
import { ProductsState } from './products.reducer';

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const getProducts = createSelector(getProductsState, (state) => state?.products);

export const getProductsSuccess = createSelector(
  getProductsState,
  (state) => state?.callStateProducts === CallStateProducts.LOADED,
);

export const getProductsError = createSelector(
  getProductsState,
  (state) => state?.callStateProducts === CallStateProducts.ERROR,
);

export const getRecommended = createSelector(getProductsState, (state) => state?.recommended);

export const getRecommendedSuccess = createSelector(
  getProductsState,
  (state) => state?.callStateRecommended === CallStateRecommended.LOADED,
);

export const getRecommendedError = createSelector(
  getProductsState,
  (state) => state?.callStateRecommended === CallStateRecommended.ERROR,
);
