import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';


@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css'],
    standalone: true,
    imports: [TranslateModule, CommonModule]
})
export class AboutUsComponent {

  constructor(private translate: TranslateService, private seo: SeoService) {
  }

  ngOnInit(){
    let translatedTitle = this.translate.instant('aboutUsMetaTitle');
    let translatedDescription = this.translate.instant('aboutUsMetaDescription');
    this.seo.updateTitle(translatedTitle);
    this.seo.updateDescription(translatedDescription);
  }
}
