import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {Observable, of, race} from 'rxjs';
import {getUser} from '../../store/users/users.selector';
import {Store} from '@ngrx/store';
import {AppStore} from '../../store/store.model';
import {LoadUser} from '../../store/users/users.actions';
import {filter, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppStore>) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean>  {
    const userId = route.paramMap.get('user_Id') || '1';

    this.store.dispatch(new LoadUser(userId));

    const isAdmin$ = this.store.select(getUser).pipe(
      filter(user => user.role === 'ADMIN'),
      tap((user) => {
        this.router.navigate(['/admin']);
      }),
      map(() => true)
    );

    const isUser$ = this.store.select(getUser).pipe(
      filter(user => user.role !== 'ADMIN'),
      tap((user) => {
        this.router.navigate(['/shopping']);
      }),
      map(() => false));

    return race<true, false>(isAdmin$, isUser$);
  }
}
