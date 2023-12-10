import { createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.actions';
import { UserInterface } from './user.interface';

export interface AuthState {
  user: UserInterface | null;
  error: any;
}

const initialState: AuthState = {
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(LoginActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),
  on(LoginActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
