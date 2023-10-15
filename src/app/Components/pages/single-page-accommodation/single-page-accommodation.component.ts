import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccommodationService } from '../../services/accommodation.service';
import { Accommodation } from '../../models/accommodation';
import { faBathtub, faBed, faWifi, faLocationDot, faEuroSign, faCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';



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

  constructor(private accommodationService: AccommodationService, private route: ActivatedRoute, private titleService: Title, private metaTagService: Meta, private translate: TranslateService, private router: Router, private seo: SeoService) { }

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
            let translatedTitle = this.translate.instant('singlePageMetaTitle');
            let translatedDescription = this.translate.instant('singlePageMetaDescription1') + this.accommodation?.name_it?.toString() + this.translate.instant('singlePageMetaDescription2') + this.accommodation?.guests + this.translate.instant('singlePageMetaDescription3') + this.accommodation?.city?.toString();

            this.seo.updateTitle(translatedTitle);
            this.seo.updateDescription(translatedDescription);

            if (accommodation.images && accommodation.images.length > 0) {
              const firstImage = accommodation.images[0];
              this.seo.updateImage(firstImage);
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
