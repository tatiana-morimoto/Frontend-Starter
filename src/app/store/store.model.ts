import { ProductsState } from './products/products.reducer';
import {UsersState} from './users/users.reducer';
import {CartsState} from './carts/carts.reducer';

export interface AppStore {
  carts: CartsState;
  products: ProductsState;
  users: UsersState;
}
