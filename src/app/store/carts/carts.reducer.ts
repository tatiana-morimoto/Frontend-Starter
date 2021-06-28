import { Actions, CartsActionsTypes } from './carts.actions';
import { Cart } from './carts.models';
import { CallStateCarts } from './carts.enum';

export const initialState: CartsState = {
  carts: null,
  callStateCarts: CallStateCarts.INIT,
};

export interface CartsState {
  carts: Cart;
  callStateCarts: CallStateCarts;
}

export function cartsReducer(state = initialState, action: Actions): CartsState {
  switch (action.type) {
    case CartsActionsTypes.LoadCarts:
      return { ...state, callStateCarts: CallStateCarts.LOADING };
    case CartsActionsTypes.LoadCartsSuccess:
      return { ...state, callStateCarts: CallStateCarts.LOADED, carts: action.carts };
    case CartsActionsTypes.LoadCartsFailure:
      return { ...state, callStateCarts: CallStateCarts.ERROR };
    case CartsActionsTypes.AddCart:
      return { ...state, callStateCarts: CallStateCarts.LOADING };
    case CartsActionsTypes.AddCartSuccess:
      return { ...state, callStateCarts: CallStateCarts.LOADED, carts: action.carts };
    case CartsActionsTypes.AddCartFailure:
      return { ...state, callStateCarts: CallStateCarts.ERROR };
  }
}
