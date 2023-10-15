import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';


@Component({
    selector: 'app-terms',
    templateUrl: './terms.component.html',
    styleUrls: ['./terms.component.css'],
    standalone: true,
    imports: [TranslateModule, CommonModule]
})
export class TermsComponent {

  constructor(private translate: TranslateService, private seo: SeoService) {
  }

  ngOnInit(){
    let translatedTitle = this.translate.instant('termsMetaTitle');
    let translatedDescription = this.translate.instant('termsMetaDescription');
    this.seo.updateTitle(translatedTitle);
    this.seo.updateDescription(translatedDescription);
  }
}
