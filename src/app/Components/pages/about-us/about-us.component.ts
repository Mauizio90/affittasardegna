import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  constructor(private titleService: Title, private metaTagService: Meta) {
    this.titleService.setTitle("AffittaSardegna - Leader negli affitti di Case Vacanza, Appartamenti e Ville");
  }

}
