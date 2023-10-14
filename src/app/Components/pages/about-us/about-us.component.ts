import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css'],
    standalone: true,
    imports: [TranslateModule, CommonModule]
})
export class AboutUsComponent {

  constructor(private titleService: Title, private metaTagService: Meta, private translate: TranslateService) {
  }

  ngOnInit(){
    this.translate.get('aboutUsMetaTitle').subscribe((title: string) => {
      this.translate.get('aboutUsMetaDescription').subscribe((description: string) => {
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
