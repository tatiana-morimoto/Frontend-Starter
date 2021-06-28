import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from './users.service';
import { LoadUser, LoadUserFailure, LoadUserSuccess, UsersActionsTypes } from './users.actions';
import { User } from './users.models';

@Injectable()
export class UsersEffects {
  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType<LoadUser>(UsersActionsTypes.LoadUser),
    mergeMap((action) =>
      this.usersService.getUser(action.id).pipe(
        map((user: User) => new LoadUserSuccess(user)),
        catchError((error) => of(new LoadUserFailure(error))),
      ),
    ),
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
