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
    this.translate.get('aboutUsMetaTitle').subscribe((str: string) => {
      this.titleService.setTitle(str);
    });
    this.translate.get('aboutUsMetaDescription').subscribe((str: string) => {
      this.metaTagService.updateTag({ name: 'description', content: str });
    });
  }

}
