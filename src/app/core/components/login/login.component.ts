import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.authService.user.subscribe(u => {
      if (u)
        this.userService.save(u);
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

}
