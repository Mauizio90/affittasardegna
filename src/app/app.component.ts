import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from './Components/services/seo.service';
import { AccommodationService } from './Components/services/accommodation.service';
declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public router: Router, private metaTagService: Meta, private translate: TranslateService, private titleService: Title, private seo: SeoService, private accommodationService: AccommodationService) {

    const allAccommodations = this.accommodationService.getAccommodations().subscribe()

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && typeof window !== 'undefined') {
        (<any>window).gtag('config', 'G-7XJBP872BN', { 'page_path': event.urlAfterRedirects });
      }
    })
  }

  ngOnInit() {
  }
}

