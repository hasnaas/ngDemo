import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  DataS: Subscription;

  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.DataS = this.authService.user.subscribe(u => {
      if (u) {
        this.userService.save(u);
      }
    })
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || '/';
    this.authService.loginG().then(response => {
      if (response == "OK")
        this.router.navigate([returnUrl]);
      else
        this.router.navigate(['error']);
    })
  }

  pending() {
    alert("Not implemented");
  }

  ngOnDestroy() {
    this.DataS.unsubscribe();
  }

}
