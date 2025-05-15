import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: SideNavComponent, children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'members', loadChildren: () => import('./modules/members/members.module').then(m => m.MembersModule)
      },
      {
        path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'more', loadChildren: () => import('./modules/more/more.module').then(m => m.MoreModule)
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
