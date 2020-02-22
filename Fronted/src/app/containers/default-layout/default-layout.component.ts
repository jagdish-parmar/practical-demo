import { Component } from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { HomesService } from '../../services/homes.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  title = 'fileUpload'
  images;
  public image;
  public uid = localStorage.getItem('uid');
  constructor(private router: Router,
    public homeService: HomesService) {
  }
  public dbStore;
  public sidebarMinimized = false;
  public navItems = navItems;


  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  ngOnInit() {
    this.getProfileImage()
    if (localStorage.getItem('type') === 'Guest') {
      this.navItems = [{
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      }];
    }
    else {
      this.navItems = [{
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      },
      {
        title: true,
        name: 'PAGE'
      },
      {
        name: 'Home',
        url: '/page/homes',
        icon: 'icon-drop'
      },
      ];
    }
  }

  public signOut() {
    localStorage.clear()
    this.router.navigate(["/login"]);
    this.navItems = []
  }


  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      const formData = new FormData();
      formData.append('file', this.images);
      // this.uid = localStorage.getItem('uid')
      this.homeService.profileUpload(formData, this.uid).subscribe((res) => {
        this.getProfileImage();
      })
    }
  }

  public getProfileImage() {
    this.homeService.getProfileImage(this.uid).subscribe((res) => {
      this.image = res.url
    })
  }


}
