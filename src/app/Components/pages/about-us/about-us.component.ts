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
    this.metaTagService.updateTag({ name: 'description', content: 'AffittaSardegna è leader negli affitti vacanze per tutta la metà superiore della Sardegna. Con oltre 500 unità, propone case vacanze diversificate, dai semplici monolocali alle ville esclusive.' });
  }

}
