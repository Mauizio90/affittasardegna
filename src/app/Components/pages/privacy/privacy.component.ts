import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.css'],
    standalone: true,
    imports: [TranslateModule, CommonModule]
})
export class PrivacyComponent {

  constructor(private titleService: Title, private metaTagService: Meta, private translate: TranslateService) {
    this.translate.get('privacyMetaTitle').subscribe((str: string) => {
      this.titleService.setTitle(str);
    });
    this.translate.get('privacyMetaDescription').subscribe((str: string) => {
      this.metaTagService.updateTag({ name: 'description', content: str });
    });
  }

}
