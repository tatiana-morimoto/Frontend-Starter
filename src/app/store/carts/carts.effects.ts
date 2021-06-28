import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {CartsService} from './carts.service';
import {CartsActionsTypes, LoadCarts, LoadCartsFailure, LoadCartsSuccess} from './carts.actions';
import {Cart} from './carts.models';

@Injectable()
export class CartsEffects {
  @Effect()
  loadCarts$ = this.actions$.pipe(
    ofType<LoadCarts>(CartsActionsTypes.LoadCarts),
    mergeMap((action) =>
      this.cartsService.getCarts(action.userId).pipe(
        map((carts: Cart[]) => new LoadCartsSuccess(carts)),
        catchError((error) => of(new LoadCartsFailure(error))),
      ),
    ),
  );

  constructor(private actions$: Actions, private cartsService: CartsService) {}
}
