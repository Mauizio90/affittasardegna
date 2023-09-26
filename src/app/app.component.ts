import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'affittasardegna';
  constructor(public router: Router, private metaTagService : Meta) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && typeof window !== 'undefined') {
        (<any>window).gtag('config', 'G-7XJBP872BN', { 'page_path': event.urlAfterRedirects });
      }      
    })
  }

  ngOnInit(){
    this.metaTagService.addTag({ property: 'og:image', content: './assets/images/logo.png' });
  }
}

