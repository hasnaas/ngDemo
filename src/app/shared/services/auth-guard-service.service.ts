import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {

    return this.authService.user.pipe(
      map(u => {
        if (u)
          return true;
        else {
          this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
          return false;
        }

      })
    );
  }


}
