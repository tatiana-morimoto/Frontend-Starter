import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { combineLatest, Observable, of, race } from 'rxjs';
import { getAdminRole, getCustomerRole } from '../../store/users/users.selector';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/store.model';
import { LoadUser } from '../../store/users/users.actions';
import { filter, first, map, mapTo, take, takeUntil, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppStore>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userId = route.paramMap.get('id');

    this.store.dispatch(new LoadUser(userId));

    const isAdmin$ = this.store.select(getAdminRole).pipe(
      first(Boolean),
      map(() => true),
    );

    const isCustomer$ = this.store.select(getCustomerRole).pipe(
      first(Boolean),
      tap(() => this.router.navigate([`/shopping/${userId}`])),
      map(() => false),
    );

    return race<boolean>(isAdmin$, isCustomer$);
  }
}
