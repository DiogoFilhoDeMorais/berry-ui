import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as LoginActions from './login.actions';
import { LoginService } from './login.service';

@Injectable()
export class LoginEffects {
  //   login$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(LoginActions.login),
  //       mergeMap((action) =>
  //         this.loginService.login(action.username, action.password).pipe(
  //           map((user) => LoginActions.loginSuccess({ user })),
  //           catchError((error) => of(LoginActions.loginFailure({ error })))
  //         )
  //       )
  //     )
  //   );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      switchMap(({ username, password }) =>
        this.loginService.login(username, password).pipe(
          map((response: any) => LoginActions.loginSuccess({ user: response })),
          catchError((error) => of(LoginActions.loginFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private loginService: LoginService) {}
}
