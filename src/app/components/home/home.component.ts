import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRoutes } from 'src/app/enums/app.enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public navigationRoutes = NavigationRoutes;

  constructor(public router: Router) { }

  ngOnInit() {
    // var myCarousel = document.querySelector('#carouselExampleCaptions')
    // var carousel = new bootstrap.Carousel(myCarousel, {
    //   interval: 2000,
    //   wrap: false
    // })

    // TEST - FETCH IP
    this.getTestData().then(data => {
      console.log('DATA: ', data);
    });

  }

  public navigateToRoute(navigationRoute: NavigationRoutes) {
    this.router.navigateByUrl(navigationRoute);
  }

  public getTestData() {
    return fetch('https://ipinfo.io/json', {
      method: 'get'
    })
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }

}
