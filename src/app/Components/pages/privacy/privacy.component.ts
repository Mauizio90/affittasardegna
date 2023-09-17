import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';


@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.css'],
    standalone: true,
    imports: [TranslateModule, CommonModule]
})
export class PrivacyComponent {

  constructor(private titleService: Title, private metaTagService: Meta) {
    this.titleService.setTitle("AffittaSardegna - Regole sulla Privacy");
    this.metaTagService.updateTag({ name: 'description', content: 'Informazioni sulla raccolta dei dati, privacy e cookie law' });
  }

}
