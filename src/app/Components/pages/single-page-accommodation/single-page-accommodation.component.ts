import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccommodationService } from '../../services/accommodation.service';
import { Accommodation } from '../../models/accommodation';
import { faBathtub, faBed, faWifi, faLocationDot, faEuroSign, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor } from '@angular/common';


@Component({
    selector: 'app-single-page-accommodation',
    templateUrl: './single-page-accommodation.component.html',
    styleUrls: ['./single-page-accommodation.component.css'],
    standalone: true,
    imports: [NgFor, FontAwesomeModule]
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

  constructor(private accommodationService: AccommodationService, private route: ActivatedRoute, private titleService: Title, private metaTagService: Meta) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const accommodationUrl = params['accommodationUrl'];
      if (accommodationUrl) {
        this.accommodationService
          .getAccommodationByMetaUrl('/' + accommodationUrl)
          .subscribe(accommodation => {
            this.accommodation = accommodation;
            this.titleService.setTitle("AffittaSardegna - " + this.accommodation?.name_it?.toString() + " a " + this.accommodation?.city?.toString());
            this.metaTagService.updateTag({ name: 'description', content: this.accommodation?.name_it?.toString() + ", splendido alloggio per " + this.accommodation?.guests + " persone a " + this.accommodation?.city?.toString() + " in Sardegna" });
            
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
