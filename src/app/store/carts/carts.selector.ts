import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CartsState} from './carts.reducer';
import {CallStateCarts} from './carts.enum';

const getCartsState = createFeatureSelector<CartsState>('carts');

export const getCarts = createSelector(getCartsState, (state) => state?.carts);

export const getCartsSuccess = createSelector(
  getCartsState,
  (state) => state?.callStateCarts === CallStateCarts.LOADED,
);

export const getCartsError = createSelector(
  getCartsState,
  (state) => state?.callStateCarts === CallStateCarts.ERROR,
);
