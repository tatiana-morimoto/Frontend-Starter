import {CallStateUser} from './users.enum';
import {User} from './users.models';
import {UsersActionsTypes, Actions} from './users.actions';

export const initialState: UsersState = {
  user: null,
  callStateUser: CallStateUser.INIT,
};

export interface UsersState {
  user: User;
  callStateUser: CallStateUser;
}

export function usersReducer(state = initialState, action: Actions): UsersState {
  switch (action.type) {
    case UsersActionsTypes.LoadUser:
      return {...state, callStateUser: CallStateUser.LOADING};
    case UsersActionsTypes.LoadUserSuccess:
      return {...state, callStateUser: CallStateUser.LOADED, user: action.user};
    case UsersActionsTypes.LoadUserFailure:
      return {...state, callStateUser: CallStateUser.ERROR};
  }
}
