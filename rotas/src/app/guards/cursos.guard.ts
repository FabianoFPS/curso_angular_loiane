import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CursosGuard implements CanActivateChild {

  constructor() {}

	canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    console.log(`rota filha: ${state.url}`);
    return true;
  }
}
