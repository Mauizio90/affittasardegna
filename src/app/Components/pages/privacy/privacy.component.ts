import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent {

  constructor(private titleService: Title, private metaTagService: Meta) {
    this.titleService.setTitle("AffittaSardegna - Regole sulla Privacy");
  }

}
