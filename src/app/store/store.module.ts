import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './custom-serializer/custom-route.serializer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import {productsReducer} from './products/products.reducer';
import {ProductsEffects} from './products/products.effects';
import {ProductsService} from './products/products.service';
import {CartsEffects} from './carts/carts.effects';
import {UsersEffects} from './users/users.effects';
import {CartsService} from './carts/carts.service';
import {UsersService} from './users/users.service';
import {cartsReducer} from './carts/carts.reducer';
import {usersReducer} from './users/users.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
    StoreModule.forRoot({ carts: cartsReducer, products: productsReducer, users: usersReducer }),
    EffectsModule.forRoot([CartsEffects, ProductsEffects, UsersEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [CartsService, ProductsService, UsersService],
})
export class AppStoreModule {}
