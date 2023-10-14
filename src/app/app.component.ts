import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'affittasardegna';
  constructor(public router: Router, private metaTagService: Meta, private translate: TranslateService, private titleService: Title) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && typeof window !== 'undefined') {
        (<any>window).gtag('config', 'G-7XJBP872BN', { 'page_path': event.urlAfterRedirects });
      }
    })
  }

  ngOnInit() {
    this.translate.get('homeMetaTitle').subscribe((title: string) => {
      this.translate.get('homeMetaDescription').subscribe((description: string) => {
        this.metaTagService.addTags([
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
          { property: 'description', content: description },
          { property: 'og:image', content: './assets/images/logo.png' },
        ]);
        this.titleService.setTitle(title);
      });
    });
  }
}

