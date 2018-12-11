import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthCompanyService } from "./auth-company.service";
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCompanyGuardService implements CanActivate {
  constructor(
    private authCompany: AuthCompanyService,
    private router: Router,
    private notify: NotifyService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authCompany.company.pipe(
      take(1),
      map(company => !!company),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('adgang nægtet');
          this.notify.update('Du skal være logget ind!', 'error');
          this.router.navigate(['/login-company']);
        }
      })
    );
  }
}