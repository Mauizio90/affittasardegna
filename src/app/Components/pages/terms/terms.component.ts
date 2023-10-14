import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-terms',
    templateUrl: './terms.component.html',
    styleUrls: ['./terms.component.css'],
    standalone: true,
    imports: [TranslateModule, CommonModule]
})
export class TermsComponent {

  constructor(private titleService: Title, private metaTagService: Meta, private translate: TranslateService) {
  }

  ngOnInit(){
    this.translate.get('termsMetaTitle').subscribe((title: string) => {
      this.translate.get('termsMetaDescription').subscribe((description: string) => {
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
