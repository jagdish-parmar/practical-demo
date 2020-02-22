import { Component, OnInit } from '@angular/core';
import { HomesService } from '../../services/homes.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homes: any = [];
  constructor(public homeService: HomesService, private auth: AuthService, private router: Router, ) {

  }
  ngOnInit() {
    if (localStorage.getItem('type') === 'Guest') {
      this.router.navigate(["/dashbord"]);
    }
    else {
      this.homeService.getAllUsers().subscribe((res) => {
        this.homes = res;
      })
    }
  }


}
