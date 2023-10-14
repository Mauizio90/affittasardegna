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
  }

  ngOnInit(){
    this.translate.get('privacyMetaDescription').subscribe((title: string) => {
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
