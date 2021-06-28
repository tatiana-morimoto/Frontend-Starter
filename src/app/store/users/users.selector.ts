import { createFeatureSelector, createSelector } from '@ngrx/store';
import {UsersState} from './users.reducer';
import {CallStateUser} from './users.enum';

const getUsersState = createFeatureSelector<UsersState>('users');

export const getUser = createSelector(getUsersState, (state) => state?.user);

export const getUserState = createSelector(
  getUsersState,
  (state) => state?.callStateUser === CallStateUser.LOADED,
);

export const getUserError = createSelector(
  getUsersState,
  (state) => state?.callStateUser === CallStateUser.ERROR,
);
