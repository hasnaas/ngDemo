import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardServiceService implements CanActivate {

  canActivate() {

    return this.authService.appUser$.pipe(
      map(u => {
        if (u)
          if (u.isAdmin)
            return true;
          else return false;
        else
          return false;
      })
    )
  }
  constructor(private authService: AuthService) { }
}
