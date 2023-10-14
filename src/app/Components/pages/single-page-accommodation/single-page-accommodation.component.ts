import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccommodationService } from '../../services/accommodation.service';
import { Accommodation } from '../../models/accommodation';
import { faBathtub, faBed, faWifi, faLocationDot, faEuroSign, faCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-single-page-accommodation',
    templateUrl: './single-page-accommodation.component.html',
    styleUrls: ['./single-page-accommodation.component.css'],
    standalone: true,
    imports: [NgFor, FontAwesomeModule, TranslateModule]
})
export class SinglePageAccommodationComponent {
  bigImageSource!: string;
  accommodation: Accommodation | undefined;
  faBathtub = faBathtub;
  faBed = faBed;
  faWifi = faWifi;
  faLocationDot = faLocationDot;
  faEuroSign = faEuroSign;
  faCheck = faCheck;
  faUser = faUser;

  constructor(private accommodationService: AccommodationService, private route: ActivatedRoute, private titleService: Title, private metaTagService: Meta, private translate: TranslateService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const accommodationUrl = params['accommodationUrl' || 'en/' + 'accommodationUrl' || 'es/' + 'accommodationUrl' || 'de/' + 'accommodationUrl' || 'fr/' + 'accommodationUrl'];
      if (accommodationUrl) {
        this.accommodationService
          .getAccommodationByMetaUrl('/' + accommodationUrl)
          .subscribe(accommodation => {
            if (!accommodation) {
              const translatedPath = this.translate.instant('rl.home');
              this.router.navigate(['/' + translatedPath]);
              return;
            }

            this.accommodation = accommodation;
            this.translate.get('singlePageMetaTitle').subscribe((str: string) => {
              this.titleService.setTitle("AffittaSardegna - " + this.accommodation?.name_it?.toString() + str + this.accommodation?.city?.toString());
            });
            this.translate.get(['singlePageMetaDescription1', 'singlePageMetaDescription2', 'singlePageMetaDescription3']).subscribe((translations: { [key: string]: string }) => {
              const str1 = translations['singlePageMetaDescription1'];
              const str2 = translations['singlePageMetaDescription2'];
              const str3 = translations['singlePageMetaDescription3'];

              this.metaTagService.updateTag({ name: 'og:description', content: this.accommodation?.name_it?.toString() + str1 + this.accommodation?.guests + str2 + this.accommodation?.city?.toString() + str3 });
            });

            if (accommodation.images && accommodation.images.length > 0) {
              const firstImage = accommodation.images[0];
              this.metaTagService.updateTag({ property: 'og:image', content: firstImage });
            }

            if (accommodation.images && accommodation.images.length > 0) {
              this.bigImageSource = accommodation.images[0];
            }

            console.log(this.accommodation);
          });
      }
    });
  }
  

  replaceBigImage(imageSource: string) {
    this.bigImageSource = imageSource;
  }
  

}
