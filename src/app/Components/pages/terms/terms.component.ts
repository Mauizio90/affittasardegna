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
    this.translate.get('termsMetaTitle').subscribe((str: string) => {
      this.titleService.setTitle(str);
    });
    this.translate.get('termsMetaDescription').subscribe((str: string) => {
      this.metaTagService.updateTag({ name: 'description', content: str });
    });
  }

}
