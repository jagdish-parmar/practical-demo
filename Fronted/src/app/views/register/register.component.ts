import { Component } from '@angular/core';
import { HomesService } from '../../services/homes.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  public register = {
    displayName: '',
    email: '',
    password: '',
    type: 'User'
  }
  constructor(public homeService: HomesService, private auth: AuthService, private router: Router) { }
  ngOnInit() {
    if (this.auth.isLoggednIn() === true) {
      this.router.navigate(["/page/homes"]);
    }
  }

  registerUser(register) {
    console.log(register)
    this.homeService.registerUser(register).subscribe((res: any) => {
      if (res.code === 6001) {
        this.router.navigate(['/login'])
      }
    })
  }
}
