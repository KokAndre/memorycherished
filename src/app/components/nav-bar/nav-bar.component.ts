import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationRoutes } from 'src/app/enums/app.enums';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public currentRoute: string;
  public navigationRoutes = NavigationRoutes;

  @Input() public isMobileView = false;

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit() {
  }

  public navigateToRoute(newRoute: NavigationRoutes) {
    this.router.navigateByUrl(newRoute);
  }

}
