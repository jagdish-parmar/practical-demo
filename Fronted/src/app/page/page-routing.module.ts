import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [{
  path: '',
  data: {
    title: 'Page'
  },
  children: [
    {
      path: '',
      redirectTo: 'homes'
    },
    {
      path: 'homes',
      component: HomeComponent,
      data: {
        title: 'Homes'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
