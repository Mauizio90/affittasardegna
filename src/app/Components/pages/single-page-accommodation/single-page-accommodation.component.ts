import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccommodationService } from '../../services/accommodation.service';
import { Accommodation } from '../../models/accommodation';
import { faBathtub, faBed, faWifi, faLocationDot, faEuroSign, faCheck } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-single-page-accommodation',
  templateUrl: './single-page-accommodation.component.html',
  styleUrls: ['./single-page-accommodation.component.css']
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

  constructor(
    private accommodationService: AccommodationService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const accommodationUrl = params['accommodationUrl'];
      if (accommodationUrl) {
        this.accommodationService
          .getAccommodationByMetaUrl('/'+accommodationUrl)
          .subscribe(accommodation => {
            this.accommodation = accommodation;
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

  generateIframeUrl() {
    const latitude = this.accommodation?.latitude;
    const longitude = this.accommodation?.longitude;
    const url = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d0!2d${longitude}!3d${latitude}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  

}
