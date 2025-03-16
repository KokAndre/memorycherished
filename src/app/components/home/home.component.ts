import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/enums/app.enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public appRoutes = AppRoutes;

  constructor(public router: Router) { }

  ngOnInit() {
    // var myCarousel = document.querySelector('#carouselExampleCaptions')
    // var carousel = new bootstrap.Carousel(myCarousel, {
    //   interval: 2000,
    //   wrap: false
    // })
  }

  public navigateToRoute(navigationRoute: AppRoutes) {
    this.router.navigateByUrl(navigationRoute);
  }

}
