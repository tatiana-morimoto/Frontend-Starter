import { Action } from '@ngrx/store';
import { Cart } from './carts.models';
import { Product } from '../products/products.models';

export enum CartsActionsTypes {
  LoadCarts = '[Carts] Load Carts',
  LoadCartsSuccess = '[Carts] Load Carts Success',
  LoadCartsFailure = '[Carts] Load Carts Failure',
  AddCart = '[Cart] Add Cart',
  AddCartSuccess = '[Cart] Add Cart Success',
  AddCartFailure = '[Cart] Add Cart Failure',
}

export class LoadCarts implements Action {
  readonly type = CartsActionsTypes.LoadCarts;
  constructor(public userId: string) {}
}

export class LoadCartsSuccess implements Action {
  readonly type = CartsActionsTypes.LoadCartsSuccess;
  constructor(public carts: Cart) {}
}

export class LoadCartsFailure implements Action {
  readonly type = CartsActionsTypes.LoadCartsFailure;
  constructor(public error) {}
}

export class AddCart implements Action {
  readonly type = CartsActionsTypes.AddCart;
  constructor(public id: number) {}
}

export class AddCartSuccess implements Action {
  readonly type = CartsActionsTypes.AddCartSuccess;
  constructor(public carts: Cart) {}
}

export class AddCartFailure implements Action {
  readonly type = CartsActionsTypes.AddCartFailure;
  constructor(public error) {}
}

export type Actions =
  | LoadCarts
  | LoadCartsSuccess
  | LoadCartsFailure
  | AddCart
  | AddCartSuccess
  | AddCartFailure;
