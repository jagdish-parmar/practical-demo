import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor(private auth: AuthService, public authService: AngularFireAuth,
    private router: Router,
    private loginService: LoginService, private toastr: ToastrService) { }
  public username: string;
  public password: string;
  public redirectUri: string;
  ngOnInit() {
    if (this.auth.isLoggednIn() === true && localStorage.getItem('type') === "User") {
      this.router.navigate(["/page/homes"]);
    }
    if (this.auth.isLoggednIn() === true && localStorage.getItem('type') === "Guest") {
      this.router.navigate(["/dashboard"])
    }
  }
  login() {
    this.authService.auth.signInWithEmailAndPassword(this.username, this.password).then((result) => {
      this.authService.auth.currentUser.getIdTokenResult().then((idTokenResult) => {
        this.auth.sendToken(idTokenResult.token)
        this.auth.setUser(idTokenResult.claims.type);
        this.auth.setUid(result.user.uid)
        if (idTokenResult.claims.type === "User") {
          this.router.navigate(["/page/homes"]);
          this.toastr.success(`Sucess`, "Sucessfully Login")
        }
        else {
          this.router.navigate(["/dashboard"]);
          this.toastr.success(`Sucess`, "Sucessfully Login")
        }
      }).catch((err) => {
        this.toastr.warning(`Warning`, err)
      })
    }).catch((err) => {
      this.toastr.warning(err)

    })
  }
}
