import { CallStateProducts, CallStateRecommended } from './products.enum';
import { Actions, ProductsActionsTypes } from './products.actions';
import { Product } from './products.models';

export const initialState: ProductsState = {
  products: null,
  productDeleted: null,
  recommended: null,
  callStateProducts: CallStateProducts.INIT,
  callStateRecommended: CallStateRecommended.INIT,
};

export interface ProductsState {
  products: Product[];
  productDeleted: Product;
  recommended: Product[];
  callStateProducts: CallStateProducts;
  callStateRecommended: CallStateRecommended;
}

export function productsReducer(state = initialState, action: Actions): ProductsState {
  switch (action.type) {
    case ProductsActionsTypes.LoadProducts:
      return { ...state, callStateProducts: CallStateProducts.LOADING };
    case ProductsActionsTypes.LoadProductsSuccess:
      return { ...state, callStateProducts: CallStateProducts.LOADED, products: action.products };
    case ProductsActionsTypes.LoadProductsFailure:
      return { ...state, callStateProducts: CallStateProducts.ERROR };
    case ProductsActionsTypes.LoadRecommended:
      return { ...state, callStateRecommended: CallStateRecommended.LOADING };
    case ProductsActionsTypes.LoadRecommendedSuccess:
      return {
        ...state,
        callStateRecommended: CallStateRecommended.LOADED,
        recommended: action.recommended,
      };
    case ProductsActionsTypes.LoadRecommendedFailure:
      return { ...state, callStateRecommended: CallStateRecommended.ERROR };
    case ProductsActionsTypes.SearchProduct:
      return { ...state, callStateProducts: CallStateProducts.LOADING };
    case ProductsActionsTypes.SearchProductSuccess:
      return { ...state, callStateProducts: CallStateProducts.LOADED, products: action.products };
    case ProductsActionsTypes.SearchProductFailure:
      return { ...state, callStateProducts: CallStateProducts.ERROR };
    case ProductsActionsTypes.DeleteProduct:
      return { ...state, callStateProducts: CallStateProducts.LOADING };
    case ProductsActionsTypes.DeleteProductSuccess:
      return {
        ...state,
        callStateProducts: CallStateProducts.LOADED,
        productDeleted: action.product,
      };
    case ProductsActionsTypes.DeleteProductFailure:
      return { ...state, callStateProducts: CallStateProducts.ERROR };
  }
}
