import { Action } from '@ngrx/store';
import {Cart} from './carts.models';

export enum CartsActionsTypes {
  LoadCarts = '[Carts] Load Carts',
  LoadCartsSuccess = '[Carts] Load Carts Success',
  LoadCartsFailure = '[Carts] Load Carts Failure',
}

export class LoadCarts implements Action {
  readonly type = CartsActionsTypes.LoadCarts;
  constructor(public userId: string) {
  }
}

export class LoadCartsSuccess implements Action {
  readonly type = CartsActionsTypes.LoadCartsSuccess;
  constructor(public carts: Cart[]) {}
}

export class LoadCartsFailure implements Action {
  readonly type = CartsActionsTypes.LoadCartsFailure;
  constructor(public error) {}
}

export type Actions =
  | LoadCarts
  | LoadCartsSuccess
  | LoadCartsFailure;
