import { Action } from '@ngrx/store';
import {User} from './users.models';

export enum UsersActionsTypes {
  LoadUser = '[User] Load User',
  LoadUserSuccess = '[User] Load User Success',
  LoadUserFailure = '[User] Load User Failure',
}

export class LoadUser implements Action {
  readonly type = UsersActionsTypes.LoadUser;
  constructor(public id: string) {
  }
}

export class LoadUserSuccess implements Action {
  readonly type = UsersActionsTypes.LoadUserSuccess;
  constructor(public user: User) {}
}

export class LoadUserFailure implements Action {
  readonly type = UsersActionsTypes.LoadUserFailure;
  constructor(public error) {}
}

export type Actions =
  | LoadUser
  | LoadUserSuccess
  | LoadUserFailure;
