import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';


@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.css'],
    standalone: true,
    imports: [TranslateModule, CommonModule]
})
export class PrivacyComponent {

  constructor(private translate: TranslateService, private seo: SeoService) {
  }

  ngOnInit(){
    let translatedTitle = this.translate.instant('privacyMetaTitle');
    let translatedDescription = this.translate.instant('privacyMetaDescription');
    this.seo.updateTitle(translatedTitle);
    this.seo.updateDescription(translatedDescription);
  }

}
