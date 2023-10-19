import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-traghetti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traghetti.component.html',
  styleUrls: ['./traghetti.component.css']
})
export class TraghettiComponent {

  constructor(private sanitizer: DomSanitizer, private translate: TranslateService, private seo: SeoService) { }

  ngOnInit(){
    let translatedTitle = this.translate.instant('traghettiMetaTitle');
    let translatedDescription = this.translate.instant('traghettiMetaDescription');
    this.seo.updateTitle(translatedTitle);
    this.seo.updateDescription(translatedDescription);
  }

  get iframeUrl() {
    const translatedUrl = this.translate.instant('traghettiper');
    return this.sanitizer.bypassSecurityTrustResourceUrl(translatedUrl);
  }
  
}
