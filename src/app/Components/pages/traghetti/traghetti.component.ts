import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';
import { ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-traghetti',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './traghetti.component.html',
  styleUrls: ['./traghetti.component.css']
})
export class TraghettiComponent {

  constructor(private ref: ChangeDetectorRef, private translate: TranslateService, private seo: SeoService, private sanitizer: DomSanitizer) { }

  ngOnInit(){

    let script = document.createElement('script');
    script.src = "./assets/resize.js";
    document.head.appendChild(script);
    
    let translatedTitle = this.translate.instant('traghettiMetaTitle');
    let translatedDescription = this.translate.instant('traghettiMetaDescription');
    this.seo.updateTitle(translatedTitle);
    this.seo.updateDescription(translatedDescription);
  }
  

  ngAfterViewInit() {
    this.ref.detach();
  }

  get iframeUrl() {
    const translatedUrl = this.translate.instant('traghettiper');
    return this.sanitizer.bypassSecurityTrustResourceUrl(translatedUrl);
  }
}
